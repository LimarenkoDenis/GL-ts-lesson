import { calculateSalaries, getToptPaidEmployee, multiplyNumeric, countBySequence, addClass } from './homework';
import { ISalary } from './ISalary';

describe('Test calculateSalaries method', () => {
  const salaries: ISalary = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  test('calculate slaries of an object with data', () => {
    expect(calculateSalaries(salaries)).toBe(650);
  });

  test('calculate slaries of an empty object', () => {
    expect(calculateSalaries({})).toBe(0);
  });
});

describe('Test getToptPaidEmployee method', () => {
  const salaries: ISalary = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  test('get top paid employee from of an object with data', () => {
    expect(getToptPaidEmployee(salaries)).toBe('Петя');
  });

  test('get top paid employee from of an empty object', () => {
    expect(getToptPaidEmployee({})).toBe('нет сотрудников');
  });
});

describe('Test multiplyNumeric method', () => {
  const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  test('multiply all numeric properties of an object', () => {
    multiplyNumeric(menu);
    expect(menu.width).toBe(400);
    expect(menu.height).toBe(600);
    expect(menu.title).toBe('My menu');
  });
});

describe('Test countBySequence method', () => {
  const sequence1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sequense2 = [2, 4, 6, 8, 10];

  test('count by for sequence1', () => {
    expect(countBySequence(1, 10)).toEqual(sequence1);
  });

  test('count by for sequence2', () => {
    expect(countBySequence(2, 5)).toEqual(sequense2);
  });
});

describe('Test addClass method', () => {
  test('add several class names', () => {
    var obj = {
      className: 'open menu'
    }

    var expectedClassName: string = 'open menu new me';

    addClass(obj, 'new'); // obj.className='open menu new'
    addClass(obj, 'open'); // без изменений (класс уже существует)
    addClass(obj, 'me'); // obj.className='open menu new me'

    expect(obj.className).toEqual(expectedClassName);
  });
});