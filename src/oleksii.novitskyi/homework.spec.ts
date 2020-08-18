import { addClass, MenuItem, multiplyNumeric } from './homework';

describe('Reject incorrect input values', () => {
  test('If several classes are added', () => {
    expect(() => addClass(new MenuItem(), 'class1 class2')).toThrowError();
  });

  test('If className is already added', () => {
    expect(() => addClass(new MenuItem('class1'), 'class1')).toThrowError();
    expect(() => addClass(new MenuItem('class1 class2 class3'), 'class3')).toThrowError();
  });

  test('If className is empty', () => {
    expect(() => addClass(new MenuItem(), '')).toThrowError();
  });
});

describe('Adding class works fine', () => {
  test('With an empty MenuItem', () => {
    const menuItem: MenuItem = new MenuItem();
    addClass(menuItem, 'class1');
    expect(menuItem.className).toBe('class1');
  });

  test('With non empty MenuItem', () => {
    const menuItem: MenuItem = new MenuItem('class1');
    addClass(menuItem, 'class2');
    expect(menuItem.className).toBe('class1 class2');
  });
});

describe('Testing multiplyNumeric', () => {
  test('With only numeric properties', () => {
    const objectToTest: {prop1: number, prop2: number} = {
      prop1: 10,
      prop2: 20,
   };

    multiplyNumeric(objectToTest);

    expect(objectToTest.prop1).toBe(20);
    expect(objectToTest.prop2).toBe(40);
  });

  test('With numeric and string properties', () => {
    const objectToTest: {prop1: number, prop2: string} = {
      prop1: 10,
      prop2: 'hello',
   };

    multiplyNumeric(objectToTest);

    expect(objectToTest.prop1).toBe(20);
    expect(objectToTest.prop2).toBe('hello');
  });
});