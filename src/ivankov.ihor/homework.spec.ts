import { propertySum, maxValueProperty, multiplyNumeric, addClass, countBy } from './homework';

test('proprtySum_basic', () => {
  expect(propertySum({
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  })).toBe(650);
});

test('properySum_empty', () => {
  expect(propertySum({})).toBe(0);
});

test('proprtySum_single', () => {
  expect(propertySum({    
    "Петя": 800
  })).toBe(800);
});

test('maxValueProperty_basic', () => {
  expect(maxValueProperty({
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  })).toBe("Петя");
});

test('maxValueProperty_empty', () => {
  expect(maxValueProperty({})).toBe("нет сотрудников");
});

test('maxValueProperty_similar', () => {
  expect(maxValueProperty({
    "Вася": 100,
    "Петя": 300,
    "Даша": 250,
    "Дима": 300
  })).toBe("Петя" || "Дима");
});

test('multiplyNumeric_basic', () => {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu);
  expect(menu).toEqual({
    width: 400,
    height: 600,
    title: "My menu"
  });
});

test('multiplyNumeric_3', () => {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu, 3);
  expect(menu).toEqual({
    width: 600,
    height: 900,
    title: "My menu"
  });
});

test('multiplyNumeric_0', () => {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu, 0);
  expect(menu).toEqual({
    width: 0,
    height: 0,
    title: "My menu"
  });
});

test('addClass_basic', () => {
  let obj = {
    className: 'open menu'
  }
  addClass(obj, 'new'); 
  addClass(obj, 'open');
  addClass(obj, 'me'); 
  expect(obj.className).toEqual("open menu new me");
});

test('addClass_extended', () => {
  let obj = {
    className: 'open menu',
    age: 10,
    name: 'Andy'
  }
  addClass(obj, 'new'); 
  addClass(obj, 'open');
  addClass(obj, 'me'); 
  expect(obj).toEqual({
    className: "open menu new me",
    age: 10,
    name: 'Andy'
  });
});

test('countBy_basic', () => {
  expect(countBy(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  expect(countBy(2,5)).toEqual([2,4,6,8,10]);
})

