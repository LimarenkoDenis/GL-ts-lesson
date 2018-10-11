import { countBy, sum } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('countBy', () => {
  test('basic', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('basic again', () => {
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});