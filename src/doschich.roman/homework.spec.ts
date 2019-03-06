import { sum, calculateSum, findMax, multiplyNumeric, menuType, countBy, addClass, classType } from './homework';
import { expect } from 'chai';
import 'mocha';

const salaries: { [key: string]: number } = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

let menu: menuType = {
  width: 200,
  height: 300,
  title: "My menu"
};

describe('Sum of object properties', () => {
  it('Sum of 1,2,3,4 should return 10', () => {
    const result = sum(1, 2, 3, 4);
    expect(result).to.equal(10);
  });
});

describe('calculateSum of object properties', () => {
  it('Sum of 100 300 250 should return 650', () => {
    const result = calculateSum(salaries);
    expect(result).to.equal(650);
  });
});

describe('Find key of max value', () => {
  it('Salaries max value should return Петя', () => {
    const result = findMax(salaries);
    expect(result).to.equal('Петя');
  });
});

describe('Doubles all numeric values of object', () => {
  it('Should return object with all numeric values multiplied at 2', () => {
    const result = multiplyNumeric(menu);
    expect(result.width).to.equal(400);
    expect(result.height).to.equal(600);
  });
});

describe('Assume 2 positive numbers greater than 0 will return a array of length (n) with multiples of (x).', () => {
  it('Assume 1, 10 will return [1,2,3,4,5,6,7,8,9,10]', () => {
    const a = 1;
    const b = 10;
    const result = countBy(a,b);
    expect(result.length).to.equal(b);
    for (var i = 0; i < b; i++) expect(result[i]).to.equal((i+1)*a);
  });
});

describe('Function will add new Class to Object.className if there are no such class exist and remove all spaces', () => {
  it('open   menu    class with addClass("menu") addClass("test") will return "open menu class test"', () => {
    let obj: classType = {
      className: 'open   menu    class'
    }
    addClass(obj, 'menu');
    addClass(obj, 'test');
    expect(obj.className).to.equal('open menu class test');
  });
});