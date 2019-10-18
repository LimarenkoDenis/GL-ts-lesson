import {
  sumSalaries,
  SalariesMap,
  maxSalaryOwners,
  ObjectWithStringKeys,
  multiplyNumeric,
  countBy,
  ClassName,
  addClass
} from "./homework";

// tests for task #1
const threeSalaries: SalariesMap = {
  Vasya: 100,
  Petya: 300,
  Masha: 250
};
test("Task1: should sum all salaries in salaries map", () => {
  expect(sumSalaries(threeSalaries)).toBe(650);
});

const zeroSalaries: SalariesMap = {};
test("Task1: should return 0 if salaries map is empty", () => {
  expect(sumSalaries(zeroSalaries)).toBe(0);
});

// tests for task #2
const twoMaxSalaries: SalariesMap = {
  Vasya: 100,
  Petya: 300,
  Masha: 250,
  Kolya: 300
};

test("Task2: should return the name of employee with max salary", () => {
  expect(maxSalaryOwners(threeSalaries)).toBe("Petya");
});

test("Task2: should return all names of employees with max salary if there are more than one", () => {
  expect(maxSalaryOwners(twoMaxSalaries)).toBe("Petya,Kolya");
});

test("Task2: should return No employees if the salary map is empty", () => {
  expect(maxSalaryOwners(zeroSalaries)).toBe("No employees");
});

// tests for task #3

const mixedValues: ObjectWithStringKeys = {
  width: 200,
  height: 300,
  title: "My menu"
};

const emptyValues: ObjectWithStringKeys = {};

test("Task3: should multiply all numeric properties by 2", () => {
  multiplyNumeric(mixedValues);
  expect(mixedValues).toEqual({
    width: 400,
    height: 600,
    title: "My menu"
  });
});

test("Task3: should not change anything in empty object", () => {
  multiplyNumeric(emptyValues);
  expect(emptyValues).toEqual({});
});

// tests for task #4
test("Task4: should produce array of length n containing multiples of x", () => {
  expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  expect(countBy(1.5, 2)).toEqual([1.5, 3]);
});

test("Task4: should return empty array if x or n are non-positive or n is non-integer", () => {
  expect(countBy(0, 1)).toEqual([]);
  expect(countBy(1, 0)).toEqual([]);
  expect(countBy(-1, 1)).toEqual([]);
  expect(countBy(1, 1.5)).toEqual([]);
});

// tests for task #5
const classNames: ClassName = {
  className: "open menu"
};

test("Task5: should add a class if it is not in the list, and return a new object", () => {
  const updatedClassNames: ClassName = addClass(classNames, "new");
  expect(updatedClassNames).toEqual({
    className: "open menu new"
  });
  expect(updatedClassNames).not.toBe(classNames);
});

test("Task5: should not change the object if it already has this class", () => {
  const sameClassNames: ClassName = addClass(classNames, "Menu");
  expect(sameClassNames).toEqual({
    className: "open menu"
  });
  expect(sameClassNames).toBe(sameClassNames);
});
