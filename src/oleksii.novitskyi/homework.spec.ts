import { addClass, MenuItem } from './homework';

describe('Reject incorrect input values', () => {
  test('If several classes are added', () => {
    expect(() => addClass(new MenuItem(), 'class1 class2')).toThrowError();
  });

  test('If className is already added', () => {
    expect(() => addClass(new MenuItem('class1'), 'class1')).toThrowError();
    expect(() => addClass(new MenuItem('class1 class2 class3'), 'class3')).toThrowError();
  });
});

describe('Adding class works fine', () => {
  test('With an empty MenuItem', () => {
    const menuItem = new MenuItem();
    addClass(menuItem, 'class1');
    expect(menuItem.className).toBe('class1');
  });

  test('With non empty MenuItem', () => {
    const menuItem = new MenuItem('class1');
    addClass(menuItem, 'class2');
    expect(menuItem.className).toBe('class1 class2');
  });

  test('className is already added', () => {
    expect(() => addClass(new MenuItem('class1'), 'class1')).toThrowError();
    expect(() => addClass(new MenuItem('class1 class2 class3'), 'class3')).toThrowError();
  });
});