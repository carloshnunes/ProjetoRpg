import React from 'react';
import { getAssetPath } from '../utils/assets';

interface GameIllustrationProps {
  illustration: string;
  locationName: string;
}

export const GameIllustration: React.FC<GameIllustrationProps> = ({ 
  illustration, 
  locationName 
}) => {
  // Check if illustration is an image path or emoji art
  const isImage = illustration.startsWith('/src/assets/') || illustration.startsWith('http');
  
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-6 shadow-xl">
      {/* Location Name */}
      <div className="text-center mb-4">
        <h2 className="font-cinzel text-2xl text-yellow-400 font-semibold">
          {locationName === "town square" && "🏰 Town Square"}
          {locationName === "store" && "🏪 Blacksmith Shop"}
          {locationName === "cave" && "🕳️ Dark Cave"}
          {locationName === "fight" && "⚔️ Battle Arena"}
          {locationName === "kill monster" && "💀 Victory!"}
          {locationName === "lose" && "💀 Defeat"}
          {locationName === "win" && "🏆 Epic Victory!"}
          {locationName === "easter egg" && "🎲 Secret Game"}
        </h2>
      </div>

      {/* Scene Display */}
      <div className="bg-gradient-to-br from-slate-900/50 to-black/50 rounded-xl p-6 border border-slate-700/50 min-h-48 flex items-center justify-center">
        {isImage ? (
          <img 
            src={getAssetPath(illustration)} 
            alt={locationName}
            className={`max-w-full max-h-64 object-contain rounded-lg ${
              locationName === "fight" ? "animate-combat-shake" : 
              locationName === "win" ? "animate-victory-sparkle" :
              locationName === "lose" ? "animate-pulse" :
              "animate-scene-glow"
            }`}
          />
        ) : (
          <div className="text-5xl leading-relaxed text-center font-mono text-slate-300">
            {illustration.split('\n').map((line, index) => (
              <div 
                key={index} 
                className={`${
                  locationName === "fight" ? "animate-combat-shake" : 
                  locationName === "win" ? "animate-victory-sparkle" :
                  locationName === "lose" ? "animate-pulse" :
                  "animate-scene-glow"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
