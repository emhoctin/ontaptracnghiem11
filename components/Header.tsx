
import React from 'react';
import { AcademicCapIcon } from './icons';

interface HeaderProps {
    subjectName?: string;
}

const Header: React.FC<HeaderProps> = ({ subjectName }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-center md:justify-start">
        <AcademicCapIcon className="w-9 h-9 text-primary" />
        <h1 className="text-2xl font-bold text-dark ml-3">
          Luyện tập AI {subjectName && <span className="text-secondary font-semibold">| {subjectName}</span>}
        </h1>
      </div>
    </header>
  );
};

export default Header;
