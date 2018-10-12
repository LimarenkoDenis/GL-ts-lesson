import { biggestSalary, countBy, salariesSum, sum } from './homework';

describe('sum', () => {
  test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('salariesSum', () => {
  test('basic', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(salariesSum(salaries)).toBe(650);
  });

  test('basic again', () => {
    const salaries: { [key: string]: number } = {
      Вася: 25,
      Петя: 25,
      Даша: 25
    };

    expect(salariesSum(salaries)).toBe(75);
  });
});

describe('biggestSalary', () => {
  test('basic', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(biggestSalary(salaries)).toBe('Петя');
  });

  test('basic again', () => {
    const salaries: { [key: string]: number } = {
      Вася: 26,
      Петя: 25,
      Даша: 25
    };

    expect(biggestSalary(salaries)).toBe('Вася');
  });

  // test('basic again for empty', () => { // TODO: return after fixes
  //   const salaries: { [key: string]: number } = {};

  //   expect(biggestSalary(salaries)).toBe('нет сотрудников');
  // });
});

describe('countBy', () => {
  test('basic', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('basic again', () => {
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});