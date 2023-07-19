import { Class, Combat } from './engravings';
import { Accessory, Stone } from './main';

// export const DEMO_STONE: Stone = {
//   eng1: { name: Combat['Keen Blunt Weapon'], value: 9 },
//   eng2: { name: Combat['Adrenaline'], value: 7 },
// };

export const DEMO_STONE: Stone = {
  eng1: { name: Combat['Keen Blunt Weapon'], value: 7 },
  eng2: { name: Combat['Hit Master'], value: 7 },
};

export const DEMO_BOOKS = [
  { name: Class['Demonic Impulse'], value: 9 },
  { name: Combat['Grudge'], value: 12 },
];

export const DEMO_NECKLACE: Accessory = {
  eng1: { name: Combat['Hit Master'], value: 5 },
  eng2: { name: Combat['Keen Blunt Weapon'], value: 3 },
};

export const DEMO_EARRING1: Accessory = {
  eng1: { name: Combat['Hit Master'], value: 5 },
  eng2: { name: Combat['Adrenaline'], value: 3 },
};

export const DEMO_EARRING2: Accessory = {
  eng1: { name: Combat['Hit Master'], value: 5 },
  eng2: { name: Combat['Keen Blunt Weapon'], value: 3 },
};

export const DEMO_RING1: Accessory = {
  eng1: { name: Combat['Cursed Doll'], value: 5 },
  eng2: { name: Combat['Grudge'], value: 3 },
};

export const DEMO_RING2: Accessory = {
  eng1: { name: Class['Demonic Impulse'], value: 3 },
  eng2: { name: Combat['Keen Blunt Weapon'], value: 5 },
};

export const DEMO_REQUIRED_NODES = {
  // total: 75,
  total: 85,
  nodes: [
    { name: Combat['Adrenaline'], value: 10 },
    { name: Class['Demonic Impulse'], value: 15 },
    { name: Combat['Grudge'], value: 15 },
    { name: Combat['Keen Blunt Weapon'], value: 15 },
    { name: Combat['Hit Master'], value: 15 },
    { name: Combat['Cursed Doll'], value: 15 },
  ],
};

export const WARDANCER = {
  nodes: {
    total: 75,
    // total: 80,
    // total: 85,
    nodes: [
      // { name: Combat['Adrenaline'], value: 5 },
      // { name: Combat['Adrenaline'], value: 10 },
      { name: Class['Esoteric Skill Enhancement'], value: 15 },
      { name: Combat['Grudge'], value: 15 },
      { name: Combat['Keen Blunt Weapon'], value: 15 },
      { name: Combat['Ambush Master'], value: 15 },
      { name: Combat['Cursed Doll'], value: 15 },
    ],
  },
  books: [
    { name: Class['Esoteric Skill Enhancement'], value: 12 },
    { name: Combat['Grudge'], value: 12 },
  ],
  // stone: {
  //   eng1: { name: Combat['Keen Blunt Weapon'], value: 9 },
  //   eng2: { name: Combat['Adrenaline'], value: 7 },
  // },
  stone: {
    eng1: { name: Combat['Keen Blunt Weapon'], value: 7 },
    eng2: { name: Combat['Cursed Doll'], value: 7 },
  },
  acc: [
    {
      eng1: { name: Combat['Cursed Doll'], value: 5 },
      eng2: { name: Combat['Keen Blunt Weapon'], value: 3 },
    },
    {
      eng1: { name: Combat['Ambush Master'], value: 5 },
      eng2: { name: Class['Esoteric Skill Enhancement'], value: 3 },
    },
  ],
};
