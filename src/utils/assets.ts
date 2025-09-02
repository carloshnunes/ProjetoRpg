// Utility function to get asset path
export const getAssetPath = (path: string): string => {
  // In development, Vite serves assets from /src
  // In production, they'll be bundled
  return path.startsWith('/src/') ? path : `/src/${path}`;
};

// Asset paths
export const ASSETS = {
  weapons: {
    sword1: '/src/assets/images/weapons/sword-1.png',
    espada2: '/src/assets/images/weapons/espada 2.png',
  },
  locations: {
    cidade: '/src/assets/images/locations/cidade.png',
    weaponshop: '/src/assets/images/locations/weaponshop.png',
    cave: '/src/assets/images/locations/cave.png',
  },
  monsters: {
    slime: '/src/assets/images/monters/cave with slime.png',
    fangedBeast: '/src/assets/images/monters/fangedBeast.png',
    defeatedSlime: '/src/assets/images/monters/defeatedSlime.png',
    defeatedFangedBeast: '/src/assets/images/monters/defeatedFangedBeast.png',
    dragon: '/src/assets/images/monters/dragon.png',
    dragonDefeated: '/src/assets/images/monters/dragondefeated.png',
  }
} as const;
