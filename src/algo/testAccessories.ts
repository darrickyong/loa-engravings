import { Class, Combat } from './engravings';
import { Accessory, Stone } from './main';

export const DEMO_STONE: Stone = {
  eng1: { name: Combat.KeenBluntWeapon, value: 7 },
  eng2: { name: Combat.AmbushMaster, value: 7 },
};

export const DEMO_NECKLACE: Accessory = {
  eng1: { name: Combat.CursedDoll, value: 5 },
  eng2: { name: Combat.Grudge, value: 3 },
};

export const DEMO_EARRING1: Accessory = {
  eng1: { name: Combat.CursedDoll, value: 5 },
  eng2: { name: Combat.AmbushMaster, value: 3 },
};

export const DEMO_EARRING2: Accessory = {
  eng1: { name: Combat.CursedDoll, value: 5 },
  eng2: { name: Class.EsotericSkillEnhancement, value: 3 },
};

export const DEMO_RING1: Accessory = {
  eng1: { name: Combat.AmbushMaster, value: 5 },
  eng2: { name: Combat.KeenBluntWeapon, value: 3 },
};

export const DEMO_RING2: Accessory = {
  eng1: { name: Combat.KeenBluntWeapon, value: 5 },
  eng2: { name: Class.EsotericSkillEnhancement, value: 3 },
};
