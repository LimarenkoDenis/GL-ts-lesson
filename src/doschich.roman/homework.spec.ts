import { addClass, calculateSum, countBy, findMax, IClassType, IMenuType, multiplyNumeric, sum } from "./homework";

const salaries: { [key: string]: number } = {
  Вася: 100,
  Даша: 250,
  Петя: 300,
};

const menu: IMenuType = {
  height: 300,
  title: "My menu",
  width: 200,
};

describe("Sum of object properties", () => {
  it("Sum of 1,2,3,4 should return 10", () => {
    const result: number = sum(1, 2, 3, 4);
    expect(result).toBe(10);
  });
});

describe("calculateSum of object properties", () => {
  it("Sum of 100 300 250 should return 650", () => {
    const result: number = calculateSum(salaries);
    expect(result).toBe(650);
  });
});

describe("Find key of max value", () => {
  it("Salaries max value should return Петя", () => {
    const result: string = findMax(salaries);
    expect(result).toBe("Петя");
  });
});

describe("Doubles all numeric values of object", () => {
  it("Should return object with all numeric values multiplied at 2", () => {
    const result: IMenuType = multiplyNumeric(menu);
    expect(result.width).toBe(400);
    expect(result.height).toBe(600);
  });
});

describe("Assume 2 positive numbers greater than 0 will return an array of length (n) with multiples of (x).", () => {
  it("Assume 1, 10 will return [1,2,3,4,5,6,7,8,9,10]", () => {
    const a: number = 1;
    const b: number = 10;
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result: number[] = countBy(a, b);

    expect(a).toBeGreaterThan(0);
    expect(b).toBeGreaterThan(0);
    expect(result.length).toBe(b);
    expect(result).toEqual(
      expect.arrayContaining(expected),
    );
  });
});

describe("Function will add new Class to className if there are no such class exist and remove all spaces", () => {
  it("open   menu    class with addClass('menu') addClass('test') will return 'open menu class test'", () => {
    const obj: IClassType = {
      className: "open   menu    class",
    };
    const expected = "open menu class test";
    addClass(obj, "menu");
    addClass(obj, "test");
    expect(obj.className).toEqual(
      expect.stringContaining(expected),
    );
  });
});
