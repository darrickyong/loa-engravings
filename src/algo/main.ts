import { groupEnd } from 'console';
import { Class, Combat } from './engravings';
import { DEMO_EARRING1, DEMO_EARRING2, DEMO_NECKLACE, DEMO_RING1, DEMO_RING2 } from './testAccessories';
import { orderBy } from 'lodash';

interface EngravingAccessory {
  name: Combat | Class;
  value: 3 | 4 | 5 | 6;
}
export interface Stone {
  eng1: { name: Combat; value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 };
  eng2: { name: Combat; value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 };
}

export interface Accessory {
  eng1: EngravingAccessory;
  eng2: EngravingAccessory;
}

interface EngravingBook {
  name: Combat | Class;
  value: 3 | 6 | 9 | 12;
}

interface RequiredEngravings {
  name: Combat | Class;
  value: 0 | 5 | 10 | 15;
}

interface RequiredNodes {
  total: 60 | 65 | 70 | 75 | 80 | 85;
  nodes: RequiredEngravings[];
}

interface EngravingReq {
  books: [EngravingBook, EngravingBook];
  requiredNodes: RequiredNodes;
  stone: Stone;
  existingAcc: Accessory[];
}

interface EngravingRes {}

const findEngravingAndDecrement = (
  remainingNodes: RequiredNodes,
  engraving: { name: Combat | Class; value: number }
) => {
  const index = remainingNodes.nodes.findIndex((e) => e.name === engraving.name);
  if (index > -1) {
    // Engraving Found
    remainingNodes.nodes[index].value -= engraving.value;
    remainingNodes.total -= engraving.value;
    if (remainingNodes.nodes[index].value === 0) remainingNodes.nodes.splice(index, 1);
  }
  return remainingNodes;
};

export const engravingAlgo = ({ books, existingAcc, requiredNodes, stone }: EngravingReq) => {
  // Determine whether or not calculation is possible
  const res = { ...requiredNodes };

  // Consume BOOKS
  books.forEach((book) => findEngravingAndDecrement(res, book));

  // Consume STONE
  findEngravingAndDecrement(res, stone.eng1);
  findEngravingAndDecrement(res, stone.eng2);

  // Consume EXISTING ACCESSORIES
  existingAcc.forEach((acc) => {
    findEngravingAndDecrement(res, acc.eng1);
    findEngravingAndDecrement(res, acc.eng2);
  });

  const remainingAcc = 5 - existingAcc.length;
  console.log('REMAINING ACC', remainingAcc);

  res.nodes = orderBy(res.nodes, ['value'], ['desc']);

  return res;
};

console.log(
  engravingAlgo({
    books: [
      { name: Class.EsotericSkillEnhancement, value: 9 },
      { name: Combat.Grudge, value: 12 },
    ],
    requiredNodes: {
      total: 75,
      nodes: [
        { name: Class.EsotericSkillEnhancement, value: 15 },
        { name: Combat.Grudge, value: 15 },
        { name: Combat.KeenBluntWeapon, value: 15 },
        { name: Combat.AmbushMaster, value: 15 },
        { name: Combat.CursedDoll, value: 15 },
      ],
    },
    stone: { eng1: { name: Combat.KeenBluntWeapon, value: 7 }, eng2: { name: Combat.AmbushMaster, value: 7 } },
    existingAcc: [
      DEMO_NECKLACE,
      DEMO_EARRING1,
      // DEMO_EARRING2,
      // DEMO_RING1,
      // DEMO_RING2,
    ],
  })
);
