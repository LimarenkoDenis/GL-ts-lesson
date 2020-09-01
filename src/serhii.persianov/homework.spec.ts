import {
  addClass,
  countBy,
  getHighestSalary,
  IAnyObject,
  IClassNames,
  IStrNumObj,
  multiplyNumeric,
  salariesSum,
  sum
} from './homework';

const salaries: IStrNumObj = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};

const mixedType: IAnyObject = {
  width: 200,
  height: 300,
  title: 'My menu'
};

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('salaries sum - empty object', () => {
  expect(salariesSum({})).toBe(0);
});

test('salaries sum - correct object', () => {
  expect(salariesSum(salaries)).toBe(650);
});

test('highest salary - empty object', () => {
  expect(getHighestSalary({})).toMatch(/нет сотрудников/);
});

test('highest salary - correct object', () => {
  expect(getHighestSalary(salaries)).toMatch(/Петя/);
});

test('multiplyNumeric', () => {
  expect(multiplyNumeric(mixedType)).toEqual(expect.objectContaining({
    width: 400,
    height: 600,
    title: 'My menu'
  }));
});

test('countBy', () => {
  expect(countBy(1, 10)).toHaveLength(10);
  expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(countBy(2, 5)).toHaveLength(5);
  expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
});

const addClassTestObject: IClassNames = {
  className: 'menu open',
  otherProp: 'random',
};

test('addClass', () => {
  expect(addClass(addClassTestObject, 'new')).toEqual(expect.objectContaining({
    className: 'menu open new',
    otherProp: 'random',
  }));
  expect(addClass(addClassTestObject, 'open')).toEqual(expect.objectContaining({
    className: 'menu open',
    otherProp: 'random',
  }));
  expect(addClass(addClassTestObject, 'me')).toEqual(expect.objectContaining({
    className: 'menu open me',
    otherProp: 'random',
  }));
});
