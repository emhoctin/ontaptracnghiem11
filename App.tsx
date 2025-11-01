
import React, { useState, useMemo, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

// Import components
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import SummaryScreen from './components/SummaryScreen';
import SessionEndScreen from './components/data/SessionEndScreen';
import SubjectSelectionScreen from './components/data/SubjectSelectionScreen';
import { LoadingSpinner } from './components/LoadingSpinner';


// Import data and types
import { SUBJECTS } from './data/subjects';
import { INFORMATICS_TOPICS } from './data/cs_topics';
import { INFORMATICS_QUESTIONS } from './data/cs_questions';
import { BIOLOGY_TOPICS } from './data/biology_topics';
import { QPAN_TOPICS } from './data/qpan_topics';
import { QPAN_QUESTIONS } from './data/qpan_questions';
import { Subject, Topic, Question, Attempt, AdaptiveSuggestions } from './types';
import { BIOLOGY_QUESTIONS_B1 } from './data/bio_questions_b1';
import { BIOLOGY_QUESTIONS_B2 } from './data/bio_questions_b2';
import { BIOLOGY_QUESTIONS_B3 } from './data/bio_questions_b3';
import { BIOLOGY_QUESTIONS_B4 } from './data/bio_questions_b4';
import { BIOLOGY_QUESTIONS_B5 } from './data/bio_questions_b5';
import { BIOLOGY_QUESTIONS_B6 } from './data/bio_questions_b6';
import { BIOLOGY_QUESTIONS_B7 } from './data/bio_questions_b7';


// Import services
import { generateSummaryForTopic, getAdaptiveSuggestions } from './services/geminiService';

// Consolidate all built-in data
const BUILT_IN_TOPICS = [...INFORMATICS_TOPICS, ...BIOLOGY_TOPICS, ...QPAN_TOPICS];
const BUILT_IN_QUESTIONS = [
    ...INFORMATICS_QUESTIONS, 
    ...BIOLOGY_QUESTIONS_B1,
    ...BIOLOGY_QUESTIONS_B2,
    ...BIOLOGY_QUESTIONS_B3,
    ...BIOLOGY_QUESTIONS_B4,
    ...BIOLOGY_QUESTIONS_B5,
    ...BIOLOGY_QUESTIONS_B6,
    ...BIOLOGY_QUESTIONS_B7,
    ...QPAN_QUESTIONS
];


// Main App Component
const App: React.FC = () => {
    // State management
    const [ai, setAi] = useState<GoogleGenAI | null>(null);
    const [appState, setAppState] = useState<'subject-selection' | 'home' | 'quiz' | 'summary' | 'session-end'>('subject-selection');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
    const [summaryContent, setSummaryContent] = useState('');
    const [quizAttempts, setQuizAttempts] = useState<Attempt[]>([]);
    const [adaptiveSuggestions, setAdaptiveSuggestions] = useState<AdaptiveSuggestions | null>(null);

    // Combine built-in and user-uploaded questions
    const allQuestions = useMemo(() => {
        return BUILT_IN_QUESTIONS;
    }, []);

    const allTopics = useMemo(() => {
        // In the future, we could also allow users to upload new topics
        return BUILT_IN_TOPICS;
    }, []);
    
    // Initialize Gemini AI client
   useEffect(() => {
    // Đúng cú pháp cho môi trường Vite
    const apiKey = import.meta.env.VITE_API_KEY;
    if (apiKey) {
        const genAI = new GoogleGenAI({ apiKey });
        setAi(genAI);
    } else {
        console.error("API Key chưa được cấu hình. Hãy kiểm tra file .env");
    }
}, []);

    const questionsByTopic = useMemo(() => {
        return allQuestions.reduce((acc, q) => {
            if (!acc[q.topicId]) {
                acc[q.topicId] = [];
            }
            acc[q.topicId].push(q);
            return acc;
        }, {} as Record<string, Question[]>);
    }, [allQuestions]);

    const handleSelectSubject = (subject: Subject) => {
        setSelectedSubject(subject);
        setAppState('home');
    };
    
    const handleViewSummary = async (topic: Topic) => {
        if (!ai || !selectedSubject) return;
        setIsLoading(true);
        setSelectedTopic(topic);
        setAppState('summary');
        try {
            const summary = await generateSummaryForTopic(ai, topic, selectedSubject.name);
            setSummaryContent(summary);
        } catch (error) {
            console.error("Failed to generate summary:", error);
            setSummaryContent("Đã có lỗi xảy ra khi tạo bản tóm tắt. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleStartQuiz = (topic: Topic) => {
        const allTopicQuestions = questionsByTopic[topic.id] || [];
    
        if (allTopicQuestions.length === 0) {
            alert(`Hiện tại chưa có câu hỏi nào cho chủ đề này.`);
            return;
        }
    
        // For quiz, we use all questions of the topic
        const shuffledQuestions = [...allTopicQuestions].sort(() => Math.random() - 0.5);
    
        const questionsWithShuffledAnswers = shuffledQuestions.map(question => {
            const optionsWithOriginalIndex = question.options.map((option, index) => ({
                text: option,
                originalIndex: index
            }));
            const shuffledOptionsWithOriginalIndex = [...optionsWithOriginalIndex].sort(() => Math.random() - 0.5);
            const newOptions = shuffledOptionsWithOriginalIndex.map(opt => opt.text);
            const newAnswerIndices = question.answerIndices.map(correctOriginalIndex => {
                return shuffledOptionsWithOriginalIndex.findIndex(opt => opt.originalIndex === correctOriginalIndex);
            });

            return {
                ...question,
                options: newOptions,
                answerIndices: newAnswerIndices.sort((a, b) => a - b)
            };
        });

        setQuizQuestions(questionsWithShuffledAnswers);
        setSelectedTopic(topic);
        setQuizAttempts([]);
        setAdaptiveSuggestions(null);
        setAppState('quiz');
    };

    const handleQuizEnd = async (attempts: Attempt[]) => {
        if (!ai || !selectedSubject) return;
        setQuizAttempts(attempts);
        setIsLoading(true);
        setAppState('session-end');
        try {
            const suggestions = await getAdaptiveSuggestions(ai, attempts, selectedSubject.name);
            setAdaptiveSuggestions(suggestions);
        } catch (error) {
            console.error("Failed to get adaptive suggestions:", error);
            setAdaptiveSuggestions(null);
        } finally {
            setIsLoading(false);
        }
    };
    
    const goBackToSubjectSelection = () => {
        setAppState('subject-selection');
        setSelectedSubject(null);
        setSelectedTopic(null);
        setQuizAttempts([]);
        setAdaptiveSuggestions(null);
        setSummaryContent('');
    };

    const goHome = () => {
        setAppState('home');
        setSelectedTopic(null);
        setQuizAttempts([]);
        setAdaptiveSuggestions(null);
        setSummaryContent('');
    };
    
    const handlePracticeAgain = () => {
        if (selectedTopic) {
            handleStartQuiz(selectedTopic);
        } else {
            goHome();
        }
    };

    const renderContent = () => {
        if (isLoading && appState !== 'session-end') {
            return (
                <div className="flex justify-center items-center py-20">
                    <LoadingSpinner />
                </div>
            );
        }

        switch (appState) {
            case 'subject-selection':
                return (
                    <SubjectSelectionScreen
                        subjects={SUBJECTS}
                        onSelectSubject={handleSelectSubject}
                    />
                );
            case 'quiz':
                return (selectedTopic && quizQuestions.length > 0 && ai) ? (
                    <QuizScreen 
                        topic={selectedTopic} 
                        questions={quizQuestions} 
                        onQuizEnd={handleQuizEnd} 
                        ai={ai}
                        onRestartQuiz={handleStartQuiz} 
                        goHome={goBackToSubjectSelection}
                    />
                ) : <p>Lỗi khi bắt đầu bài kiểm tra. Vui lòng thử lại.</p>;
            case 'summary':
                return selectedTopic ? (
                     <SummaryScreen 
                        topic={selectedTopic} 
                        summaryContent={summaryContent} 
                        onBack={goHome} 
                    />
                ) : <p>Lỗi khi tải tóm tắt. Vui lòng thử lại.</p>;
            case 'session-end':
                return (
                    <SessionEndScreen 
                        attempts={quizAttempts} 
                        suggestions={adaptiveSuggestions}
                        onRestart={goBackToSubjectSelection}
                        onPracticeAgain={handlePracticeAgain}
                    />
                );
            case 'home':
            default:
                const topicsForSubject = allTopics.filter(t => t.subjectId === selectedSubject?.id);
                return selectedSubject ? (
                    <HomeScreen 
                        subject={selectedSubject}
                        topics={topicsForSubject} 
                        onStartQuiz={handleStartQuiz} 
                        onViewSummary={handleViewSummary}
                        onBack={goBackToSubjectSelection}
                    />
                ) : <p>Lỗi khi chọn môn học. Vui lòng thử lại.</p>;
        }
    };
    
    return (
        <div className="bg-light min-h-screen font-sans">
            <Header subjectName={selectedSubject?.name} />
            <main className="container mx-auto p-4 md:p-6">
                {!ai && <div className="text-center text-red-600 font-bold p-4 bg-red-100 rounded-lg">Lỗi: API Key chưa được cấu hình.</div>}
                {ai && renderContent()}
            </main>
        </div>
    );
};

export default App;
