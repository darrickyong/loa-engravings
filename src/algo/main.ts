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
  total: number;
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

const createListofAccessories = (requiredEngravings: (Combat | Class)[]) => {
  const listOfAccessories: Accessory[] = [];
  for (let i = 0; i < requiredEngravings.length; i++) {
    for (let j = 0; j < requiredEngravings.length; j++) {
      if (i !== j) {
        const primaryEngraving = requiredEngravings[i];
        const secondaryEngraving = requiredEngravings[j];
        listOfAccessories.push({
          eng1: { name: primaryEngraving, value: 3 },
          eng2: { name: secondaryEngraving, value: 3 },
        });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 3 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 3 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        listOfAccessories.push({
          eng1: { name: primaryEngraving, value: 4 },
          eng2: { name: secondaryEngraving, value: 3 },
        });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 4 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 4 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        listOfAccessories.push({
          eng1: { name: primaryEngraving, value: 5 },
          eng2: { name: secondaryEngraving, value: 3 },
        });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 5 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 5 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        listOfAccessories.push({
          eng1: { name: primaryEngraving, value: 6 },
          eng2: { name: secondaryEngraving, value: 3 },
        });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 6 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
        // listOfAccessories.push({
        //   eng1: { name: primaryEngraving, value: 6 },
        //   eng2: { name: secondaryEngraving, value: 3 },
        // });
      }
    }
  }
  return listOfAccessories;
};

const isEngravingEnough = (total: number, nodes: RequiredEngravings[], listOfAccessories: Accessory[]) => {
  // console.log('ENOUGH?', nodes);
  const res = { total, nodes };
  listOfAccessories.forEach((acc) => {
    findEngravingAndDecrement(res, acc.eng1);
    findEngravingAndDecrement(res, acc.eng2);
  });
  if (res.total === 0) {
    console.log('ENOUGH', listOfAccessories);
    return true;
  }
  return false;
};

interface CalculateAccessories {
  total: number;
  remainingAcc: number;
  nodes: RequiredEngravings[];
}

const calculateAccessories = ({ total, nodes, remainingAcc }: CalculateAccessories) => {
  // console.log('INITIAL NODES', nodes);
  const requiredEngravings = nodes.map((node) => node.name);
  const res: Accessory[][] = [];
  const listOfAccessories = createListofAccessories(requiredEngravings);
  // console.log('LIST OF ACCESSORIES', listOfAccessories);
  let iterationOfAcc: Accessory[] = [];

  if (remainingAcc > 0) {
    for (let i = 0; i < listOfAccessories.length; i++) {
      iterationOfAcc[0] = listOfAccessories[i];
      if (remainingAcc > 1) {
        for (let j = 0; j < listOfAccessories.length; j++) {
          iterationOfAcc[1] = listOfAccessories[j];
          if (remainingAcc > 2) {
            for (let k = 0; k < listOfAccessories.length; k++) {
              iterationOfAcc[2] = listOfAccessories[k];
              if (isEngravingEnough(total, structuredClone(nodes), iterationOfAcc)) res.push(iterationOfAcc);
            }
          } else {
            if (isEngravingEnough(total, structuredClone(nodes), iterationOfAcc)) res.push(iterationOfAcc);
          }
        }
      } else {
        if (isEngravingEnough(total, structuredClone(nodes), iterationOfAcc)) res.push(iterationOfAcc);
      }
    }
  } else return [];

  // console.log('-------------');
  // res.forEach((acc) => {
  //   console.log(acc);
  // });

  return res.length;
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
  // console.log('REMAINING ACCESSORIES: ', remainingAcc);

  // Determine if ancient accessories are needed
  const needAncients = res.total / 8 > remainingAcc;
  // console.log('NEEDS ANCIENTS?', needAncients);

  // Order nodes by value, highest first
  res.nodes = orderBy(res.nodes, ['value'], ['desc']);

  return res;
};

const testing = engravingAlgo({
  books: DEMO_BOOKS as [EngravingBook, EngravingBook],
  requiredNodes: DEMO_REQUIRED_NODES,
  stone: DEMO_STONE,
  existingAcc: [
    // DEMO_NECKLACE,
    // DEMO_EARRING1,
    // DEMO_EARRING2,
    DEMO_RING1,
    DEMO_RING2,
  ],
});

console.log(testing);

// {
//   total: 26,
//   nodes: [
//     { name: 'Demonic Impulse', value: 6 },
//     { name: 'Keen Blunt Weapon', value: 6 },
//     { name: 'Adrenaline', value: 6 },
//     { name: 'Hit Master', value: 5 },
//     { name: 'Grudge', value: 3 }
//   ]
// }

// {
//   total: 24,
//   nodes: [
//     { name: 'Hit Master', value: 15 },
//     { name: 'Keen Blunt Weapon', value: 6 },
//     { name: 'Adrenaline', value: 3 }
//   ]
// }

console.log(
  calculateAccessories({
    total: testing.total,
    remainingAcc: 3,
    nodes: testing.nodes,
  })
);
