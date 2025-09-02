export interface Weapon {
  name: string;
  power: number;
  icon: string;
  price: number;
  description: string;
}

export interface ShopItem {
  id: string;
  name: string;
  type: 'weapon' | 'health' | 'potion';
  price: number;
  icon: string;
  description: string;
  effect: {
    type: 'damage' | 'healing' | 'bonus';
    value: number;
  };
}

export interface Monster {
  name: string;
  level: number;
  health: number;
  icon: string;
}

export interface Location {
  name: string;
  buttonText: string[];
  buttonFunctions: (() => void)[];
  text: string;
  illustration: string;
}

export interface GameState {
  xp: number;
  level: number;
  health: number;
  maxHealth: number;
  gold: number;
  currentWeapon: number;
  fighting: number | null;
  monsterHealth: number;
  inventory: string[];
  currentLocation: number;
}

export interface InventoryItem {
  name: string;
  icon: string;
  power: number;
  equipped: boolean;
}
