import { Class, Combat } from './engravings';
import { EngravingBook, engravingAlgo } from './main';

const LOWSTATS = {
  books: [
    { name: Combat['Keen Blunt Weapon'], value: 3 },
    { name: Combat['Grudge'], value: 3 },
  ],
  stone: {
    eng1: { name: Combat['Keen Blunt Weapon'], value: 1 },
    eng2: { name: Combat['Cursed Doll'], value: 2 },
  },
};

const HIGHSTATS = {
  nodes: {
    total: 85,
    nodes: [
      { name: Combat['Adrenaline'], value: 10 },
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
  stone: {
    eng1: { name: Combat['Keen Blunt Weapon'], value: 9 },
    eng2: { name: Combat['Ambush Master'], value: 7 },
  },
  stoneAdr: {
    eng1: { name: Combat['Keen Blunt Weapon'], value: 9 },
    eng2: { name: Combat['Adrenaline'], value: 7 },
  },
  acc: [
    {
      eng1: { name: Combat['Keen Blunt Weapon'], value: 6 },
      eng2: { name: Combat['Cursed Doll'], value: 3 },
    },
    {
      eng1: { name: Combat['Cursed Doll'], value: 6 },
      eng2: { name: Combat['Ambush Master'], value: 3 },
    },
  ],
  accOne: [
    {
      eng1: { name: Combat['Keen Blunt Weapon'], value: 6 },
      eng2: { name: Combat['Cursed Doll'], value: 3 },
    },
  ],
};

const FAILED = {
  stone: {
    eng1: { name: Combat['Keen Blunt Weapon'], value: 6 },
    eng2: { name: Combat['Ambush Master'], value: 7 },
  },
  acc: [
    {
      eng1: { name: Combat['Keen Blunt Weapon'], value: 3 },
      eng2: { name: Combat['Cursed Doll'], value: 5 },
    },
    {
      eng1: { name: Combat['Cursed Doll'], value: 3 },
      eng2: { name: Combat['Ambush Master'], value: 6 },
    },
  ],
};

const NEEDSFOURACCESSORIES = {
  // { name: 'Esoteric Skill Enhancement', value: 6 },
  // { name: 'Grudge', value: 6 },
  // { name: 'Keen Blunt Weapon', value: 3 },
  // { name: 'Ambush Master', value: 15 },
  // { name: 'Cursed Doll', value: 5 }
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
  ],
};

const WARDANCER = {
  // { name: 'Esoteric Skill Enhancement', value: 6 },
  // { name: 'Grudge', value: 6 },
  // { name: 'Keen Blunt Weapon', value: 3 },
  // { name: 'Ambush Master', value: 12 }
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
};

describe('Random examples should calculate properly', () => {
  test('A 5x3 requirement with mixed accessories should calculate', () => {
    const caseOne = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: WARDANCER.stone,
      existingAcc: FAILED.acc,
      useAncients: true,
    });
    expect(caseOne.length).toBe(12);
  });
});

describe('Testing specific need for ancients', () => {
  test('A 5x3 requirement that cannot be achieved without ancients', () => {
    const doesNotUseAncients = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: WARDANCER.stone,
      existingAcc: WARDANCER.acc,
      useAncients: false,
    });

    expect(doesNotUseAncients.length).toBe(0);
  });

  test('A 5x3 that requires ancients', () => {
    const usesAncients = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: WARDANCER.stone,
      existingAcc: WARDANCER.acc,
      useAncients: true,
    });
    expect(usesAncients.length).toBe(5);
  });

  test('A 5x3+2 requirement that has 2 ancient pieces and a 9/7 rock should calculate', () => {
    const fiveByThreePlusTwo = engravingAlgo({
      books: HIGHSTATS.books as [EngravingBook, EngravingBook],
      requiredNodes: HIGHSTATS.nodes,
      stone: HIGHSTATS.stoneAdr,
      existingAcc: HIGHSTATS.acc,
      useAncients: true,
    });
    expect(fiveByThreePlusTwo.length).toBe(3);
  });
});

describe('Testing for four accessories', () => {
  test('A 5x3 requirement that has one relic piece and needs 4 relic/ancient accessories that should calculate', () => {
    const needsFourAccessories = engravingAlgo({
      books: NEEDSFOURACCESSORIES.books as [EngravingBook, EngravingBook],
      requiredNodes: NEEDSFOURACCESSORIES.nodes,
      stone: NEEDSFOURACCESSORIES.stone,
      existingAcc: NEEDSFOURACCESSORIES.acc,
      useAncients: true,
    });
    expect(needsFourAccessories.length).toBe(22);
  });

  test('A 5x3+2 requirement that has 2 ancient pieces and a 9/7 rock should calculate', () => {
    const fiveByThreePlusTwo = engravingAlgo({
      books: HIGHSTATS.books as [EngravingBook, EngravingBook],
      requiredNodes: HIGHSTATS.nodes,
      stone: HIGHSTATS.stoneAdr,
      existingAcc: HIGHSTATS.accOne,
      useAncients: true,
    });
    expect(fiveByThreePlusTwo.length).toBe(3);
  });
});

describe('Testing for cases with no results', () => {
  test('First case with no expected results', () => {
    const failedCase = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: WARDANCER.stone,
      existingAcc: FAILED.acc,
      useAncients: false,
    });
    expect(failedCase.length).toBe(0);
  });

  test('Second case with no expected results', () => {
    const failedCase = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: FAILED.stone,
      existingAcc: FAILED.acc,
      useAncients: false,
    });
    expect(failedCase.length).toBe(0);
  });

  test('Third case with no expected results', () => {
    const failedCase = engravingAlgo({
      books: WARDANCER.books as [EngravingBook, EngravingBook],
      requiredNodes: WARDANCER.nodes,
      stone: FAILED.stone,
      existingAcc: FAILED.acc,
      useAncients: true,
    });
    expect(failedCase.length).toBe(0);
  });
});

describe('Expected errors', () => {
  test('Must have at least one existing accessory', () => {
    const emptyAccessories = () =>
      engravingAlgo({
        books: WARDANCER.books as [EngravingBook, EngravingBook],
        requiredNodes: WARDANCER.nodes,
        stone: WARDANCER.stone,
        existingAcc: [],
        useAncients: true,
      });
    expect(emptyAccessories).toThrow();
  });

  test('Requires too many nodes', () => {
    const tooManyRequiredNodes = () =>
      engravingAlgo({
        books: LOWSTATS.books as [EngravingBook, EngravingBook],
        requiredNodes: WARDANCER.nodes,
        stone: LOWSTATS.stone,
        existingAcc: NEEDSFOURACCESSORIES.acc,
        useAncients: true,
      });
    expect(tooManyRequiredNodes).toThrow();
  });

  test('A 5x3+2 requirement that has 2 ancient pieces and NO 9/7 rock should throw', () => {
    const fiveByThreePlusTwo = () =>
      engravingAlgo({
        books: HIGHSTATS.books as [EngravingBook, EngravingBook],
        requiredNodes: HIGHSTATS.nodes,
        stone: LOWSTATS.stone,
        existingAcc: HIGHSTATS.acc,
        useAncients: true,
      });
    expect(fiveByThreePlusTwo).toThrow();
  });

  test('Requires too few nodes', () => {
    const tooFewNodes = () =>
      engravingAlgo({
        books: HIGHSTATS.books as [EngravingBook, EngravingBook],
        requiredNodes: WARDANCER.nodes,
        stone: HIGHSTATS.stone,
        existingAcc: HIGHSTATS.acc,
        useAncients: false,
      });
    expect(tooFewNodes).toThrow();
  });
});
