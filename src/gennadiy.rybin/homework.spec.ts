import { sum, sallarySum, sallaryMax } from './homework';
import { ISalary } from './interfaces';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

// homework tests ---------------------------------------------
describe('sallarySum', () => {
  const salaries: ISalary = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  test('basic', () => {
    expect(sallarySum(salaries)).toBe(650);
  });

  test('basic with an empty object', () => {
    expect(sallarySum({})).toBe(0);
  });
});


describe('sallaryMax', () => {
  const salaries: ISalary = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  test('basic', () => {
    expect(sallaryMax(salaries)).toBe('Петя');
  });

  test('basic with an empty object', () => {
    expect(sallaryMax({})).toBe('нет сотрудников');
  });
});