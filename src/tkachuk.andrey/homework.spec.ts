import { sumSalaries, maxSalary, multiplyNumeric, countBy, addClass } from './homework';

/* Sum salaries tests */
test('empty object(sum 0)', () => {
  expect(sumSalaries({})).toBe(0);
});

test('sum salary 650', () => {
  expect(sumSalaries({
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  })).toBe(650);
});

test('sum salary 700', () => {
  expect(sumSalaries({
    "Johnny": 300,
    "Jack": 400
  })).toBe(700);
});


/* Max salary tests */

test('no employees', () => {
  expect(maxSalary({})).toBe('нет сотрудников');
});

test('max salary 300', () => {
  expect(maxSalary({
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  })).toBe(300);
});

test('max salary 450', () => {
  expect(maxSalary({
    "Johnny": 300,
    "Jack": 450
  })).toBe(450);
});

/* Multiply numeric tests */

test('no values', () => {
  expect(multiplyNumeric({})).toEqual({});
});

test('multiply width and height', () => {
  expect(multiplyNumeric({
    width: 400,
    height: 600,
    title: "My menu"
  }).width).toEqual(800);
  expect(multiplyNumeric({
    width: 400,
    height: 600,
    title: "My menu"
  }).height).toEqual(1200);
});

test('check title', () => {
  expect(multiplyNumeric({
    width: 400,
    height: 600,
    title: "My menu"
  }).title).toEqual("My menu");
});

/* countBy numeric tests */

test('check array length', () => {
  expect(countBy(1, 10).length).toBe(10);
});

test('chack array first value', () => {
  expect(countBy(3, 5)[0]).toBe(3);
});

test('chack array last value', () => {
  expect(countBy(3, 10).pop()).toBe(30);
});

/* addClass tests */

test('new class', () => {
  expect(addClass({ className: '' }, 'cls').className).toEqual('cls');
});

test('add new class to list', () => {
  expect(addClass({className: 'open menu'}, 'new').className).toEqual('open menu new');
});

test('add existent class', () => {
  expect(addClass({className: 'open menu'}, 'open').className).toEqual('open menu');
});