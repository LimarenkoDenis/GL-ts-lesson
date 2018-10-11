import { addClass, camelize, removeClass, sum } from './homework';

describe('sum', () => {
  test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('addClass', () => {
  test('addClass', () => {
    expect(addClass({ className: 'open new' }, 'class')).toEqual({ className: 'open new class' })
  });
});
describe('Camelize', () => {
  test('camelize', () => {
    expect(camelize('border-radius')).toBe('borderRadius')
  })
});
describe('removeClass', () => {
  test('removeClass', () => {
    expect(removeClass({ className: 'add new class' }, 'class')).toEqual({ className: 'add new' });
  })
});
