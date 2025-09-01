// Utility function to get asset paths
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
  }
} as const;
