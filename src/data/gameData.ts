import { Weapon, Monster, Location, ShopItem } from '../types/game';
import { ASSETS } from '../utils/assets';

export const weapons: Weapon[] = [
  { 
    name: 'stick', 
    power: 5, 
    icon: '🪄',
    price: 0,
    description: 'Um simples graveto. Melhor que nada!'
  },
  { 
    name: 'dagger', 
    power: 30, 
    icon: '🗡️',
    price: 25,
    description: 'Uma adaga afiada. Boa para ataques rápidos.'
  },
  { 
    name: 'claw hammer', 
    power: 50, 
    icon: '🔨',
    price: 50,
    description: 'Um martelo pesado. Causa dano contundente.'
  },
  { 
    name: 'sword', 
    power: 100, 
    icon: ASSETS.weapons.sword1,
    price: 100,
    description: 'Uma espada de aço. Arma confiável para guerreiros.'
  },
  { 
    name: 'espada2', 
    power: 120, 
    icon: ASSETS.weapons.espada2,
    price: 150,
    description: 'Uma espada lendária. Poderosa e elegante.'
  }
];

export const shopItems: ShopItem[] = [
  {
    id: 'health_potion',
    name: 'Poção de Vida',
    type: 'health',
    price: 15,
    icon: 'health_potion',
    description: 'Restaura 20 pontos de vida',
    effect: {
      type: 'healing',
      value: 20
    }
  },
  {
    id: 'dagger',
    name: 'Adaga',
    type: 'weapon',
    price: 25,
    icon: 'dagger',
    description: 'Uma adaga afiada. Poder: 30',
    effect: {
      type: 'damage',
      value: 30
    }
  },
  {
    id: 'claw hammer',
    name: 'Martelo de Garra',
    type: 'weapon',
    price: 50,
    icon: 'hammer',
    description: 'Um martelo pesado. Poder: 50',
    effect: {
      type: 'damage',
      value: 50
    }
  },
  {
    id: 'sword',
    name: 'Espada de Aço',
    type: 'weapon',
    price: 100,
    icon: ASSETS.weapons.sword1,
    description: 'Uma espada confiável. Poder: 100',
    effect: {
      type: 'damage',
      value: 100
    }
  },
  {
    id: 'espada2',
    name: 'Espada Lendária',
    type: 'weapon',
    price: 150,
    icon: ASSETS.weapons.espada2,
    description: 'Uma espada lendária. Poder: 120',
    effect: {
      type: 'damage',
      value: 120
    }
  },
  {
    id: 'strength_potion',
    name: 'Poção de Força',
    type: 'potion',
    price: 30,
    icon: 'strength_potion',
    description: 'Aumenta temporariamente o dano',
    effect: {
      type: 'bonus',
      value: 15
    }
  }
];

export const monsters: Monster[] = [
  {
    name: "slime",
    level: 2,
    health: 15,
    icon: "🟢"
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
    icon: "🐺"
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
    icon: "🐉"
  }
];

export const locations: Location[] = [
  {
    name: "town square",
    buttonText: ["Ir para a Loja", "Ir para a Caverna", "Lutar contra o Dragão"],
    buttonFunctions: [], // Will be set dynamically
    text: "🏰 Bem-vindo à Praça da Cidade! Você está no coração da vila, cercado por casas de pedra e o comércio movimentado. Os moradores circulam pela praça e você pode ver a loja do ferreiro ao lado. Onde você quer ir?",
    illustration: ASSETS.locations.cidade
  },
  {
    name: "store",
    buttonText: ["Comprar 10 de Vida (10 ouro)", "Comprar Arma (30 ouro)", "Voltar à Praça"],
    buttonFunctions: [],
    text: "🏪 Você entra na loja do ferreiro. O cheiro de metal quente e carvão enche o ar. O ferreiro, um homem robusto com bigode grisalho, sorri ao vê-lo. 'Aventureiro! Precisa de equipamentos para suas missões?'",
    illustration: ASSETS.locations.weaponshop
  },
  {
    name: "cave",
    buttonText: ["Lutar contra Slime", "Lutar contra Besta", "Voltar à Praça"],
    buttonFunctions: [],
    text: "🌲 Saindo da cidade, você segue um caminho sinuoso pela floresta densa. O ar fica mais úmido e você nota pegadas estranhas no chão. Após uma caminhada, você avista uma caverna escura entre as árvores. Os moradores da cidade sempre avisaram sobre os monstros que habitam essas profundezas... Mas você está pronto para enfrentar o desafio?",
    illustration: ASSETS.locations.cave
  },
  {
    name: "fight",
    buttonText: ["Atacar", "Esquivar", "Fugir"],
    buttonFunctions: [],
    text: "⚔️ O combate começou! O monstro rosna e mostra suas garras. Você segura sua arma firmemente. O que você faz?",
    illustration: "⚔️👤⚔️\n🔥💥🔥\n💀👹💀"
  },
  {
    name: "kill monster",
    buttonText: ["Voltar à Praça", "Voltar à Praça", "Voltar à Praça"],
    buttonFunctions: [],
    text: '💀 O monstro grita "Arg!" e cai no chão! Você ganhou experiência e encontrou ouro brilhando entre seus restos. Sua coragem foi recompensada!',
    illustration: "💀✨💀\n💰👤💰\n🏆⚡🏆"
  },
  {
    name: "lose",
    buttonText: ["JOGAR NOVAMENTE?", "JOGAR NOVAMENTE?", "JOGAR NOVAMENTE?"],
    buttonFunctions: [],
    text: "💀 Você cai no chão, derrotado. A escuridão se aproxima... Mas toda lenda tem um começo. Você pode tentar novamente!",
    illustration: "💀🌑💀\n👤💀\n🔄✨🔄"
  },
  {
    name: "win",
    buttonText: ["JOGAR NOVAMENTE?", "JOGAR NOVAMENTE?", "JOGAR NOVAMENTE?"],
    buttonFunctions: [],
    text: "🏆 VITÓRIA! O dragão rugiu uma última vez e caiu! A vila está salva! Os moradores saem de suas casas celebrando. Você se tornou uma lenda! 🎉",
    illustration: "🏆👑🏆\n🎉👤🎉\n🏰✨🏰"
  },
  {
    name: "easter egg",
    buttonText: ["2", "8", "Voltar à Praça?"],
    buttonFunctions: [],
    text: "🎲 Você encontrou um jogo secreto! Escolha um número acima. Dez números serão sorteados entre 0 e 10. Se o seu número aparecer, você ganha!",
    illustration: "🎲🎯🎲\n��👤🎰\n✨🎊✨"
  }
];
