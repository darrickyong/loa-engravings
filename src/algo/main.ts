import { groupEnd } from 'console';
import { Class, Combat } from './engravings';
import {
  DEMO_BOOKS,
  DEMO_EARRING1,
  DEMO_EARRING2,
  DEMO_NECKLACE,
  DEMO_REQUIRED_NODES,
  DEMO_RING1,
  DEMO_RING2,
  DEMO_STONE,
} from './testAccessories';
import { orderBy } from 'lodash';

// ACCESSORIES
enum AccessoryEnum {
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
}

interface EngravingAccessory {
  name: Combat | Class;
  value: AccessoryEnum;
}
export interface Accessory {
  eng1: EngravingAccessory;
  eng2: EngravingAccessory;
}

// ABILITY STONE
enum StoneEnum {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
}
export interface Stone {
  eng1: { name: Combat; value: StoneEnum };
  eng2: { name: Combat; value: StoneEnum };
}

// ENGRAVING BOOKS
enum BookEnum {
  Green = 3,
  Blue = 6,
  Purple = 9,
  Gold = 12,
}
interface EngravingBook {
  name: Combat | Class;
  value: BookEnum;
}

// REQUIRED ENGRAVINGS
enum RequiredEngravingsEnum {
  Zero = 0,
  One = 5,
  Two = 10,
  Three = 15,
}
interface RequiredEngravings {
  name: Combat | Class;
  value: RequiredEngravingsEnum;
}

// REQUIRED NODES
enum RequiredNodesEnum {
  FourThree = 60,
  FourThreeOne = 65,
  FourThreeTwo = 70,
  FiveThree = 75,
  FiveThreeOne = 80,
  FiveThreeTwo = 85,
}
interface RequiredNodes {
  total: RequiredNodesEnum;
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
    if (remainingNodes.nodes[index].value - engraving.value <= 0) {
      remainingNodes.total -= remainingNodes.nodes[index].value;
      remainingNodes.nodes[index].value = 0;
    } else {
      remainingNodes.nodes[index].value -= engraving.value;
      remainingNodes.total -= engraving.value;
    }
    if (remainingNodes.nodes[index].value === 0) remainingNodes.nodes.splice(index, 1);
  }
  return remainingNodes;
};

interface CalculateAccessories {
  total: number;
  remainingAcc: number;
  nodes: EngravingAccessory[];
}
const calculateAccessories = ({ total, nodes, remainingAcc }: CalculateAccessories) => {
  const requiredEngravings = nodes.map((node) => node.name);
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

  // Determine how many accessories we will
  const remainingAcc = 5 - existingAcc.length;
  console.log('REMAINING ACCESSORIES: ', remainingAcc);

  // Determine if ancient accessories are needed
  const needAncients = res.total / 8 > remainingAcc;
  console.log('NEEDS ANCIENTS?', needAncients);

  // Order nodes by value, highest first
  res.nodes = orderBy(res.nodes, ['value'], ['desc']);

  return res;
};

console.log(
  engravingAlgo({
    books: DEMO_BOOKS as [EngravingBook, EngravingBook],
    requiredNodes: DEMO_REQUIRED_NODES,
    stone: DEMO_STONE,
    existingAcc: [
      DEMO_NECKLACE,
      DEMO_EARRING1,
      DEMO_EARRING2,
      // DEMO_RING1,
      // DEMO_RING2,
    ],
  })
);

console.log(
  calculateAccessories({
    total: 18,
    remainingAcc: 2,
    nodes: [
      { name: Class['Demonic Impulse'], value: 6 },
      { name: Combat.Adrenaline, value: 6 },
      { name: Combat.Grudge, value: 3 },
      { name: Combat['Keen Blunt Weapon'], value: 3 },
    ],
  })
);
