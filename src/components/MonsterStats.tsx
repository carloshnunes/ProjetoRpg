import React, { useState, useEffect } from 'react';
import { GameIcon } from '../utils/icons';

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
  const [displayHealth, setDisplayHealth] = useState(monsterHealth);
  const [isDefeated, setIsDefeated] = useState(false);
  const [showDefeatAnimation, setShowDefeatAnimation] = useState(false);

  // Reset state when monster changes
  useEffect(() => {
    if (monsterHealth > 0) {
      setDisplayHealth(monsterHealth);
      setIsDefeated(false);
      setShowDefeatAnimation(false);
    } else if (monsterHealth <= 0 && !isDefeated) {
      // Monstro foi derrotado
      setIsDefeated(true);
      setShowDefeatAnimation(true);
    }
  }, [monsterHealth, isDefeated]);

  // Animar a vida diminuindo gradualmente
  useEffect(() => {
    if (monsterHealth <= 0 && displayHealth > 0) {
      // Animar a vida diminuindo até zero quando derrotado
      const interval = setInterval(() => {
        setDisplayHealth(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsDefeated(true);
            setShowDefeatAnimation(true);
            return 0;
          }
          return Math.max(0, prev - Math.ceil(displayHealth / 10)); // Diminui em 10% a cada frame
        });
      }, 100); // 100ms entre cada frame

      return () => clearInterval(interval);
    } else if (monsterHealth > 0 && monsterHealth !== displayHealth) {
      // Animar a vida diminuindo durante qualquer mudança (ataque)
      const targetHealth = monsterHealth;
      const currentHealth = displayHealth;
      const damage = currentHealth - targetHealth;
      
      if (damage > 0) {
        // Animar diminuindo
        const steps = Math.min(damage, 8); // Máximo 8 passos para não ficar muito lento
        const stepSize = Math.ceil(damage / steps);
        
        let currentStep = 0;
        const interval = setInterval(() => {
          setDisplayHealth(prev => {
            currentStep++;
            const newHealth = Math.max(targetHealth, prev - stepSize);
            
            if (currentStep >= steps || newHealth <= targetHealth) {
              clearInterval(interval);
              return targetHealth;
            }
            
            return newHealth;
          });
        }, 60); // 60ms entre cada frame

        return () => clearInterval(interval);
      }
    }
  }, [monsterHealth, displayHealth]);

  if (!isVisible) return null;

  return (
    <div className={`bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-sm rounded-2xl border border-red-600/50 p-6 shadow-xl transition-all duration-500 ${
      isDefeated ? 'animate-pulse scale-105' : ''
    }`}>
      <h3 className="font-cinzel text-xl text-center text-red-300 mb-4">Estatísticas do Inimigo</h3>
      
      <div className="space-y-4">
        {/* Monster Name */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-800/30 to-red-700/30 rounded-lg border border-red-600/30">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              <GameIcon name="monster" size={24} className="text-red-300" />
            </div>
            <span className="font-semibold text-red-200">Monstro</span>
          </div>
          <span className="text-xl font-bold text-red-300 capitalize">{monsterName}</span>
        </div>

        {/* Monster Health */}
        <div className={`flex items-center justify-between p-3 bg-gradient-to-r from-red-800/30 to-red-700/30 rounded-lg border border-red-600/30 transition-all duration-300 ${
          isDefeated ? 'bg-gradient-to-r from-red-900/50 to-red-800/50 border-red-500/50' : ''
        }`}>
          <div className="flex items-center space-x-3">
            <div className="text-2xl transition-all duration-300">
              {isDefeated ? (
                <GameIcon 
                  name="defeat" 
                  size={24} 
                  className={`text-red-500 ${showDefeatAnimation ? 'animate-bounce' : ''}`} 
                />
              ) : (
                <GameIcon 
                  name="health" 
                  size={24} 
                  className={`text-red-300 ${displayHealth <= monsterHealth * 0.3 ? 'animate-pulse' : ''}`} 
                />
              )}
            </div>
            <span className="font-semibold text-red-200">
              {isDefeated ? "Status" : "Vida"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {/* Barra de vida visual */}
            {!isDefeated && (
              <div className="w-16 h-2 bg-red-900/50 rounded-full overflow-hidden border border-red-600/30">
                <div 
                  className="h-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-300 ease-out"
                  style={{ 
                    width: `${(displayHealth / monsterHealth) * 100}%`,
                    transform: displayHealth <= monsterHealth * 0.3 ? 'scaleY(1.2)' : 'scaleY(1)'
                  }}
                />
              </div>
            )}
            
            {/* Valor da vida */}
            <span className={`text-xl font-bold transition-all duration-300 ${
              isDefeated 
                ? 'text-red-500 animate-pulse' 
                : displayHealth <= monsterHealth * 0.3 
                  ? 'text-red-400 animate-pulse' 
                  : 'text-red-300'
            }`}>
              {isDefeated ? (
                <span className={`${showDefeatAnimation ? 'animate-bounce' : ''}`}>
                  DERROTADO
                </span>
              ) : (
                displayHealth
              )}
            </span>
          </div>
        </div>

        {/* Efeito de derrota */}
        {showDefeatAnimation && (
          <div className="absolute inset-0 bg-red-500/20 rounded-2xl animate-pulse pointer-events-none" />
        )}
      </div>
    </div>
  );
};
