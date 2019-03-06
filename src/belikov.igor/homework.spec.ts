import { sum, sumOfProperties, maxSalary, doubleNumerics, addClass } from './homework';

test('basic', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of properties when has properties', () => {
  const testedObject: {[key: string]:number} = {
    "hello": 2,
    "bye": 100,
    "angular": 98
  }
  expect(sumOfProperties(testedObject)).toBe(200);
});

test('sum of properties when has no properties', () => {
  expect(sumOfProperties({})).toBe(0);
});

test('employee with max salary when has properties', () => {
  const testedObject: {[key: string]:number} = {
    "Petya": 2,
    "Vasya": 100,
    "Pupa": 98
  };
  expect(maxSalary(testedObject)).toBe("Vasya");
});

test('max salary when has no properties', () => {
  expect(maxSalary({})).toBe("no employees");
});

test('double numeric properties', () => {
  const testedObject: {[key: string]:any} = {
    "Petya": "hello",
    "Vasya": 100,
    "Pupa": true
  };
  doubleNumerics(testedObject);
  expect(testedObject).toMatchObject({
    "Petya": "hello",
    "Vasya": 200,
    "Pupa": true
  });
});

test("add class to empty string", () => {
  const obj: { className: string } = { className: "" };

  const test = addClass(obj, "hello");
  expect(test).toMatchObject({className: "hello"});
});

test("add class to string", () => {
  const obj: { className: string } = { className: "hello" };

  const test = addClass(obj, "bye");
  expect(test).toMatchObject({className:"hello bye"});
});

test("add class to string with existed one", () => {
  const obj: { className: string } = { className: "hello" };

  const test = addClass(obj, "hello");
  expect(test).toMatchObject({className:"hello"});
});