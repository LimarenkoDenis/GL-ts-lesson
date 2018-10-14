import { sum, sumSalaries, multiplyNumeric, maxSalaries, funcOfList, addClass } from './homework';


test('basic', () => {
  const salaries: { [key: string]: number } = {
    Вася: 100,
    Петя: 300,
    Даша: 250
  };
  expect(sumSalaries(salaries)).toBe(650);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('max salaries', () => {
  const salaries: { [key: string]: number } = {
    Вася: 100,
    Петя: 300,
    Даша: 250
  };
  expect(maxSalaries(salaries)).toBe('Петя');
});


test('max salaries again', () => {
  const salaries: { [key: string]: number } = {
    Вася: 35,
    Петя: 4,
    Даша: 65,
    Жора: 7,
    Вова: 345,
    Евкакий: 75898,
    Гемор: 57,
  };
  expect(maxSalaries(salaries)).toBe('Евкакий');
});

describe('multiplyNumeric', () => {
  test('multiplies all numeric properties by 2', () => {
    const menu: {[key: string]: number | string} = {
      width: 200,
      height: 300,
      title: 'My menu'
    };
    const result: {[key: string]: number | string} = multiplyNumeric(menu);
    expect(result.width).toBe(400);
    expect(result.height).toBe(600);
    expect(result.title).toBe('My menu');
  })
});

describe('function of list items', () => {
  const result:number[] = funcOfList(1,10);
  it('function of list items 1, 10', () => 
    expect([1,2,3,4,5,6,7,8,9,10]).toEqual(
      expect.arrayContaining(result)))
})

describe('function of list items', () => {
  const equals: number[] = funcOfList(2, 5);
  it('function of list items 2, 5', () =>
    expect([2,4,6,8,10]).toEqual(
      expect.arrayContaining(equals)));
});
    
describe('function of list items', () => {
  const equals: number[] = funcOfList(2, 5);
  it('function of list items 2, 5 is not Equals', () =>
  expect([2,3,5,7,9]).not.toEqual(
    expect.arrayContaining(equals)));
});

describe('the list of items is empty', () => {
  const result:number[] = funcOfList(0,0);
  it('the list of items is empty', () => 
    expect([]).toEqual(
      expect.arrayContaining(result)))
});


test('add "new" to object key', () => {
  const obj: { [key: string]: string } = {
    className: 'open menu'
  };
  expect(addClass(obj,'new')).toBe('open menu new');
});

test('add "open" to object key', () => {
  const obj: { [key: string]: string } = {
    className: 'open menu'
  };
  expect(addClass(obj,'open')).toBe('open menu');
});

test('add "me" to object key', () => {
  const obj: { [key: string]: string } = {
    className: 'open menu new'
  };
  expect(addClass(obj,'me')).not.toBe(' ');
});