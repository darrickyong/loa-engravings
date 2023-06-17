import { Class, Combat } from './engravings';
import { Accessory, Stone } from './main';

export const DEMO_STONE: Stone = {
  eng1: { name: Combat['Keen Blunt Weapon'], value: 6 },
  eng2: { name: Combat['Adrenaline'], value: 6 },
};

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
  eng1: { name: Combat['Adrenaline'], value: 6 },
  eng2: { name: Combat['Keen Blunt Weapon'], value: 3 },
};

export const DEMO_RING2: Accessory = {
  eng1: { name: Class['Demonic Impulse'], value: 6 },
  eng2: { name: Combat['Grudge'], value: 3 },
};

export const DEMO_REQUIRED_NODES = {
  total: 75,
  nodes: [
    { name: Class['Demonic Impulse'], value: 15 },
    { name: Combat['Grudge'], value: 15 },
    { name: Combat['Keen Blunt Weapon'], value: 15 },
    { name: Combat['Hit Master'], value: 15 },
    { name: Combat['Adrenaline'], value: 15 },
  ],
};

export const DEMO_BOOKS = [
  { name: Class['Demonic Impulse'], value: 9 },
  { name: Combat['Grudge'], value: 12 },
];