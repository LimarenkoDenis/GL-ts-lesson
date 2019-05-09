// Task 1: function sumSalaries: accepts an object with salaries, returns sum of all salaries
export type SalariesMap = {
  [s: string]: number;
};

export const sumSalaries: (salaries: SalariesMap) => number = (
  salaries: SalariesMap
) => {
  return Object.keys(salaries)
    .map((key: string): number => salaries[key])
    .reduce((acc: number, salary: number): number => acc + salary, 0);
};

// Task 2: function maxSalaryOwners: accepts an object with salaries, returns the name(s) of employee(s)
// with max salary, or "No employees" if object is empty

export const maxSalaryOwners: (salaries: SalariesMap) => string = (
  salaries: SalariesMap
) => {
  const values = Object.keys(salaries).map(
    (key: string): number => salaries[key]
  );
  if (!values.length) {
    return "No employees";
  }

  const maxSalary = Math.max.apply(null, values);
  return Object.keys(salaries)
    .filter((key: string): boolean => salaries[key] === maxSalary)
    .join(",");
};

// Task 3: function multiplyNumeric receives an object, and multiplies all its numeric properties by 2
function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export type ObjectWithStringKeys = {
  [s: string]: any;
};

export const multiplyNumeric: (obj: ObjectWithStringKeys) => void = (
  obj: ObjectWithStringKeys
) => {
  Object.keys(obj).forEach(
    (key: any): void => {
      if (isNumeric(obj[key])) {
        obj[key] = obj[key] * 2;
      }
    }
  );
};

// Task 4: function countBy(x,n) that returns an array of length n with multiples of x
export const countBy: (x: number, n: number) => number[] = (
  x: number,
  n: number
) => {
  if (!(x > 0 && n > 0 && Math.floor(n) === n)) {
    return [];
  }
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
};

// Task 5: function addClass that adds a class to className string and returns a new object
export type ClassName = {
  className: string;
};

export const addClass: (obj: ClassName, cls: string) => ClassName = (
  obj: ClassName,
  cls: string
) => {
  const classList: string[] = obj.className.toLowerCase().split(" ");
  const lowerCls: string = cls.toLowerCase();
  if (classList.indexOf(lowerCls) !== -1) {
    return obj;
  }
  classList.push(lowerCls);
  return {
    className: classList.join(" ")
  };
};
