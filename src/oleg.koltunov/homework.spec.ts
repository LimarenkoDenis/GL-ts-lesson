import { 
  salariesSum, 
  maxSalarieName, 
  MNum, 
  multiplyNumeric, 
  counterNum, 
  addClass } from './homework';

// salaries sum
describe('should return sum of object properties', () => {
  test('should return: 650', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(salariesSum(salaries)).toBe(650);
  });

  test('should return: 0', () => {
    const salaries: { [key: string]: number } = {};

    expect(salariesSum(salaries)).toBe(0);
  });
});

// max salarie
describe('should return name with max salery', () => {
  test('should return: Петя', () => {
    const salaries: { [key: string]: number } = {
      Вася: 100,
      Петя: 300,
      Даша: 250
    };

    expect(maxSalarieName(salaries)).toBe('Петя');
  });

  test('should return: "нет сотрудников"', () => {
    const salaries: { [key: string]: number } = {};

    expect(maxSalarieName(salaries)).toBe('нет сотрудников');
  });
});

// multiplyNumeric
describe('multiplies all numeric object properties by 2 or return value if not a number', () => {
  test('should return new object with property multiplies * 2, and property with string value', () => {
    const menu: MNum = {
      width: 200,
      height: 300,
      title: 'My menu'
    };

    const result: MNum = multiplyNumeric(menu);
    expect(result.width).toBe(400);
    expect(result.height).toBe(600);
    expect(result.title).toBe('My menu');
  });

  test('returns nothing', () => {
    expect(multiplyNumeric({})).toMatchObject({});
  });
});


// counterNum
describe('should return an array... ', () => {
  test('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(counterNum(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('should return [2, 4, 6, 8, 10]', () => {
    expect(counterNum(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
})

//addClass
describe('Add class to list of classes', () => {
  const obj: { className: string } = {
    className: 'open menu'
  }
  test('should return "open menu new"', () => {
    expect(addClass(obj, 'new')).toEqual({ className: 'open menu new' })
  });
  test('should return "open menu"', () => {
    expect(addClass(obj, 'open')).toEqual(obj)
  });
  test('should return "open menu new me"', () => {
    expect(addClass(obj, 'me')).toEqual({ className: 'open menu new me' })
  });
})