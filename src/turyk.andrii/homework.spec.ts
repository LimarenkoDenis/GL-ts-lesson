import * as funcs from './homework';

test('basic', () => {
  expect(funcs.sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(funcs.sum(1, 2)).toBe(3);
});

test('basic again', () => {
  expect(funcs.sum(1, 2)).toBe(3);
});

describe('should return sum of object properties', () => {
  test('should return 650', () => {
    const salaries: funcs.ISalaryEntry = {
      Вася: 100,
      Петя: 300,
      Даша: 250,
    };

    expect(funcs.salariesSum(salaries)).toBe(650);
  });

  test('should return 1033', () => {
    const salaries: funcs.ISalaryEntry = {
      Вася: 100,
      Артем: 600,
      Петя: 200,
      Даша: 133,
    };

    expect(funcs.salariesSum(salaries)).toBe(1033);
  });
});

describe('should return the name of the highest paid employee', () => {
  test('should return Артем', () => {
    const salaries: funcs.ISalaryEntry = {
      Вася: 100,
      Артем: 600,
      Петя: 200,
      Даша: 133,
    };

    expect(funcs.highestPaidEmployee(salaries)).toBe('Артем');
  });
  test('should return Нет сотрудников', () => {
    expect(funcs.highestPaidEmployee({})).toBe('Нет сотрудников');
  });
});

describe('should return the name of the highest paid employee', () => {
  test('should return Артем', () => {
    const salaries: funcs.ISalaryEntry = {
      Вася: 100,
      Артем: 600,
      Петя: 200,
      Даша: 133,
    };

    expect(funcs.highestPaidEmployee(salaries)).toBe('Артем');
  });
});

describe('multiplies all numeric object properties by 2 or return value if not a number', () => {
  it('should return new object with property multiplies * 2, and property with string value', () => {
    const menu: {[key: string]: any} = {
      width: 200,
      height: 300,
      title: 'My menu'
    };

    const result: {[key: string]: any} = funcs.multiplyNumeric(menu);
    expect(result.width).toBe(400);
    expect(result.height).toBe(600);
    expect(result.title).toBe('My menu');
  });

  it('returns nothing', () => {
    expect(funcs.multiplyNumeric({})).toMatchObject({});
  });
});

describe('should return an array', () => {
  it('case 1', () => {
    expect(funcs.countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('case 2', () => {
    expect(funcs.countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('should add class to the object', () => {
  const obj: {className: string} = {
    className: 'open menu',
  };
  it('should add class new', () => {
    expect(funcs.addClass(obj, 'new')).toEqual({ className: 'open menu new' });
  });
  it('should return the same object', () => {
    expect(funcs.addClass(obj, 'open')).toEqual(obj);
  });
  it('should add class me', () => {
    expect(funcs.addClass(obj, 'me')).toEqual({ className: 'open menu new me' });
  });
});