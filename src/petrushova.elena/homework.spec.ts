import { sum, Employee, salariesSumm, propSumm, summ, topSalary, Menu, multiplyNumeric, ClassNameList, addClass, countBy } from './homework';

describe('sum', () => {

  test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('should return summ of object prop', () => {

  test('should return 1250', () => {
    const salaries: Employee = {
      Вася: 300,
      Петя: 400,
      Даша: 550
    };

    expect(salariesSumm(salaries)).toBe(1250);
  });

  test('should return 10', () => {
    const salaries: Employee = {
      Вася: 2,
      Петя: 3,
      Даша: 5
    };

    expect(salariesSumm(salaries)).toBe(10);
  });


  test('should return 0', () => {
    const salaries = {};

    expect(salariesSumm(salaries)).toBe(0);
  });

  test('should return 1250', () => {
    const salaries: Employee = {
      Вася: 300,
      Петя: 400,
      Даша: 550
    };

    expect(propSumm(salaries)).toBe(1250);
  });

  test('should return 10', () => {
    const salaries: Employee = {
      Вася: 2,
      Петя: 3,
      Даша: 5
    };

    expect(propSumm(salaries)).toBe(10);
  });

  test('should return 0', () => {
    const salaries = {};

    expect(propSumm(salaries)).toBe(0);
  });

  test('should return 1250', () => {
    const salaries: Employee = {
      Вася: 300,
      Петя: 400,
      Даша: 550
    };

    expect(summ(salaries)).toBe(1250);
  });


  test('should return 10', () => {
    const salaries: Employee = {
      Вася: 2,
      Петя: 3,
      Даша: 5
    };

    expect(summ(salaries)).toBe(10);
  });

  test('should return 0', () => {
    const salaries: Employee = {};

    expect(summ(salaries)).toBe(0);
  });

});

describe('should return top-paid person name', () => {

  test('should return "Петя"', () => {
    const salaries: Employee = {
      "Вася": 100,
      "Петя": 300,
      "Даша": 250
    };

    expect(topSalary(salaries)).toBe("Петя");
  });

  test('should return "Вася"', () => {
    const salaries: Employee = {
      "Вася": 1000,
      "Петя": 300,
      "Даша": 250
    };

    expect(topSalary(salaries)).toBe("Вася");
  });

  test('should return "нет сотрудников"', () => {
    const salaries: Employee = {};

    expect(topSalary(salaries)).toBe("нет сотрудников");
  });

});

describe('multiplies all numeric object properties by 2', () => {

  test('should return object with numeric properties multiplied by 2, and ather existing property', () => {
    const menu: Menu = {
      width: 200,
      height: 300,
      title: 'My menu'
    };

    expect(multiplyNumeric(menu)).toStrictEqual({
      width: 400,
      height: 600,
      title: 'My menu'
    });
  });

  it('returns empty object', () => {
    expect(multiplyNumeric({})).toMatchObject({});
  });
});

describe('should add className without odd spaces to string with names and return new object if className does not exist in obj', () => {

  test('should add name to obj.className and return new object', () => {
    const testObj: ClassNameList = {
      className: 'open names'
    };

    const result: ClassNameList = addClass(testObj, 'menu');
    expect(result.className).toBe('open names menu');
  });

  it('should add name to obj.className without odd spaces and return new object', () => {
    const testObj: ClassNameList = {
      className: 'open names menu'
    };
    const result: ClassNameList = addClass(testObj, ' new ');

    expect(result.className).toBe('open names menu new');
  });

  it('returns same object', () => {
    const testObj: ClassNameList = {
      className: 'open names'
    };
    const result: ClassNameList = addClass(testObj, 'names');

    expect(result.className).toBe('open names');
  });

  it('returns same object', () => {
    const testObj: ClassNameList = {
      className: 'open names'
    };
    const result: ClassNameList = addClass(testObj, ' ');

    expect(result.className).toBe('open names');
  });

  it('returns same object', () => {
    const testObj: ClassNameList = {
      className: 'open names'
    };
    const result: ClassNameList = addClass(testObj, ' open');

    expect(result.className).toBe('open names');
  });

});

describe('should return a list of length (n) with multiples of (x)', () => {

  test('returns list of number', () => {

    expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
  });

  test('returns list of number', () => {

    expect(countBy(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
})