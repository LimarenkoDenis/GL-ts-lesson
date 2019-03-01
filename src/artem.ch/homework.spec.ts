import { addClass, countBy, maxValue, multiplyNumeric, sum } from './homework';

const salaries: {} = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};
const salaries2: {} = {
  'Вася': 700,
  'Петя': 150,
  'Даша': 150
};
const menu: {} = {
  width: 200,
  height: 300,
  title: 'My menu'
};
const menu2: {} = {
  width: 400,
  height: 'some',
  title: 100
};
const obj: {} = {
  className: 'open menu'
};

test('sum', () => {
  expect(sum(salaries)).toBe(650);
});
test('sum again', () => {
  expect(sum(salaries2)).toBe(1000);
});


test('maxValue', () => {
  expect(maxValue(salaries)).toBe('Петя');
});
test('maxValue again', () => {
  expect(maxValue(salaries2)).toBe('Вася');
});


test('multiplyNumeric', () => {
  expect(multiplyNumeric(menu)).toEqual({
    width: 400,
    height: 600,
    title: 'My menu'
  });
});
test('multiplyNumeric again', () => {
  expect(multiplyNumeric(menu2)).toEqual({
    width: 800,
    height: 'some',
    title: 200
  });
});


test('countBy', () => {
  expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
test('countBy again', () => {
  expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
});


test('addClass', () => {
  expect(addClass(obj, 'new')).toBe('open menu new');
});
test('addClass again', () => {
  expect(addClass(obj, 'open')).toBe('open menu new');
});
test('addClass again2', () => {
  expect(addClass(obj, 'ME')).toBe('open menu new ME');
});