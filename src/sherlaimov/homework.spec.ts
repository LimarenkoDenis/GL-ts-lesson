import {
  calculateSalaryTotal,
  getUserWithHighestSalary,
  multiplyNumeric,
  countBy,
  addClass,
} from './homework';

import { salaries, menu, classNameObj } from './dataStubs';

describe('Сумма свойств', () => {
  test('calculateSalaryTotal must return a total of values', () => {
    const result = calculateSalaryTotal(salaries);
    expect(result).toBe(650);
  });
});

describe('Свойство с наибольшим значением', () => {
  test('getUserWithHighestSalary must return the highest value in set', () => {
    const result = getUserWithHighestSalary(salaries);
    expect(result).toBe('Петя');
  });

  test("getUserWithHighestSalary must return 'нет сотрудников' if empty object is provided", () => {
    const result = getUserWithHighestSalary({});
    expect(result).toBe('нет сотрудников');
  });
});

describe('Умножьте численные свойства на 2', () => {
  test('multiplyNumeric must multiply all integers by 2', () => {
    multiplyNumeric(menu);
    expect(menu.width).toBe(400);
    expect(menu.height).toBe(600);
  });

  test('multiplyNumeric must leave strings in tact', () => {
    multiplyNumeric(menu);
    expect(menu.title).toBe('My menu');
  });
});

describe('Create a function with two arguments that will return a list of length (n) with multiples of (x).', () => {
  const nineAndFour = [9, 18, 27, 36];
  const sevenAndFive = [7, 14, 21, 28, 35];
  test('countBy function forms correct number arrays', () => {
    const nineAndFourRes = countBy(9, 4);
    const sevenAndFiveRes = countBy(7, 5);
    expect(nineAndFourRes).toEqual(nineAndFour);
    expect(sevenAndFiveRes).toEqual(sevenAndFive);
  });
});

describe('Добавить класс в строку', () => {
  test('addClass correctly adds classes to object property className', () => {
    const newObj = addClass(classNameObj, 'namaste');
    expect(newObj.className).toBe('open menu namaste');
  });

  test('addClass does not mutate original object', () => {
    addClass(classNameObj, 'namaste');
    expect(classNameObj.className).toBe('open menu');
  });
});
