import { maxOfSalary, salary, summOfSalary, multiplyNumeric, multypleObj, countBy, addClass } from "./homework";

describe('sum', () => {
  test('should return 650', () => {
    const salaries: salary = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(summOfSalary(salaries)).toBe(650);
  });

  test('should return 0', () => {
    const salaries: salary = {
    };

    expect(summOfSalary(salaries)).toBe(0);
  });
});

describe('max salary has:', () => {
  test('should return "Петя"', () => {
    const salaries: salary = {
      Вася: 0,
      Петя: 230,
      Даша: 120
    };
    expect(maxOfSalary(salaries)).toBe('Петя');
  });

  test('should return "Вася, Петя"', () => {
    const salaries: salary = {
      Вася: 140,
      Петя: 140,
      Даша: 120
    };
    expect(maxOfSalary(salaries)).toBe('Вася, Петя');
  });

  test('should return "зп одинаковая"', () => {
    const salaries: salary = {
      Вася: 10,
      Петя: 10,
    };
    expect(maxOfSalary(salaries)).toBe('зп одинаковая');
  });


  test('should return "нет сотрудников"', () => {
    const salaries: salary = {};
    expect(maxOfSalary(salaries)).toBe('нет сотрудников');
  })
});

describe('num x2', () => {
  test('start obj = Вася: 0, Петя: \'asd\', Даша: 240', () => {
    const salaries: multypleObj = {
      Вася: 0,
      Петя: 'asd',
      Даша: 120
    };
    multiplyNumeric(salaries);
    expect(salaries['Вася']).toBe(0);
    expect(salaries['Петя']).toBe('asd');
    expect(salaries['Даша']).toBe(240);
  });
});

describe('array of numbers', () => {
  test('should return "[2,4,6,8,10]"', () => {
    expect(countBy(2,5)).toEqual([2,4,6,8,10])
  });
  test('should return "[1,2,3,4,5,6,7,8,9,10]"', () => {
    expect(countBy(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10])
  });
});

describe('add class', () => {
  const obj = {
    className: 'open menu'
  };

  test('should return "{className: \'open menu new\'}"', () => {
    expect(addClass(obj, 'new')).toEqual({className: 'open menu new'})
  });

  test('should return "{className: \'open menu\'}"', () => {
    expect(addClass(obj, 'menu')).toEqual(false)
  });
});