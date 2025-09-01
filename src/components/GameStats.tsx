import React from 'react';
import { getXpProgress } from '../utils/levelSystem';

interface GameStatsProps {
  xp: number;
  level: number;
  health: number;
  maxHealth: number;
  gold: number;
}

export const GameStats: React.FC<GameStatsProps> = ({ xp, level, health, maxHealth, gold }) => {
  const xpProgress = getXpProgress(xp);
  
  return (
    <div className="space-y-6">
      <h3 className="font-cinzel text-2xl text-center text-yellow-400 font-bold tracking-wide">
        Player Stats
      </h3>
      
      <div className="space-y-5">
        {/* Level */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl drop-shadow-lg">🏆</div>
            <div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Level</div>
              <div className="text-xs text-slate-500">Power Level</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-400 drop-shadow-lg">{level}</div>
            <div className="text-xs text-slate-500">LVL</div>
          </div>
        </div>

        {/* XP Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl drop-shadow-lg">⭐</div>
              <div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Experience</div>
                <div className="text-xs text-slate-500">Next Level Progress</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-400 drop-shadow-lg">{xpProgress.current}/{xpProgress.required}</div>
              <div className="text-xs text-slate-500">XP</div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(xpProgress.progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Health */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl drop-shadow-lg">❤️</div>
              <div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Health</div>
                <div className="text-xs text-slate-500">Life Force</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-400 drop-shadow-lg">{health}</div>
              <div className="text-xs text-slate-500">HP</div>
            </div>
          </div>
          
          {/* Health Bar */}
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(health / maxHealth) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Gold */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl drop-shadow-lg">💰</div>
            <div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Gold</div>
              <div className="text-xs text-slate-500">Currency</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-400 drop-shadow-lg">{gold}</div>
            <div className="text-xs text-slate-500">G</div>
          </div>
        </div>
      </div>
    </div>
  );
};
