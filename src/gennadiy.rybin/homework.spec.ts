import { sum, sallarySum, sallaryMax, multiplyNumeric, countBy, addClass } from './homework';
import { ISalary, IMenu } from './interfaces';

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

describe('multiplyNumeric', () => {
  const menu: IMenu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  test('basic', () => {
    expect(multiplyNumeric(menu)).toEqual({
      width: 400,
      height: 600,
      title: 'My menu'
    });
  });
});

describe('countBy', () => {
  test('first', () => {
    expect(countBy(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
  test('second', () => {
    expect(countBy(2,5)).toEqual([2,4,6,8,10]);
  });
});

describe('addClass', () => {
  test('new class', () => {
    expect(addClass({className: 'open menu'}, 'new').className).toEqual('open menu new');
  });
  test('existing class', () => {
    expect(addClass({className: 'open menu'}, 'open').className).toEqual('open menu');
  });
});