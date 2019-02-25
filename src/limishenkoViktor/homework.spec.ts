import { sum, objectPropertySum, bigestSalaries, NumericOrString, multiplyNumeric, arrayGenerator, CLS, addClassName } from './homework';

test('sum', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('sum again', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('should return sum of object properties', () => {
  test('should return 650', () => {
    const salariesList = {
      "Вася": 100,
      "Петя": 300,
      "Даша": 250
    };
    expect(objectPropertySum(salariesList)).toBe(650);
  });
  test('shold return 15', () => {
    const salariesList = {
      "Вася": 5,
      "Петя": 8,
      "Даша": 2
    }
    expect(objectPropertySum(salariesList)).toBe(15);
  });
});

describe('should return the name of employer with the bigest salary', () => {
  test('should return Петя', () => {
    const salariesList = {
      "Вася": 100,
      "Петя": 300,
      "Даша": 250
    };
    expect(bigestSalaries(salariesList)).toBe("Петя");
  });
  test('should return Вася', () => {
    const salariesList = {
      "Вася": 8,
      "Петя": 5,
      "Даша": 2
    };
    expect(bigestSalaries(salariesList)).toBe("Вася");
  });
  test('should return нет сотрудников', () => {
    const salariesList = {

    };
    expect(bigestSalaries(salariesList)).toBe("нет сотрудников");
  });
});

describe('should return the object with multiply props', () => {
  test('case 1', () => {
    const menu1: NumericOrString = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    const menuRes1: NumericOrString = {
      width: 400,
      height: 600,
      title: "My menu"
    }
    expect(multiplyNumeric(menu1)).toEqual(menuRes1);
  });
});

describe('should return an array... ', () => {
  it('case 1', () => {
    expect(arrayGenerator(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });
  it('case 1', () => {
    expect(arrayGenerator(2, 5)).toEqual([2, 4, 6, 8, 10])
  })
})

describe('add class to the object', () => {
  const object: CLS = {
    className: 'open menu',
  }
  it('Add new class', () => {
    expect(addClassName(object, 'new')).toEqual({ className: 'open menu new' })
  });
  it('Class alredy exist, just return same object', () => {
    expect(addClassName(object, 'open')).toEqual(object)
  });
  it('Add new class again', () => {
    expect(addClassName(object, 'me')).toEqual({ className: 'open menu new me' })
  });
})