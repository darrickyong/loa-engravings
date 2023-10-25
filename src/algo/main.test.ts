import { cloneDeep } from 'lodash';
import { Class, Combat } from './engravings';
import { EngravingBook, engravingAlgo } from './main';

const WARDANCER = {
  nodes: {
    total: 75,
    nodes: [
      { name: Class['Esoteric Skill Enhancement'], value: 15 },
      { name: Combat['Grudge'], value: 15 },
      { name: Combat['Keen Blunt Weapon'], value: 15 },
      { name: Combat['Ambush Master'], value: 15 },
      { name: Combat['Cursed Doll'], value: 15 },
    ],
  },
  books: [
    { name: Class['Esoteric Skill Enhancement'], value: 9 },
    { name: Combat['Grudge'], value: 9 },
  ],
  stone: {
    eng1: { name: Combat['Keen Blunt Weapon'], value: 7 },
    eng2: { name: Combat['Cursed Doll'], value: 7 },
  },
  acc: [
    {
      eng1: { name: Combat['Keen Blunt Weapon'], value: 5 },
      eng2: { name: Combat['Cursed Doll'], value: 3 },
    },
    {
      eng1: { name: Combat['Cursed Doll'], value: 5 },
      eng2: { name: Combat['Ambush Master'], value: 3 },
    },
  ],
  // AM: 12
  // Grudge: 6
  // KBW: 3
  // Eso: 6
};

describe('Testing specific need for ancients', () => {

  test('A 5x3 requirement that cannot be achieved without ancients', () => {
    const testingWithoutAncients = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: WARDANCER.stone,
      existingAcc: WARDANCER.acc,
      useAncients: false,
    });

    expect(testingWithoutAncients.length).toBe(0);
  });

  test('A 5x3 that requires ancients', () => {
    const testingWithAncients = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: WARDANCER.stone,
      existingAcc: WARDANCER.acc,
      useAncients: true,
    });
    expect(testingWithAncients.length).toBe(5);
  });
});
