
import React from 'react';
import { Subject } from '../../types';
import Card from '../Card';
import { AcademicCapIcon, DnaIcon, ShieldCheckIcon } from '../icons';

interface SubjectSelectionScreenProps {
  subjects: Subject[];
  onSelectSubject: (subject: Subject) => void;
}

const ICONS: { [key: string]: React.ElementType } = {
  AcademicCapIcon,
  DnaIcon,
  ShieldCheckIcon
};

const SubjectSelectionScreen: React.FC<SubjectSelectionScreenProps> = ({ subjects, onSelectSubject }) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-5xl text-center mb-10 bg-gradient-to-br from-primary to-indigo-700 text-white shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Luyện tập AI</h1>
        <p className="text-lg text-indigo-200">Chọn một môn học để bắt đầu hành trình chinh phục kiến thức với sự trợ giúp của AI.</p>
      </Card>
      
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-dark">Chọn môn học</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map(subject => {
            const IconComponent = ICONS[subject.icon];
            return (
              <Card key={subject.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                        {IconComponent && <IconComponent className="w-6 h-6"/>}
                      </span>
                      <h3 className="text-xl font-bold text-dark">{subject.name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 min-h-[60px]">{subject.description}</p>
                </div>
                <div className="flex flex-col space-y-3 mt-auto">
                  <button
                    onClick={() => onSelectSubject(subject)}
                    className="w-full bg-accent text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300"
                  >
                    Bắt đầu học
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectSelectionScreen;