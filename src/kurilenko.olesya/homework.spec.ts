import {
  sumSalaries,
  maxSalary,
  multiplyNumeric,
  countBy,
  addClass,
  addClass2
} from './homework';


describe('function sumSalaries', () => {
  const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };
  test('should return 650', () => {
    expect(sumSalaries(salaries)).toBe(650);
  });

  test('should return 0', () => {
    expect(sumSalaries({})).toBe(0);
  });
});
describe('function maxSalary', () => {
  const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };

  test('should return 300', () => {
    expect(maxSalary(salaries)).toBe(300);
  });

  test(`should return 'нет сотрудников'`, () => {
    expect(maxSalary({})).toEqual('нет сотрудников');
  });
});

describe('function multiplyNumeric ', () => {
  const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  const menuNew = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  test('should return { width: 400, height: 600, title: My menu }', () => {
    expect(multiplyNumeric(menu)).toEqual(menuNew);
  });
});

describe('function countBy', () => {
  const mass1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1.10
  const mass2 = [2, 4, 6, 8, 10];  //2.5

  test('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(countBy(1, 10)).toEqual(mass1);
  });

  test('should return [2, 4, 6, 8, 10]', () => {
    expect(countBy(2, 5)).toEqual(mass2);
  });
});

describe('function addClass', () => {
  const obj = {
    className: 'open menu'
  }
  test(`should return 'open menu'`, () => {
    expect(addClass(obj, 'open').className).toBe('open menu');
  });

  test(`should return open menu new`, () => {
    expect(addClass(obj, 'new').className).toBe('open menu new');
  });
});

describe('function addClass2', () => {
  const obj = {
    className: 'open menu'
  }
  test(`should return 'open menu'`, () => {
    expect(addClass2('open')(obj).className).toBe('open menu');
  });

  test(`should return open menu new`, () => {
    expect(addClass2('new')(obj).className).toBe('open menu new');
  });
});