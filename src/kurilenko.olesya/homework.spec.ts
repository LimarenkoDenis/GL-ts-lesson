import {
  sumSalaries,
  maxSalary,
  multiplyNumeric,
  countBy,
  addClass,
  addClass2
} from './homework';

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
var menuNew = {
  width: 400,
  height: 600,
  title: "My menu"
};
var mass1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1.10
var mass2 = [2, 4, 6, 8, 10];  //2.5

var obj = {
  className: 'open menu'
}
describe('function sumSalaries', () => {
  test('should return 650', () => {
    expect(sumSalaries(salaries)).toBe(650);
  });

  test('should return 0', () => {
    expect(sumSalaries({})).toBe(0);
  });
});
describe('function maxSalary', () => {
  test('should return 300', () => {
    expect(maxSalary(salaries)).toBe(300);
  });

  test(`should return 'нет сотрудников'`, () => {
    expect(maxSalary({})).toEqual('нет сотрудников');
  });
});

describe('function multiplyNumeric ', () => {
  test('should return { width: 400, height: 600, title: My menu }', () => {
    expect(multiplyNumeric(menu)).toEqual(menuNew);
  });
});

describe('function countBy', () => {
  test('should return [1,2,3,4,5,6,7,8,9,10]', () => {
    expect(countBy(1, 10)).toEqual(mass1);
  });

  test('should return [2, 4, 6, 8, 10]', () => {
    expect(countBy(2, 5)).toEqual(mass2);
  });
});

describe('function addClass', () => {
  test(`should return 'open menu'`, () => {
    expect(addClass(obj,'open').className).toBe('open menu');
  });

  test(`should return open menu new`, () => {
    expect(addClass(obj,'new').className).toBe('open menu new');
  });
});

describe('function addClass2', () => {
  test(`should return 'open menu'`, () => {
    expect(addClass2('open')(obj).className).toBe('open menu');
  });

  test(`should return open menu new`, () => {
    expect(addClass2('new')(obj).className).toBe('open menu new');
  });
});