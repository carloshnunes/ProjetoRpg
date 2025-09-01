import React from 'react';

interface GameControlsProps {
  buttonTexts: string[];
  buttonFunctions: (() => void)[];
}

export const GameControls: React.FC<GameControlsProps> = ({ 
  buttonTexts, 
  buttonFunctions 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {buttonTexts.map((text, index) => (
        <button
          key={index}
          onClick={buttonFunctions[index]}
          className="group relative px-6 py-4 font-cinzel text-lg font-semibold text-white bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-xl cursor-pointer transition-all duration-300 hover:from-slate-600 hover:to-slate-700 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-500/25 hover:-translate-y-1 overflow-hidden"
        >
          <div className="relative z-10 flex items-center justify-center space-x-2">
            <span>{text}</span>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      ))}
    </div>
  );
};
