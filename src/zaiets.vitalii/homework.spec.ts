import { sumOfSalaries } from './homework';
import { maxSailary } from './homework';
import { multiplyNumeric } from './homework';
import { countBy } from './homework';
import { addClass, IClassObject } from './homework';

describe('sumOfSalaries tests', () => {
  test('empty object equal 0', () => {
    expect(sumOfSalaries({})).toBe(0);
  });
  test('base sum test', () => {
    expect(sumOfSalaries({
      'Вася': 100,
      'Петя': 300,
      'Даша': 250
    })).toBe(650);
  });

  test('sum of 1 to 2 equal 3', () => {
    expect(sumOfSalaries({ first: 1, second: 2 })).toBe(3);
  });
});
describe('maxSailary tests', () => {
  test('empty object equal нет сотрудников', () => {
    expect(maxSailary({})).toBe('нет сотрудников');
  });
  test('max sailary Петя', () => {
    expect(maxSailary({
      'Вася': 100,
      'Петя': 300,
      'Даша': 250
    })).toBe('Петя');
  });
  test('max sailary Петя + Вася', () => {
    expect(maxSailary({
      'Вася': 300,
      'Петя': 300,
      'Даша': 250
    })).toBe('Вася, Петя');
  });
});
describe('multiplyNumeric tests', () => {
  test('empty object return empty object', () => {
    expect(multiplyNumeric({})).toEqual({});
  });
  test('multiply basic', () => {
    expect(multiplyNumeric({
      'Вася': 'ill',
      'Петя': 300,
      'Даша': 250
    })).toEqual({
      'Вася': 'ill',
      'Петя': 600,
      'Даша': 500
    });
  });
  test('complex data', () => {
    expect(multiplyNumeric({
      'Вася': 300,
      'Петя': false,
      'Даша': {}
    })).toEqual({
      'Вася': 600,
      'Петя': false,
      'Даша': {}
    });
  });
});
describe('countBy test', () => {
  test('simple test', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('simple test2', () => {
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
  test('negative first value', () => {
    expect(countBy(-2, 5)).toEqual(false);
  });
  test('negative second value', () => {
    expect(countBy(2, -5)).toEqual(false);
  });
  test('zero first value', () => {
    expect(countBy(0, 5)).toEqual(false);
  });
  test('zero second value', () => {
    expect(countBy(2, 0)).toEqual(false);
  });
});
describe('addClass', () => {
  const obj: IClassObject = {
    className: 'open menu'
  };
  test('add new word', () => {
    expect(addClass(obj, 'new')).toEqual({
      className: 'open menu new'
    });
  });
  test('add existing word', () => {
    expect(addClass(obj, 'open')).toEqual({
      className: 'open menu'
    });
  });
});
