import React from 'react';
import { getAssetPath } from '../utils/assets';
import { GameIcon } from '../utils/icons';

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
        <h2 className="font-cinzel text-2xl text-yellow-400 font-semibold flex items-center justify-center">
          {locationName === "town square" && (
            <>
              <GameIcon name="store" size={24} className="mr-2 text-yellow-400" />
              Praça da Cidade
            </>
          )}
          {locationName === "store" && (
            <>
              <GameIcon name="store" size={24} className="mr-2 text-yellow-400" />
              Loja do Ferreiro
            </>
          )}
          {locationName === "cave" && (
            <>
              <GameIcon name="cave" size={24} className="mr-2 text-yellow-400" />
              Caverna Escura
            </>
          )}
          {locationName === "fight" && (
            <>
              <GameIcon name="sword" size={24} className="mr-2 text-yellow-400" />
              Arena de Batalha
            </>
          )}
          {locationName === "kill monster" && (
            <>
              <GameIcon name="victory" size={24} className="mr-2 text-yellow-400" />
              Vitória!
            </>
          )}
          {locationName === "lose" && (
            <>
              <GameIcon name="defeat" size={24} className="mr-2 text-yellow-400" />
              Derrota
            </>
          )}
          {locationName === "win" && (
            <>
              <GameIcon name="win" size={24} className="mr-2 text-yellow-400" />
              Vitória Épica!
            </>
          )}
          {locationName === "easter egg" && (
            <>
              <GameIcon name="game" size={24} className="mr-2 text-yellow-400" />
              Jogo Secreto
            </>
          )}
        </h2>
      </div>

      {/* Scene Display - Improved for better image display */}
      <div className="bg-gradient-to-br from-slate-900/50 to-black/50 rounded-xl p-4 border border-slate-700/50 min-h-64 flex items-center justify-center">
        {isImage ? (
          <div className="w-full h-full flex justify-center items-center">
            <img 
              src={getAssetPath(illustration)} 
              alt={locationName}
              className={`max-w-full max-h-full w-auto h-auto object-contain rounded-lg transition-all duration-300 ${
                locationName === "fight" ? "animate-combat-shake" : 
                locationName === "lose" ? "animate-pulse" :
                "animate-scene-glow"
              }`}
              style={{
                minHeight: '300px',
                minWidth: '300px',
                maxHeight: '400px',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              onError={(e) => {
                console.error('Failed to load image:', illustration);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ) : (
          <div className="text-5xl leading-relaxed text-center font-mono text-slate-300">
            {illustration.split('\n').map((line, index) => (
              <div 
                key={index} 
                className={`${
                  locationName === "fight" ? "animate-combat-shake" : 
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
