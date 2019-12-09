import { sum, sumSalaries, maxSalaries, multiplyNumeric, countBy, addClass } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

// test for task 1
test('function sumSalaries should return the sum of salaries', () => {
  const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };
  expect(sumSalaries(salaries)).toBe(650);
});

test('function sumSalaries should return 0 when the object is empty', () => {
  expect(sumSalaries({})).toBe(0);
});
// end test for task 1

// test for task 2
test('function maxSalaries should return the Name of beneficiary of the biggest salary - "Петя"', () => {
  const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };
  expect(maxSalaries(salaries)).toBe("Петя");
});

test('function maxSalaries should return "нет сотрудников" when the object is empty', () => {
  expect(maxSalaries({})).toBe("нет сотрудников");
});
// end test for task 2

// test for task 3
test('function multiplyNumeric should double all numeric value of the object', () => {
  const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  expect(multiplyNumeric(menu));
  expect(menu.width).toBe(400);
  expect(menu.height).toBe(600);
  expect(menu.title).toBe('My menu');});
// end test for task 3

// test for task 4
test('function countBy should return the proper array', () => {
  expect(countBy(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  expect(countBy(1,10).length).toBe(10);
  expect(countBy(2,5)).toEqual([2,4,6,8,10]);
  expect(countBy(2,5).length).toBe(5);
});
// end test for task 4

// test for task 5
test('function addClass should add the new className to className property', () => {
  const obj = {
    className: 'open menu'
  }
  expect(addClass(obj, 'new'));
  expect(obj.className).toBe('open menu new');
});

test('function addClass should add the new className to className property', () => {
  const obj = {
    className: 'open menu'
  }
  expect(addClass(obj, 'new'));
  expect(obj.className).toBe('open menu new');
  expect(addClass(obj, 'open'));
  expect(obj.className).toBe('open menu new');
  expect(addClass(obj, 'me'));
  expect(obj.className).toBe('open menu new me');
});
// end test for task 5