import { Combat } from "src/algo/engravings";

export const HOWTOUSE = [
  'This tool is intended to be used an aid to determine the accessories you may need to purchase.',
  'Output minimums are accessories with 5/3.',
  'Requirements: a minimum of 75 nodes selected, a faceted ability stone, 2 engraving books, a minimum of one 5/3 accessory,',
];

export const DONOT = [
  "This tool's purpose is not to generate all combinations or permutations possible.",
  '4/3 accessories and below are not considered in this tool. As such, a situation where a 6/3 and 4/3 satifies the node requirements will not be presented. It will show up as a 5/3 and 5/3.',
];

export const ENGRAVING_HEADING = 'Select the engravings that you want';
export const STONE_HEADING = 'Select the stone that you have equipped';
export const BOOK_HEADING = 'Select the books that you have equipped';
export const ACCESSORY_HEADING = 'Select the accessories that you already have purchased (min: 1)';
export const INCLUDE_ANCIENTS = 'Include ancient accessories in results';

export const ACCESSORIES_FOUND = 'Accessories have been found.';
export const NO_ACCESSORIES_FOUND = 'No combination has been found';
export const NEEDS_ONE_ACCESSORY = 'Needs at least one accessory to start calculating.';
export const ABOVE_LEG_ONLY = 'You only need legendary accessories for this.';
export const TOO_FEW_NODES = 'Requires more than ancient accessories';

const env = process.env['NODE_ENV'];
export const baseUrl = env === 'development' ? 'loa-engravings' : '.';

const mediaQuery = window.matchMedia('(max-width: 960px)');
const userAgent = navigator.userAgent.toLowerCase();
const isMobileUserAgent = /iphone|ipad|ipod|android|windows phone/g.test(userAgent);
export const isMobile = mediaQuery.matches || isMobileUserAgent;

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
      eng1: { name: Combat['Keen Blunt Weapon'], value: 5 },
      eng2: { name: Combat['Grudge'], value: 3 },
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
