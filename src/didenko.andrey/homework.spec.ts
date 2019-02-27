import { SalType, MNType, sum, salSum, bigersSal, multiplyNumeric, OfList, addClass } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Sum of properties', () => {
  it('Return, 650', () => {
      const salaries  = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
      };
      expect(salSum(salaries)).toBe(650);
  });

  it('Return, 1333', () => {
    const salaries: SalType  = {
      "Вася": 525,
      "Петя": 184,
      "Даша": 624
    };
    expect(salSum(salaries)).toBe(1333);
  });

  it('If object empty, return 0', () => {
    const salaries = {};
    expect(salSum(salaries)).toBe(0);
  });
});

describe('Show people max slary', ()=>{
  it('Return, "Петя"', () => {
    const salaries: SalType  = {
      "Вася": 100,
      "Петя": 300,
      "Даша": 250
    };
    expect(bigersSal(salaries)).toBe('Петя');
  });

  it('Return, "Константин"', () => {
    const salaries: SalType  = {
      "Константин": 620,
      "Катя": 240,
      "Саша": 480
    };
    expect(bigersSal(salaries)).toBe('Константин');
  });

  it('If object empty, return "нет сотрудников"', () => {
    const salaries: { [ key: string ]: number }  = {};
    expect(bigersSal(salaries)).toBe('нет сотрудников');
  });
});

describe('Multiply numerical properties by 2', () => {
  it('return properties by 2', () => {
    const inputObject: MNType  = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    const outputObject: MNType  = {
      width: 400,
      height: 600,
      title: "My menu"
    };
    expect(multiplyNumeric(inputObject)).toEqual(outputObject);
  })
})

describe('Return an array: ', () => {
  it('Examples 1 - (1, 10)', () => {
    expect(OfList(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });
  it('Examples 2 - (2, 5)', () => {
    expect(OfList(2, 5)).toEqual([2, 4, 6, 8, 10])
  })
})

describe('Add class to list', () => {
  const obj: { className: string } = {
    className: 'open menu'
  }
  it('Add class "new" to list, return new list', () => {
    expect(addClass(obj, 'new')).toEqual({ className: 'open menu new' })
  });
  it('Just return same object', () => {
    expect(addClass(obj, 'open')).toEqual(obj)
  });
  it('Add class "me" to list, return new list', () => {
    expect(addClass(obj, 'me')).toEqual({ className: 'open menu new me' })
  });
})
