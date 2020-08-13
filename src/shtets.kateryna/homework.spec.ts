import { sumSalaries, maxSalary, multiplyNumeric, countBy, addClassName } from './homework';

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

test('sum salary 1.09', () => {
  expect(sumSalaries({
    "Johnny": 0.99,
    "Jack": 0.1
  })).toBe(1.09);
});

test('Петя has the highest salary', () => {
  expect(maxSalary({
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  })).toBe("Петя");
});

test('no employees', () => {
  expect(maxSalary({})).toBe("no employees");
});

test('Multiply properties by 2', () => {
  expect(multiplyNumeric({
    width: 200,
    height: 300,
    title: "My menu"
  })).toEqual({
    width: 400,
    height: 600,
    title: "My menu"
})});

test('Return the array', () => {
  expect(countBy(5,3)).toEqual([5,10,15]);
  expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  expect(countBy(0,0)).toEqual([]);
});

describe('Add class to list', () => {
  var obj = {
    className: 'open menu'
  }
  it('Add "new"', () => {
    expect(addClassName(obj, 'new')).toEqual({ className: 'open menu new' })
  });
  it('Add "open" (no changes)', () => {
    expect(addClassName(obj, 'open')).toEqual(obj)
  });
  it('Add "me" ', () => {
    expect(addClassName(obj, 'me')).toEqual({ className: 'open menu new me' })
  });
})