export const HOWTOUSE = [
  'This tool is intended to be used an aid to determine the accessories you may need to purchase.',
  'Output minimums are accessories with 5/3.',
  'Requirements: a minimum of 75 nodes selected, a faceted ability stone, 2 engraving books, a minimum of one 5/3 accessory,',
];

export const DONOT = [
  "This tool's purpose is not to generate all combinations or permutations possible.",
  '4/3 accessories and below are not considered in this tool. As such, a situation where a 6/3 and 4/3 satifies the node requirements will not be presented. It will show up as a 5/3 and 5/3.',
];

const env = process.env['NODE_ENV'];
export const baseUrl = env === 'development' ? 'loa-engravings' : '.';

export const DEFAULTS = {
  standardEngravings: [
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
  ],
  stoneEngravings: [
    { name: null, value: 0 },
    { name: null, value: 0 },
  ],
  bookEngravings: [
    { name: null, value: 0 },
    { name: null, value: 0 },
  ],
  accEngravings: [
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
  ],
};
