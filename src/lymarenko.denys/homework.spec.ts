import { MN, multiplyNumeric, propertySum, sum } from './homework';

describe('sum', () => {
  test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  });

});


describe('object property sub', () => {
  test('basic', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(propertySum(salaries)).toBe(650);
  });

  test('basic again', () => {
    const salaries: { [key: string]: number } = {
      Вася: 1,
      Петя: 2,
      Даша: 3
    };

    expect(propertySum(salaries)).toBe(6);
  });
});


describe('multiplyNumeric', () => {
  it('multiplies all numeric properties by 2', () => {
    const menu: MN = {
      width: 200,
      height: 300,
      title: 'My menu'
    };

    const result: MN = multiplyNumeric(menu);
    expect(result.width).toBe(400);
    expect(result.height).toBe(600);
    expect(result.title).toBe('My menu');
  });

  it('returns nothing', () => {
    expect(multiplyNumeric({})).toMatchObject({});
  });
});
