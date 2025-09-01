import { useState, useCallback } from 'react';
import { GameState, InventoryItem } from '../types/game';
import { weapons, monsters, locations } from '../data/gameData';
import { calculateLevel, getMaxHealth, getLevelBenefits } from '../utils/levelSystem';

const initialState: GameState = {
  xp: 0,
  level: 1,
  health: 100,
  maxHealth: 100,
  gold: 50,
  currentWeapon: 0,
  fighting: null,
  monsterHealth: 0,
  inventory: ["stick"],
  currentLocation: 0
};

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const updateLocation = useCallback((locationIndex: number) => {
    setGameState(prev => ({
      ...prev,
      currentLocation: locationIndex,
      fighting: null
    }));
  }, []);

  const goTown = useCallback(() => updateLocation(0), [updateLocation]);
  const goStore = useCallback(() => updateLocation(1), [updateLocation]);
  const goCave = useCallback(() => updateLocation(2), [updateLocation]);

  const buyHealth = useCallback(() => {
    setGameState(prev => {
      if (prev.gold >= 10) {
        return {
          ...prev,
          gold: prev.gold - 10,
          health: Math.min(prev.health + 10, 100)
        };
      }
      return prev;
    });
  }, []);

  const buyWeapon = useCallback(() => {
    setGameState(prev => {
      if (prev.currentWeapon < weapons.length - 1 && prev.gold >= 30) {
        const newWeapon = weapons[prev.currentWeapon + 1];
        return {
          ...prev,
          gold: prev.gold - 30,
          currentWeapon: prev.currentWeapon + 1,
          inventory: [...prev.inventory, newWeapon.name]
        };
      }
      return prev;
    });
  }, []);

  const sellWeapon = useCallback(() => {
    setGameState(prev => {
      if (prev.inventory.length > 1) {
        const soldWeapon = prev.inventory.shift();
        return {
          ...prev,
          gold: prev.gold + 15,
          inventory: [...prev.inventory]
        };
      }
      return prev;
    });
  }, []);

  const fightMonster = useCallback((monsterIndex: number) => {
    setGameState(prev => ({
      ...prev,
      fighting: monsterIndex,
      monsterHealth: monsters[monsterIndex].health,
      currentLocation: 3
    }));
  }, []);

  const fightSlime = useCallback(() => fightMonster(0), [fightMonster]);
  const fightBeast = useCallback(() => fightMonster(1), [fightMonster]);
  const fightDragon = useCallback(() => fightMonster(2), [fightMonster]);

  const attack = useCallback(() => {
    setGameState(prev => {
      if (prev.fighting === null) return prev;

      const monster = monsters[prev.fighting];
      const weapon = weapons[prev.currentWeapon];
      const levelBenefits = getLevelBenefits(prev.level);
      
      // Calculate damage to monster with level benefits
      const baseDamage = weapon.power;
      const levelDamageBonus = levelBenefits.damageBonus;
      const randomBonus = Math.floor(Math.random() * 5) + 1; // 1-5 random bonus
      const damageToMonster = baseDamage + levelDamageBonus + randomBonus;
      const newMonsterHealth = Math.max(0, prev.monsterHealth - damageToMonster);
      
      // Calculate damage to player with level defense
      const baseMonsterDamage = monster.level * 2;
      const levelDefense = levelBenefits.defenseBonus;
      const randomDefense = Math.floor(Math.random() * 3); // 0-2 random defense
      const monsterDamage = Math.max(1, baseMonsterDamage - levelDefense - randomDefense);
      const newHealth = Math.max(0, prev.health - monsterDamage);
      
      // Check if player dies
      if (newHealth <= 0) {
        return { ...prev, health: 0, currentLocation: 5 };
      }
      
      // Check if monster dies
      if (newMonsterHealth <= 0) {
        if (prev.fighting === 2) {
          // Dragon defeated - win game
          return { ...prev, currentLocation: 6 };
        } else {
          // Regular monster defeated
          const baseGoldReward = Math.floor(monster.level * 8);
          const goldBonus = Math.floor(baseGoldReward * levelBenefits.goldBonus);
          const goldReward = baseGoldReward + goldBonus;
          const xpReward = monster.level * 2;
          
          const newXp = prev.xp + xpReward;
          const newLevel = calculateLevel(newXp);
          const newMaxHealth = getMaxHealth(newLevel);
          
          return {
            ...prev,
            xp: newXp,
            level: newLevel,
            maxHealth: newMaxHealth,
            health: Math.min(prev.health, newMaxHealth), // Heal to new max if level up
            gold: prev.gold + goldReward,
            currentLocation: 4
          };
        }
      }
      
      return {
        ...prev,
        health: newHealth,
        monsterHealth: newMonsterHealth
      };
    });
  }, []);

  const dodge = useCallback(() => {
    setGameState(prev => {
      if (prev.fighting === null) return prev;
      
      // 70% chance to dodge successfully
      const dodgeSuccess = Math.random() < 0.7;
      
      if (dodgeSuccess) {
        // Successful dodge - no damage taken
        return prev;
      } else {
        // Failed dodge - take reduced damage
        const monster = monsters[prev.fighting];
        const reducedDamage = Math.max(1, Math.floor((monster.level * 2) / 2));
        const newHealth = Math.max(0, prev.health - reducedDamage);
        
        if (newHealth <= 0) {
          return { ...prev, health: 0, currentLocation: 5 };
        }
        
        return { ...prev, health: newHealth };
      }
    });
  }, []);

  const restart = useCallback(() => {
    setGameState(initialState);
  }, []);

  const easterEgg = useCallback(() => {
    setGameState(prev => ({ ...prev, currentLocation: 7 }));
  }, []);

  const pickNumber = useCallback((guess: number) => {
    setGameState(prev => {
      const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
      
      if (numbers.includes(guess)) {
        return { ...prev, gold: prev.gold + 20 };
      } else {
        const newHealth = Math.max(0, prev.health - 10);
        if (newHealth <= 0) {
          return { ...prev, health: 0, currentLocation: 5 };
        }
        return { ...prev, health: newHealth };
      }
    });
  }, []);

  const pickTwo = useCallback(() => pickNumber(2), [pickNumber]);
  const pickEight = useCallback(() => pickNumber(8), [pickNumber]);

  // Get current location with button functions
  const getCurrentLocation = useCallback(() => {
    const location = locations[gameState.currentLocation];
    
    // Custom illustration for fight scenes with specific monsters
    let customIllustration = location.illustration;
    if (gameState.currentLocation === 3 && gameState.fighting !== null) {
      const monster = monsters[gameState.fighting];
      switch (monster.name) {
        case "slime":
          customIllustration = "🟢💧🟢\n👤⚔️👹\n💥🔥💥";
          break;
        case "fanged beast":
          customIllustration = "🐺💀🐺\n👤⚔️👹\n💥🔥💥";
          break;
        case "dragon":
          customIllustration = "🐉🔥🐉\n👤⚔️👹\n💥💀💥";
          break;
      }
    }
    
    return {
      ...location,
      illustration: customIllustration,
      buttonFunctions: [
        gameState.currentLocation === 0 ? [goStore, goCave, fightDragon] :
        gameState.currentLocation === 1 ? [buyHealth, buyWeapon, goTown] :
        gameState.currentLocation === 2 ? [fightSlime, fightBeast, goTown] :
        gameState.currentLocation === 3 ? [attack, dodge, goTown] :
        gameState.currentLocation === 4 ? [goTown, goTown, easterEgg] :
        gameState.currentLocation === 5 ? [restart, restart, restart] :
        gameState.currentLocation === 6 ? [restart, restart, restart] :
        [pickTwo, pickEight, goTown]
      ][0]
    };
  }, [gameState.currentLocation, gameState.fighting, goStore, goCave, fightDragon, buyHealth, buyWeapon, goTown, fightSlime, fightBeast, attack, dodge, easterEgg, restart, pickTwo, pickEight]);

  // Get inventory items with icons and power
  const getInventoryItems = useCallback((): InventoryItem[] => {
    return gameState.inventory.map((itemName, index) => {
      const weapon = weapons.find(w => w.name === itemName);
      return {
        name: itemName,
        icon: weapon?.icon || '❓',
        power: weapon?.power || 0,
        equipped: index === gameState.currentWeapon
      };
    });
  }, [gameState.inventory, gameState.currentWeapon]);

  return {
    gameState,
    getCurrentLocation,
    getInventoryItems,
    actions: {
      goTown,
      goStore,
      goCave,
      buyHealth,
      buyWeapon,
      sellWeapon,
      fightSlime,
      fightBeast,
      fightDragon,
      attack,
      dodge,
      restart,
      easterEgg,
      pickTwo,
      pickEight
    }
  };
};
