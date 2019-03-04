import {
  addClassToObjectProp, getArrayByStepAndSize, getPropertyWithMaxValue, getSumOfObjectProps, multiplyNumericProps
} from './homework';
import { IObjectWithClass, ISalary, IStringNumberObject } from './models';

describe('getSumOfObjectProps', () => {
  const salaries: ISalary = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  test('should return the sum of all object properties', () => {
    expect(getSumOfObjectProps(salaries)).toBe(650);
  });

  test('should return 0 when object has no properties', () => {
    expect(getSumOfObjectProps({})).toBe(0);
  });

});

describe('getPropertyWithMaxValue', () => {
  const salaries: ISalary = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  test('should return "Петя"', () => {
    expect(getPropertyWithMaxValue(salaries)).toBe('Петя');
  });

  test('should return "нет сотрудников" for empty object', () => {
    expect(getPropertyWithMaxValue({})).toBe('нет сотрудников');
  });

});

describe('multiplyNumericProps', () => {
  const menu: IStringNumberObject = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  test('should modify object and multiply all numeric props', () => {
    multiplyNumericProps(menu);
    expect(menu.width).toBe(400);
    expect(menu.height).toBe(600);
    expect(menu.title).toBe('My menu');
  });
});

describe('multiplyNumericProps', () => {
  const menu: IStringNumberObject = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  test('should modify object and multiply all numeric props', () => {
    multiplyNumericProps(menu);
    expect(menu.width).toBe(400);
    expect(menu.height).toBe(600);
    expect(menu.title).toBe('My menu');
  });
});

describe('getArrayByStepAndSize', () => {
  test('it should get the list of numbers from 1 to 10 with the step equals to 1', () => {
    expect(getArrayByStepAndSize(1, 10).length).toBe(10);
    expect(getArrayByStepAndSize(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('it should get the list of numbers from 2 to 10 with the step equals to 2', () => {
    expect(getArrayByStepAndSize(2, 5).length).toBe(5);
    expect(getArrayByStepAndSize(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('addClassToObjectProp', () => {
  const obj: IObjectWithClass = {
    className: 'open menu'
  };

  test('it should add "new" class to object', () => {
    addClassToObjectProp(obj, 'new');
    expect(obj.className).toBe('open menu new');
  });

  test('it should not add existed className', () => {
    addClassToObjectProp(obj, 'open');
    expect(obj.className).toBe('open menu new');
  });

  test('it should add "me" className', () => {
    addClassToObjectProp(obj, 'me');
    expect(obj.className).toBe('open menu new me');
  });
});
