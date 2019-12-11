import { maxSalaryEmployee, MN, multiplyNumeric, propertySum, sum } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of 1, 2 should return 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('should return sum of object properties', () => {
  test('should return 650', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(propertySum(salaries)).toBe(650);
  });

  test('should return 6', () => {
    const salaries: { [key: string]: number } = {
      Вася: 1,
      Петя: 2,
      Даша: 3
    };

    expect(propertySum(salaries)).toBe(6);
  });
});


describe('should return name of max salary employee', () => {
  test('should return Петя', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250,
    };

    expect(maxSalaryEmployee(salaries)).toBe('Петя');
  });

  test('should return нет сотрудников', () => {
    const salaries: { [key: string]: number } = { };

    expect(maxSalaryEmployee(salaries)).toBe('нет сотрудников');
  });

  test('only one employee Петя', () => {
    const salaries: { [key: string]: number } = { Петя: 300, };

    expect(maxSalaryEmployee(salaries)).toBe('Петя');
  });
});

describe('should return object properties multiplication to 2', () => {
  test('should return equal expected object', () => {
    const test: MN = {
      Вася: 100,
      Петя: 300,
      Даша: '250',
    };

    const expected: MN = {
      Вася: 200,
      Петя: 600,
      Даша: '250',
    };

    // const result: MN = multiplyNumeric(salaries);
    expect(multiplyNumeric(test)).toEqual(expected);
  });
  });