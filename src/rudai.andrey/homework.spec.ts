import { addClass, biggestSalary, countBy, multiplyTwo, NSO, salariesSum, SO, sum } from './homework';

describe('sum', () => {
  test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('salariesSum', () => {
  test('basic', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(salariesSum(salaries)).toBe(650);
  });

  test('basic again', () => {
    const salaries: { [key: string]: number } = {
      Вася: 25,
      Петя: 25,
      Даша: 25
    };

    expect(salariesSum(salaries)).toBe(75);
  });
});

describe('biggestSalary', () => {
  test('basic', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(biggestSalary(salaries)).toBe('Петя');
  });

  test('basic again', () => {
    const salaries: { [key: string]: number } = {
      Вася: 26,
      Петя: 25,
      Даша: 25
    };

    expect(biggestSalary(salaries)).toBe('Вася');
  });

  test('basic again for empty', () => {
    const salaries: { [key: string]: number } = {};

    expect(biggestSalary(salaries)).toBe('нет сотрудников');
  });
});

describe('countBy', () => {
  test('basic', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('basic again', () => {
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('addClass', () => {
  const obj: SO = {
    className: 'open menu'
  };

  test('basic', () => {
    expect(addClass(obj, 'new')).toEqual('open menu new');
  });

  test('basic again', () => {
    expect(addClass(obj, 'menu')).toEqual('open menu new');
  });
});

describe('multiplyTwo', () => {
  const menu1: NSO = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  const menuResult1: NSO = {
    width: 400,
    height: 600,
    title: 'My menu'
  };

  const menu2: NSO = {
    width: 250,
    height: 350,
    title: 'My menu'
  };

  const menuResult2: NSO = {
    width: 500,
    height: 700,
    title: 'My menu'
  };

  test('basic', () => {
    expect(multiplyTwo(menu1)).toEqual(menuResult1);
  });

  test('basic again', () => {
    expect(multiplyTwo(menu2)).toEqual(menuResult2);
  });
});