import { 
  Heart, 
  Sword, 
  Hammer, 
  Zap, 
  Shield, 
  Coins, 
  Store, 
  Mountain, 
  Trophy, 
  Skull, 
  Gamepad2,
  ArrowLeft,
  ShoppingCart,
  Crown,
  Flame,
  Sparkles
} from 'lucide-react';
import React from 'react';

// Professional icon mapping
export const ICONS = {
  // Health & Healing
  health: Heart,
  health_potion: Heart,
  
  // Weapons
  stick: Zap,
  dagger: Sword,
  'claw hammer': Hammer,
  hammer: Hammer,
  sword: Sword,
  espada2: Sword,
  legendary_sword: Sword,
  
  // Effects & Bonuses
  strength_potion: Zap,
  bonus: Sparkles,
  
  // Currency & Economy
  gold: Coins,
  coins: Coins,
  
  // Locations
  store: Store,
  cave: Mountain,
  'town square': Store,
  
  // Combat & Status
  victory: Trophy,
  defeat: Skull,
  win: Crown,
  lose: Skull,
  monster: '👹',
  
  // UI Elements
  back: ArrowLeft,
  shop: ShoppingCart,
  inventory: Shield,
  
  // Monsters (keeping some emojis for now as they're quite expressive)
  slime: '🟢',
  'fanged beast': '🐺',
  dragon: '🐉',
  
  // Special effects
  fire: Flame,
  magic: Sparkles,
  game: Gamepad2
} as const;

// Icon component with consistent styling
export const GameIcon = ({ 
  name, 
  size = 24, 
  className = "text-current",
  color = "currentColor"
}: {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}) => {
  const IconComponent = ICONS[name];
  
  if (!IconComponent) {
    // Fallback for missing icons
    return <span className={className} style={{ fontSize: size }}>❓</span>;
  }
  
  if (typeof IconComponent === 'string') {
    // Fallback for emoji icons
    return <span className={className} style={{ fontSize: size }}>{IconComponent}</span>;
  }
  
  return <IconComponent size={size} className={className} color={color} />;
};
