// Level system utilities
export const calculateLevel = (xp: number): number => {
  // XP required for each level: 0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700...
  // Formula: level = Math.floor(Math.sqrt(xp / 50)) + 1
  return Math.floor(Math.sqrt(xp / 50)) + 1;
};

export const getXpForLevel = (level: number): number => {
  // XP required to reach a specific level
  return Math.pow(level - 1, 2) * 50;
};

export const getXpForNextLevel = (currentXp: number): number => {
  const currentLevel = calculateLevel(currentXp);
  const nextLevel = currentLevel + 1;
  return getXpForLevel(nextLevel);
};

export const getXpProgress = (currentXp: number): { current: number; required: number; progress: number } => {
  const currentLevel = calculateLevel(currentXp);
  const xpForCurrentLevel = getXpForLevel(currentLevel);
  const xpForNextLevel = getXpForLevel(currentLevel + 1);
  
  const current = currentXp - xpForCurrentLevel;
  const required = xpForNextLevel - xpForCurrentLevel;
  const progress = (current / required) * 100;
  
  return { current, required, progress };
};

export const getLevelBenefits = (level: number) => {
  return {
    damageBonus: Math.floor(level * 2), // +2 damage per level
    defenseBonus: Math.floor(level * 1.5), // +1.5 defense per level
    maxHealthBonus: Math.floor(level * 5), // +5 max health per level
    goldBonus: Math.floor(level * 0.1), // +10% gold per level
  };
};

export const getMaxHealth = (level: number): number => {
  return 100 + getLevelBenefits(level).maxHealthBonus;
};
