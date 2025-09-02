import React from 'react';
import { useGame } from './hooks/useGame';
import { GameStats } from './components/GameStats';
import { MonsterStats } from './components/MonsterStats';
import { Inventory } from './components/Inventory';
import { GameIllustration } from './components/GameIllustration';
import { GameControls } from './components/GameControls';
import { GameText } from './components/GameText';
import { Shop } from './components/Shop';
import { monsters, shopItems } from './data/gameData';

function App() {
  const { gameState, getCurrentLocation, getInventoryItems, actions } = useGame();
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
          <div className="relative">
            {/* Glow effect behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 blur-3xl transform scale-110"></div>
            
            {/* Main title with enhanced styling */}
            <h1 className="relative font-cinzel text-7xl font-black bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] tracking-[0.2em] mb-2 animate-pulse">
              DRAGON SLAYER
            </h1>
            
            {/* Decorative border */}
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full shadow-lg"></div>
          </div>
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
            
            <Inventory items={inventoryItems} onEquipWeapon={actions.equipWeapon} />
          </div>

          {/* Center Column - Main Game Area */}
          <div className="lg:col-span-2 space-y-6">
            {gameState.currentLocation === 1 ? (
              // Show Shop when in store
              <Shop 
                items={shopItems}
                playerGold={gameState.gold}
                onBuyItem={actions.buyItem}
                onGoBack={actions.goTown}
              />
            ) : (
              // Show regular game content
              <>
                <GameIllustration
                  illustration={currentLocation.illustration}
                  locationName={currentLocation.name}
                />
                
                <GameText text={currentLocation.text} />
                
                <GameControls
                  buttonTexts={currentLocation.buttonText}
                  buttonFunctions={currentLocation.buttonFunctions}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
