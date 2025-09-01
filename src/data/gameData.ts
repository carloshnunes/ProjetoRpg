import { Weapon, Monster, Location } from '../types/game';
import { ASSETS } from '../utils/assets';

export const weapons: Weapon[] = [
  { name: 'stick', power: 5, icon: '🪄' },
  { name: 'dagger', power: 30, icon: '🗡️' },
  { name: 'claw hammer', power: 50, icon: '🔨' },
  { name: 'sword', power: 100, icon: ASSETS.weapons.sword1 },
  { name: 'espada2', power: 120, icon: ASSETS.weapons.espada2 }
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
    buttonText: ["Go to store", "Go to cave", "Fight dragon"],
    buttonFunctions: [], // Will be set dynamically
    text: "🏰 Bem-vindo à Praça da Cidade! Você está no coração da vila, cercado por casas de pedra e o som distante de um dragão rugindo. Os moradores olham para você com esperança. Onde você quer ir?",
    illustration: ASSETS.locations.cidade
  },
  {
    name: "store",
    buttonText: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    buttonFunctions: [],
    text: "🏪 Você entra na loja do ferreiro. O cheiro de metal quente e carvão enche o ar. O ferreiro, um homem robusto com bigode grisalho, sorri ao vê-lo. 'Precisa de equipamentos para sua jornada?'",
    illustration: "🔥⚒️🔥\n👨‍🔧💰\n⚔️🛡️🗡️"
  },
  {
    name: "cave",
    buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
    buttonFunctions: [],
    text: "🕳️ Você desce na caverna escura. Gotas de água ecoam nas paredes úmidas. Na penumbra, você vê formas se movendo. Monstros aguardam por você nas profundezas...",
    illustration: "🕳️💧🕳️\n🟢🐺\n💎✨💎"
  },
  {
    name: "fight",
    buttonText: ["Attack", "Dodge", "Run"],
    buttonFunctions: [],
    text: "⚔️ O combate começou! O monstro rosna e mostra suas garras. Você segura sua arma firmemente. O que você faz?",
    illustration: "⚔️👤⚔️\n🔥💥🔥\n💀👹💀"
  },
  {
    name: "kill monster",
    buttonText: ["Go to town square", "Go to town square", "Go to town square"],
    buttonFunctions: [],
    text: '💀 O monstro grita "Arg!" e cai no chão! Você ganhou experiência e encontrou ouro brilhando entre seus restos. Sua coragem foi recompensada!',
    illustration: "💀✨💀\n💰👤💰\n🏆⚡🏆"
  },
  {
    name: "lose",
    buttonText: ["REPLAY?", "REPLAY?", "REPLAY?"],
    buttonFunctions: [],
    text: "💀 Você cai no chão, derrotado. A escuridão se aproxima... Mas toda lenda tem um começo. Você pode tentar novamente!",
    illustration: "💀🌑💀\n👤💀\n🔄✨🔄"
  },
  {
    name: "win",
    buttonText: ["REPLAY?", "REPLAY?", "REPLAY?"],
    buttonFunctions: [],
    text: "🏆 VITÓRIA! O dragão rugiu uma última vez e caiu! A vila está salva! Os moradores saem de suas casas celebrando. Você se tornou uma lenda! 🎉",
    illustration: "🏆👑🏆\n🎉👤🎉\n🏰✨🏰"
  },
  {
    name: "easter egg",
    buttonText: ["2", "8", "Go to town square?"],
    buttonFunctions: [],
    text: "🎲 Você encontrou um jogo secreto! Escolha um número acima. Dez números serão sorteados entre 0 e 10. Se o seu número aparecer, você ganha!",
    illustration: "🎲🎯🎲\n🎰👤🎰\n✨🎊✨"
  }
];
