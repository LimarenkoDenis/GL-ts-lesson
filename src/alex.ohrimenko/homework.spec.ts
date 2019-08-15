// tslint:disable-next-line:max-line-length
import { addClass, countBy, maxValue, multiplyNumeric, objClassNameType, salObjType, sum, sumSel,  valueListType } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sumSel', () => {
  const salaries: salObjType = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };
  expect(sumSel(salaries)).toBe(650);
});
test('sum again', () => {
  const salaries2: salObjType = {
    'Вася': 200,
    'Петя': 600,
    'Даша': 500
  };
  expect(sumSel(salaries2)).toBe(1300);
});

test('maxValue', () => {
  const salaries: salObjType = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };
  expect(maxValue(salaries)).toBe('Петя');
});
test('maxValue again', () => {
  const salaries2: salObjType = {
    'Вася': 700,
    'Петя': 150,
    'Даша': 150
  };
  expect(maxValue(salaries2)).toBe('Вася');
});


test('multiplyNumeric', () => {
  const menu: valueListType = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  expect(multiplyNumeric(menu)).toEqual({
    width: 400,
    height: 600,
    title: 'My menu'
  });
});
test('multiplyNumeric again', () => {
  const menu2: valueListType = {
    width: 400,
    height: 'some',
    title: 100
  };
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
  const obj: objClassNameType = {
    className: 'open menu'
  };
  expect(addClass(obj, 'new')).toBe('open menu new');
});
test('addClass again', () => {
  const obj: objClassNameType = {
    className: 'open menu'
  };
  expect(addClass(obj, 'open')).toBe('open menu');
});
test('addClass again2', () => {
  const obj: objClassNameType = {
    className: 'open menu'
  };
  expect(addClass(obj, 'ME')).toBe('open menu ME');
});
