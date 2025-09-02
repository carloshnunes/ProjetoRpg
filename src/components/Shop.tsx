import React from 'react';
import { ShopItem } from '../types/game';
import { getAssetPath } from '../utils/assets';
import { GameIcon } from '../utils/icons';

interface ShopProps {
  items: ShopItem[];
  playerGold: number;
  onBuyItem: (item: ShopItem) => void;
  onGoBack: () => void;
}

export const Shop: React.FC<ShopProps> = ({ 
  items, 
  playerGold, 
  onBuyItem, 
  onGoBack 
}) => {
  return (
    <div className="space-y-6">
      {/* Shop Background Illustration */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-6 shadow-xl">
        <div className="text-center mb-4">
          <h2 className="font-cinzel text-2xl text-yellow-400 font-semibold">
            <GameIcon name="store" size={24} className="inline mr-2 text-yellow-400" />
            Loja do Ferreiro
          </h2>
        </div>

        {/* Scene Display */}
        <div className="bg-gradient-to-br from-slate-900/50 to-black/50 rounded-xl p-4 border border-slate-700/50 min-h-48 flex items-center justify-center">
          <img 
            src={getAssetPath('/src/assets/images/locations/weaponshop.png')} 
            alt="Loja do Ferreiro"
            className="max-w-full w-full h-auto max-h-80 object-contain rounded-lg animate-scene-glow"
            style={{
              minHeight: '200px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Compact Shop Items Interface */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-6 shadow-xl">
        {/* Shop Header */}
        <div className="text-center mb-4">
          <h3 className="font-cinzel text-xl text-yellow-400 font-semibold mb-2">
            <GameIcon name="shop" size={20} className="inline mr-2 text-yellow-400" />
            Estoque Disponível
          </h3>
          <div className="text-sm text-slate-300">
            Seu ouro: <span className="text-yellow-400 font-bold">{playerGold}</span>
            <GameIcon name="gold" size={16} className="inline ml-1 text-yellow-400" />
          </div>
        </div>

        {/* Compact Shop Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
          {items.map((item) => {
            const canAfford = playerGold >= item.price;
            const isWeapon = item.type === 'weapon';
            
            return (
              <div 
                key={item.id}
                className={`bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-lg p-3 border transition-all duration-200 hover:scale-105 ${
                  canAfford 
                    ? 'border-slate-500 hover:border-yellow-400 cursor-pointer hover:shadow-lg' 
                    : 'border-slate-600 opacity-60 cursor-not-allowed'
                }`}
                onClick={() => canAfford && onBuyItem(item)}
              >
                {/* Item Icon */}
                <div className="text-center mb-2">
                  {item.icon.startsWith('/src/') ? (
                    <img 
                      src={getAssetPath(item.icon)} 
                      alt={item.name}
                      className="w-8 h-8 object-contain mx-auto"
                    />
                  ) : (
                    <div className="flex justify-center">
                      <GameIcon 
                        name={item.icon as any} 
                        size={32} 
                        className={canAfford ? 'text-slate-200' : 'text-slate-500'} 
                      />
                    </div>
                  )}
                </div>

                {/* Item Info */}
                <div className="text-center">
                  <h4 className="font-medium text-white text-sm mb-1 truncate">{item.name}</h4>
                  
                  {/* Price and Effect */}
                  <div className="flex flex-col items-center text-xs mb-2">
                    <span className={`font-bold ${canAfford ? 'text-yellow-400' : 'text-red-400'}`}>
                      {item.price}
                      <GameIcon name="gold" size={12} className="inline ml-1" />
                    </span>
                    {isWeapon && (
                      <span className="text-blue-400 flex items-center">
                        <GameIcon name="sword" size={12} className="mr-1" />
                        {item.effect.value}
                      </span>
                    )}
                    {item.type === 'health' && (
                      <span className="text-green-400 flex items-center">
                        <GameIcon name="health" size={12} className="mr-1" />
                        +{item.effect.value}
                      </span>
                    )}
                    {item.type === 'potion' && (
                      <span className="text-purple-400 flex items-center">
                        <GameIcon name="strength_potion" size={12} className="mr-1" />
                        +{item.effect.value}
                      </span>
                    )}
                  </div>

                  {/* Compact Buy Button */}
                  <button
                    className={`w-full py-1 px-2 rounded text-xs font-medium transition-all ${
                      canAfford
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white shadow-md'
                        : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                    }`}
                    disabled={!canAfford}
                  >
                    {canAfford ? 'Comprar' : 'Sem Ouro'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onGoBack}
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg text-sm flex items-center justify-center mx-auto"
          >
            <GameIcon name="back" size={16} className="mr-2" />
            Voltar à Praça
          </button>
        </div>
      </div>
    </div>
  );
};
