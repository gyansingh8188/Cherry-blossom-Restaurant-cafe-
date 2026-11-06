import test from 'node:test';
import assert from 'node:assert/strict';
import { filterMenuItems, calculateOrderTotal, formatINR } from './menu';
import { MenuItem } from '../types';

const mockItems: MenuItem[] = [
  {
    id: '1',
    name: 'Paneer Tikka Royale',
    category: 'starters',
    categoryLabel: 'Starters',
    price: 250,
    dietary: 'veg',
    description: 'Char-grilled cottage cheese',
    image: 'test.jpg',
    isChefSpecial: true,
  },
  {
    id: '2',
    name: 'Tandoori Murgh',
    category: 'starters',
    categoryLabel: 'Starters',
    price: 300,
    dietary: 'non-veg',
    description: 'Clay-oven roasted chicken',
    image: 'test2.jpg',
  },
  {
    id: '3',
    name: 'Dal Makhani',
    category: 'main-course',
    categoryLabel: 'Main Course',
    price: 280,
    dietary: 'veg',
    description: 'Slow-cooked black lentils',
    image: 'test3.jpg',
    isChefSpecial: true,
  },
];

test('filterMenuItems filters by category properly', () => {
  const starters = filterMenuItems(mockItems, 'starters');
  assert.equal(starters.length, 2);

  const main = filterMenuItems(mockItems, 'main-course');
  assert.equal(main.length, 1);
  assert.equal(main[0].name, 'Dal Makhani');
});

test('filterMenuItems filters by dietary preference', () => {
  const vegOnly = filterMenuItems(mockItems, 'all', '', 'veg');
  assert.equal(vegOnly.length, 2);
  assert.equal(vegOnly.every((i) => i.dietary === 'veg'), true);

  const nonVegOnly = filterMenuItems(mockItems, 'all', '', 'non-veg');
  assert.equal(nonVegOnly.length, 1);
  assert.equal(nonVegOnly[0].name, 'Tandoori Murgh');
});

test('filterMenuItems handles chef specials category', () => {
  const specials = filterMenuItems(mockItems, 'specials');
  assert.equal(specials.length, 2);
});

test('filterMenuItems handles search query', () => {
  const searchResults = filterMenuItems(mockItems, 'all', 'lentils');
  assert.equal(searchResults.length, 1);
  assert.equal(searchResults[0].name, 'Dal Makhani');
});

test('calculateOrderTotal computes item counts, GST, and totals', () => {
  const order = [
    { item: mockItems[0], quantity: 2 }, // 250 * 2 = 500
    { item: mockItems[2], quantity: 1 }, // 280 * 1 = 280
  ];
  const result = calculateOrderTotal(order);
  assert.equal(result.subtotal, 780);
  assert.equal(result.itemCount, 3);
  assert.equal(result.gstEstimate, Math.round(780 * 0.05)); // 39
  assert.equal(result.grandTotal, 819);
});

test('formatINR formats currency strings with rupee symbol', () => {
  const formatted = formatINR(500);
  assert.match(formatted, /500/);
});
