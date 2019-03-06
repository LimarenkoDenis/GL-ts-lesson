import { sum } from './homework';

import * as _ from './homework';

const salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};



const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};



test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Salaries sum', () => {
  expect(_.getSalariesSum(salaries)).toBe(650);
});

test('Highest salary', () => {
  expect(_.getHighestSalary(salaries)).toBe('Петя');
});

test('Highest salary empty object', () => {
  expect(_.getHighestSalary({})).toBe('Нет сотрудников');
});

test('multiply numeric with string', () => {
  expect(_.multiplyNumeric(menu)).toEqual({
    width: 400,
    height: 600,
    title: "My menu"
  });
});

test('multiply numeric', () => {
  expect(_.multiplyNumeric(salaries)).toEqual({
    "Вася": 200,
    "Петя": 600,
    "Даша": 500
  });
});

test('Count By', () => {
  expect(_.countBy(1, 10)).toEqual([
    1,2,3,4,5,6,7,8,9,10
  ]);
});

test('Count By', () => {
  expect(_.countBy(3, 6)).toEqual([
    3,6,9,12,15,18
  ]);
});

test('Count By Invalid', () => {
  expect(() => _.countBy(-1, 6)).toThrow('Arguments must be a positive numbers');
});

test('add someClass to obj', () =>{
  const obj = {
    className: 'open menu'
  };
  expect(_.addClass(obj, 'someClass')).toEqual({
    className: 'open menu someClass'
  })
})

test('add someClass to empty obj', () =>{
  expect(_.addClass({}, 'someClass')).toEqual({
    className: 'someClass'
  })
})

test('add exist to obj', () =>{
  const obj = {
    className: 'open menu'
  };
  expect(_.addClass(obj, 'menu')).toEqual({
    className: 'open menu'
  })
})