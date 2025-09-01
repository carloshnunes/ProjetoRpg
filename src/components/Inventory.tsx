import React from 'react';
import { InventoryItem } from '../types/game';

interface InventoryProps {
  items: InventoryItem[];
}

export const Inventory: React.FC<InventoryProps> = ({ items }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-6 shadow-xl">
      <h3 className="font-cinzel text-xl text-center text-yellow-400 mb-4">
        🎒 Inventory
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
              item.equipped 
                ? 'border-green-500 bg-gradient-to-br from-green-900/30 to-green-800/30 shadow-lg shadow-green-500/30' 
                : 'border-slate-600 bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:border-slate-500 hover:shadow-lg'
            }`}
          >
            {item.equipped && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                EQUIPPED
              </div>
            )}
            
            <div className="flex items-center space-x-3">
              <div className="text-3xl">
                {item.icon.startsWith('/src/assets/') ? (
                  <img 
                    src={item.icon} 
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>
              
              <div className="flex-1">
                <div className="font-semibold text-white text-sm capitalize">
                  {item.name}
                </div>
                <div className="text-xs text-slate-400">
                  Power: <span className="text-yellow-400 font-bold">{item.power}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slots vazios */}
        {Array.from({ length: Math.max(0, 6 - items.length) }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="h-20 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border-2 border-dashed border-slate-600 rounded-xl flex items-center justify-center text-slate-500 text-2xl hover:border-slate-500 transition-colors"
          >
            +
          </div>
        ))}
      </div>
    </div>
  );
};
