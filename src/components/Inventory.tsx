import React from 'react';
import { InventoryItem } from '../types/game';
import { GameIcon } from '../utils/icons';

interface InventoryProps {
  items: InventoryItem[];
  onEquipWeapon?: (weaponIndex: number) => void;
}

export const Inventory: React.FC<InventoryProps> = ({ items, onEquipWeapon }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-6 shadow-xl">
      <h3 className="font-cinzel text-xl text-center text-yellow-400 mb-4 flex items-center justify-center">
        <GameIcon name="inventory" size={24} className="mr-2 text-yellow-400" />
        Inventário
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onEquipWeapon && onEquipWeapon(index)}
            className={`relative p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 group ${
              item.equipped 
                ? 'border-green-500 bg-gradient-to-br from-green-900/40 to-green-800/40 shadow-lg shadow-green-500/25' 
                : 'border-slate-600 bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-500/25'
            }`}
          >
            {/* Equipped Badge */}
            {item.equipped && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-400 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-green-300/30">
                EQUIPADO
              </div>
            )}
            
            {/* Item Content */}
            <div className="flex items-center space-x-3">
              {/* Icon */}
              <div className="flex-shrink-0">
                {item.icon.startsWith('/src/assets/') ? (
                  <img 
                    src={item.icon} 
                    alt={item.name}
                    className={`w-8 h-8 object-contain transition-all duration-300 ${
                      item.equipped ? 'drop-shadow-lg drop-shadow-green-400/50' : 'drop-shadow-lg'
                    }`}
                  />
                ) : (
                  <GameIcon 
                    name={item.name as any} 
                    size={32} 
                    className={`transition-all duration-300 ${
                      item.equipped ? 'text-green-400 drop-shadow-lg drop-shadow-green-400/50' : 'text-slate-300'
                    }`}
                  />
                )}
              </div>
              
              {/* Item Info */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-sm capitalize truncate">
                  {item.name}
                </div>
                <div className="text-xs text-slate-400 flex items-center justify-between">
                  <span>Poder: <span className="text-yellow-400 font-bold">{item.power}</span></span>
                  {item.equipped && (
                    <span className="text-green-400 text-xs font-medium">✓ Ativo</span>
                  )}
                </div>
                {!item.equipped && (
                  <div className="text-xs text-blue-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Clique para equipar
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty Slots */}
        {Array.from({ length: Math.max(0, 6 - items.length) }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="h-20 bg-gradient-to-br from-slate-700/20 to-slate-800/20 border-2 border-dashed border-slate-600/50 rounded-xl flex items-center justify-center text-slate-500 text-2xl hover:border-slate-500/70 hover:bg-slate-700/30 transition-all duration-300 group"
          >
            <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">+</div>
          </div>
        ))}
      </div>
    </div>
  );
};
