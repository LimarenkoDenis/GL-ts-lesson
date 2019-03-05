import { sum, sumOfProperties } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of properties when has properties', () => {
  const testedObject: {[key: string]:number} = {
    "hello": 2,
    "bye": 100,
    "angular": 98
  }
  expect(sumOfProperties(testedObject)).toBe(200);
});

test('sum of properties when has no properties', () => {
  expect(sumOfProperties({})).toBe(0);
});