import React from 'react';

interface MonsterStatsProps {
  monsterName: string;
  monsterHealth: number;
  isVisible: boolean;
}

export const MonsterStats: React.FC<MonsterStatsProps> = ({ 
  monsterName, 
  monsterHealth, 
  isVisible 
}) => {
  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-sm rounded-2xl border border-red-600/50 p-6 shadow-xl">
      <h3 className="font-cinzel text-xl text-center text-red-300 mb-4">Enemy Stats</h3>
      
      <div className="space-y-4">
        {/* Monster Name */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-800/30 to-red-700/30 rounded-lg border border-red-600/30">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">👹</div>
            <span className="font-semibold text-red-200">Monster</span>
          </div>
          <span className="text-xl font-bold text-red-300 capitalize">{monsterName}</span>
        </div>

        {/* Monster Health */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-800/30 to-red-700/30 rounded-lg border border-red-600/30">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">💀</div>
            <span className="font-semibold text-red-200">Health</span>
          </div>
          <span className="text-xl font-bold text-red-300">{monsterHealth}</span>
        </div>
      </div>
    </div>
  );
};
