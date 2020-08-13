import { sum, propertySum, highestSalaryEmployee, multiplyNumeric, countBy, addClass, IClass } from './homework';

const salariesDefault = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('propertySum default test', () => {
  expect(propertySum(salariesDefault)).toBe(650);
});

test('propertySum empty', () => {
  var salaries = { };
  expect(propertySum(salaries)).toBe(0);
});

test('highestSalaryEmployee default test', () => {
  expect(highestSalaryEmployee(salariesDefault)).toBe("Петя");
});

test('multiplyNumeric default test', () => {
  const testInput = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  const expectedOutput = {
    width: 400,
    height: 600,
    title: "My menu"
  };
  expect(multiplyNumeric(testInput)).toEqual(expectedOutput);
});

test('countBy default test #1', () => {
  const expectedOutput = [1,2,3,4,5,6,7,8,9,10];
  expect(countBy(1,10)).toEqual(expectedOutput);
});

test('countBy default test #2', () => {
  const expectedOutput = [2,4,6,8,10];
  expect(countBy(2,5)).toEqual(expectedOutput);
});

test('addClass default test', () => {
  const input = {
    className: 'open menu',
  } as IClass;

  let result = addClass(input, 'hello').className;
  expect(result.split(' ')).toContain('open');
  expect(result.split(' ')).toContain('menu');
  expect(result.split(' ')).toContain('hello');
});