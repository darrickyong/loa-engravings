import { Class, Combat } from './engravings';
import { WARDANCER } from './testAccessories';
import { cloneDeep, isEqual } from 'lodash';

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
  None = 0,
  Green = 3,
  Blue = 6,
  Purple = 9,
  Gold = 12,
}

export interface EngravingBook {
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
export interface RequiredEngravings {
  name: Combat | Class;
  value: RequiredEngravingsEnum;
}

// REQUIRED NODES
// enum RequiredNodesEnum {
//   FourThree = 60,
//   FourThreeOne = 65,
//   FourThreeTwo = 70,
//   FiveThree = 75,
//   FiveThreeOne = 80,
//   FiveThreeTwo = 85,
// }
export interface RequiredNodes {
  total: number;
  nodes: RequiredEngravings[];
}

interface EngravingReq {
  books: [EngravingBook, EngravingBook];
  requiredNodes: RequiredNodes;
  stone: Stone;
  existingAcc: Accessory[];
  useAncients: boolean;
}

const createListofAccessories = (
  requiredEngravings: (Combat | Class)[],
  total: number,
  remainingAcc: number,
  useAncients: boolean
) => {
  console.log('TOTAL NODES REMAINING', total);
  console.log('REMAINING ACC', remainingAcc);
  const minNodesPerAcc = total / remainingAcc;
  console.log('MINIMUM NODES PER ACC', minNodesPerAcc);
  const listOfAccessories: Accessory[] = [];

  for (let i = 0; i < requiredEngravings.length; i++) {
    for (let j = 0; j < requiredEngravings.length; j++) {
      if (i !== j) {
        const primaryEngraving = requiredEngravings[i];
        const secondaryEngraving = requiredEngravings[j];
        if (minNodesPerAcc <= 8) {
          listOfAccessories.push({
            eng1: { name: primaryEngraving, value: 5 },
            eng2: { name: secondaryEngraving, value: 3 },
          });
        }
        if (useAncients && minNodesPerAcc <= 9) {
          listOfAccessories.push({
            eng1: { name: primaryEngraving, value: 6 },
            eng2: { name: secondaryEngraving, value: 3 },
          });
        }
        // if (minNodesPerAcc <= 7) {
        //   listOfAccessories.push({
        //     eng1: { name: primaryEngraving, value: 4 },
        //     eng2: { name: secondaryEngraving, value: 3 },
        //   });
        // }
        // if (minNodesPerAcc <= 6) {
        //   listOfAccessories.push({
        //     eng1: { name: primaryEngraving, value: 3 },
        //     eng2: { name: secondaryEngraving, value: 3 },
        //   });
        // }
      }
    }
  }
  return listOfAccessories;
};

const findEngravingAndDecrement = (
  remainingNodes: RequiredNodes,
  engraving: { name: Combat | Class; value: number },
  allowNegatives = false
) => {
  const index = remainingNodes.nodes.findIndex((e) => e.name === engraving.name);
  if (index > -1) {
    // Engraving Found
    if (!allowNegatives && remainingNodes.nodes[index].value - engraving.value <= 0) {
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

const isEngravingEnough = (
  total: number,
  nodes: RequiredEngravings[],
  listOfAccessories: Accessory[],
  useAncients: boolean
) => {
  const res = { total, nodes };
  listOfAccessories.forEach((acc) => {
    // allowNegative restricts to accessories with exact amount of nodes (fewer results)
    findEngravingAndDecrement(res, acc.eng1, !useAncients);
    findEngravingAndDecrement(res, acc.eng2, !useAncients);
  });
  if (res.total === 0 && nodes.length === 0) {
    // console.log('ENOUGH', listOfAccessories);
    return true;
  }
  return false;
};

const isSetOfAccKnown = (res: Accessory[][], iterationOfAcc: Accessory[]) => {
  for (let i = 0; i < res.length; i++) {
    // check each known set
    const knownSet = res[i];
    const knownTracker: number[] = [];
    const iterTracker: number[] = [];

    for (let j = 0; j < knownSet.length; j++) {
      // check each acc in known set
      for (let k = 0; k < iterationOfAcc.length; k++) {
        // check each acc in iter set
        if (!knownTracker.includes(j) && !iterTracker.includes(k) && isEqual(knownSet[j], iterationOfAcc[k])) {
          knownTracker.push(j);
          iterTracker.push(k);
        }
      }
    }
    if (knownTracker.length === iterationOfAcc.length && iterTracker.length === iterationOfAcc.length) return true;
  }
  return false;
};

interface CalculateAccessories {
  total: number;
  remainingAcc: number;
  nodes: RequiredEngravings[];
  useAncients: boolean;
}

const calculateAccessories = ({ total, nodes, remainingAcc, useAncients }: CalculateAccessories) => {
  // let count = 0;
  const requiredEngravings = nodes.map((node) => node.name);
  const res: Accessory[][] = [];

  // Use Ancients or not
  const listOfAccessories = createListofAccessories(requiredEngravings, total, remainingAcc, useAncients);
  // console.log('LENGTH OF LIST OF ACC', listOfAccessories.length);

  // TODO: remainingAcc max is 3, otherwise options are too massive.  Can optimize algo
  if (remainingAcc > 4) {
    return [['Five Acc']];
  }

  if (total / remainingAcc <= 6.5) {
    return [["Don't be lazy"]];
  }

  if (total / remainingAcc > 9) {
    return [['Not possible, greater than 9']];
  }

  if (remainingAcc > 0) {
    for (let i = 0; i < listOfAccessories.length; i++) {
      if (remainingAcc > 1) {
        for (let j = 0; j < listOfAccessories.length; j++) {
          if (remainingAcc > 2) {
            for (let k = 0; k < listOfAccessories.length; k++) {
              if (remainingAcc > 3) {
                for (let l = 0; l < listOfAccessories.length; l++) {
                  if (remainingAcc > 4) {
                    for (let m = 0; m < listOfAccessories.length; m++) {
                      const iterationOfAcc = [
                        listOfAccessories[i],
                        listOfAccessories[j],
                        listOfAccessories[k],
                        listOfAccessories[l],
                        listOfAccessories[m],
                      ];
                      if (
                        isEngravingEnough(total, cloneDeep(nodes), iterationOfAcc, useAncients) &&
                        !isSetOfAccKnown(res, iterationOfAcc)
                      ) {
                        res.push(iterationOfAcc);
                      }
                    }
                  } else {
                    const iterationOfAcc = [
                      listOfAccessories[i],
                      listOfAccessories[j],
                      listOfAccessories[k],
                      listOfAccessories[l],
                    ];
                    if (
                      isEngravingEnough(total, cloneDeep(nodes), iterationOfAcc, useAncients) &&
                      !isSetOfAccKnown(res, iterationOfAcc)
                    ) {
                      res.push(iterationOfAcc);
                    }
                  }
                }
              } else {
                const iterationOfAcc = [listOfAccessories[i], listOfAccessories[j], listOfAccessories[k]];
                if (
                  isEngravingEnough(total, cloneDeep(nodes), iterationOfAcc, useAncients) &&
                  !isSetOfAccKnown(res, iterationOfAcc)
                ) {
                  res.push(iterationOfAcc);
                }
              }
            }
          } else {
            const iterationOfAcc = [listOfAccessories[i], listOfAccessories[j]];
            if (
              isEngravingEnough(total, cloneDeep(nodes), iterationOfAcc, useAncients) &&
              !isSetOfAccKnown(res, iterationOfAcc)
            ) {
              res.push(iterationOfAcc);
            }
          }
        }
      } else {
        const iterationOfAcc = [listOfAccessories[i]];
        if (
          isEngravingEnough(total, cloneDeep(nodes), iterationOfAcc, useAncients) &&
          !isSetOfAccKnown(res, iterationOfAcc)
        )
          res.push(iterationOfAcc);
      }
    }
  } else return [["Don't need any more acc"]];

  // console.log('-------------', res.length);
  // console.log('FIRST ITEM', res[0]);
  // res.forEach((acc) => {
  //   console.log(acc);
  // });

  return res;
};

export const engravingAlgo = ({ books, existingAcc, requiredNodes, stone, useAncients }: EngravingReq) => {
  // Determine whether or not calculation is possible
  const res = cloneDeep(requiredNodes);

  // Consume BOOKS
  books.forEach((book) => findEngravingAndDecrement(res, book, false));

  // Consume STONE
  findEngravingAndDecrement(res, stone.eng1, false);
  findEngravingAndDecrement(res, stone.eng2, false);

  // Consume EXISTING ACCESSORIES
  existingAcc.forEach((acc) => {
    findEngravingAndDecrement(res, acc.eng1, false);
    findEngravingAndDecrement(res, acc.eng2, false);
  });

  // Determine how many accessories we will need
  const remainingAcc = 5 - existingAcc.length;

  const { total, nodes } = res;
  const accessories = calculateAccessories({ total, nodes, remainingAcc, useAncients });
  
  // Check remaining required nodes easily
  // console.log('REQUIRED NODES CHECK', res);

  return accessories;
};

const testing = engravingAlgo({
  books: WARDANCER.books as [EngravingBook, EngravingBook],
  requiredNodes: WARDANCER.nodes,
  stone: WARDANCER.stone,
  existingAcc: WARDANCER.acc,
  useAncients: true,
});
console.log("RESULTS", testing);
// testing.forEach(test => console.log("RESULT", test));


// console.log(
//   calculateAccessories({
//     total: testing.total,
//     remainingAcc: 3,
//     nodes: testing.nodes,
//   })
// );

// const lodashTest1 = [
//   [
//     {
//       eng1: { name: Combat['Hit Master'], value: 4 },
//       eng2: { name: Combat['Cursed Doll'], value: 3 },
//     },
//     {
//       eng1: { name: Combat['Cursed Doll'], value: 6 },
//       eng2: { name: Combat['Hit Master'], value: 3 },
//     },
//     {
//       eng1: { name: Combat['Cursed Doll'], value: 6 },
//       eng2: { name: Combat['Hit Master'], value: 3 },
//     },
//   ],
//   [
//     {
//       eng1: { name: Combat['Cursed Doll'], value: 6 },
//       eng2: { name: Combat['Hit Master'], value: 3 },
//     },
//     {
//       eng1: { name: Combat['Hit Master'], value: 4 },
//       eng2: { name: Combat['Cursed Doll'], value: 3 },
//     },
//     {
//       eng1: { name: Combat['Cursed Doll'], value: 6 },
//       eng2: { name: Combat['Hit Master'], value: 3 },
//     },
//   ],
// ];

// const lodashTest2 = [
//   {
//     eng1: { name: Combat['Cursed Doll'], value: 6 },
//     eng2: { name: Combat['Hit Master'], value: 3 },
//   },
//   {
//     eng1: { name: Combat['Hit Master'], value: 4 },
//     eng2: { name: Combat['Cursed Doll'], value: 3 },
//   },
//   {
//     eng1: { name: Combat['Cursed Doll'], value: 6 },
//     eng2: { name: Combat['Hit Master'], value: 3 },
//   },
// ];

// const lodashTest1 = {
//   eng1: { name: 'Hit Master', value: 4 },
//   eng2: { name: 'Cursed Doll', value: 3 },
// };

// const lodashTest2 = {
//   eng1: { name: 'Hit Master', value: 4 },
//   eng2: { name: 'Cursed Doll', value: 3 },
// }

// console.log('LODASH TEST', isSetOfAccKnown(lodashTest1, lodashTest2));

// const lodashTest1 = [
//   {
//     eng1: { name: Combat['Hit Master'], value: 4 },
//     eng2: { name: Combat['Cursed Doll'], value: 3 },
//   },
//   {
//     eng1: { name: Combat['Cursed Doll'], value: 6 },
//     eng2: { name: Combat['Hit Master'], value: 3 },
//   },
//   {
//     eng1: { name: Combat['Cursed Doll'], value: 6 },
//     eng2: { name: Combat['Hit Master'], value: 3 },
//   },
// ];

// const lodashTest2 = {
//   total: 24,
//   nodes: [
//     { name: Combat['Hit Master'], value: 15 },
//     { name: Combat['Cursed Doll'], value: 9 },
//   ],
// };

// console.log('IS RES ENOUGH', isEngravingEnough(24, lodashTest2.nodes, lodashTest1));
