import React from 'react';
import { useGame } from './hooks/useGame';
import { GameStats } from './components/GameStats';
import { MonsterStats } from './components/MonsterStats';
import { Inventory } from './components/Inventory';
import { GameIllustration } from './components/GameIllustration';
import { GameControls } from './components/GameControls';
import { GameText } from './components/GameText';
import { monsters } from './data/gameData';

function App() {
  const { gameState, getCurrentLocation, getInventoryItems } = useGame();
  const currentLocation = getCurrentLocation();
  const inventoryItems = getInventoryItems();
  const currentMonster = gameState.fighting !== null ? monsters[gameState.fighting] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-red-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="font-cinzel text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl tracking-wider mb-2">
            DRAGON REPELLER
          </h1>
          <div className="text-2xl">🐉 ⚔️ 🏰</div>
        </header>

        {/* Main Game Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Inventory */}
          <div className="space-y-6">
            <GameStats 
              xp={gameState.xp}
              level={gameState.level}
              health={gameState.health}
              maxHealth={gameState.maxHealth}
              gold={gameState.gold}
            />
            
            <MonsterStats
              monsterName={currentMonster?.name || ''}
              monsterHealth={gameState.monsterHealth}
              isVisible={gameState.fighting !== null}
            />
            
            <Inventory items={inventoryItems} />
          </div>

          {/* Center Column - Main Game Area */}
          <div className="lg:col-span-2 space-y-6">
            <GameIllustration
              illustration={currentLocation.illustration}
              locationName={currentLocation.name}
            />
            
            <GameText text={currentLocation.text} />
            
            <GameControls
              buttonTexts={currentLocation.buttonText}
              buttonFunctions={currentLocation.buttonFunctions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
