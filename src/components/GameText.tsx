import React from 'react';

interface GameTextProps {
  text: string;
}

export const GameText: React.FC<GameTextProps> = ({ text }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-6 shadow-xl">
      <div className="text-lg leading-relaxed text-slate-200 font-crimson">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};
