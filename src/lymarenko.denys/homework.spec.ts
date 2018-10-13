import { MN, multiplyNumeric, propertySum, sum } from './homework';

describe('sum', () => {
  test('sum of 1, 2, 3, 4 should return 10', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('sum of 1, 2 should return 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

});


describe('should return sum of object properties', () => {
  test('should return 650', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(propertySum(salaries)).toBe(650);
  });

  test('should return 6', () => {
    const salaries: { [key: string]: number } = {
      Вася: 1,
      Петя: 2,
      Даша: 3
    };

    expect(propertySum(salaries)).toBe(6);
  });
});


describe('multiplies all numeric object properties by 2 or return value if not a number', () => {
  it('should return new object with property multiplies * 2, and property with string value', () => {
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
