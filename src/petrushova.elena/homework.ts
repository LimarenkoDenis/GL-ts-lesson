
export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export interface Employee {
  [key: string]: number;
}

export const salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

export const summ: (obj: Employee) => number = (obj: Employee) => {
  let summ = 0;
  for (let key in obj) {
    summ += obj[key]
  }
  return summ;
}

export const propSumm: (obj: Employee) => number = (obj: Employee) => {
  let summ = 0;
  for (let key in Object.assign(obj)) {
    summ += Object.assign(obj)[key]
  };
  return summ;
}

export const salariesSumm: (obj: Employee) => number =
  (obj: Employee) => Object.keys(obj).reduce((salary: number, key: string) => salary + obj[key], 0);

export function topSalary(obj: Employee): string {

  let max = 0;
  let maxName = "нет сотрудников";

  const arr = Object.entries(obj);

  for (const [name, salary] of arr) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

export type Menu = { [key: string]: number | string };

function isNumeric(n: number | string): boolean {
  if (typeof n === 'number') {
    return true;
  }
  return false;
}

export function multiplyNumeric(obj: Menu): Menu {
  for (let key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] = obj[key] as number * 2;
    }
  }
  return obj;
}

export function countBy(x: number, n: number): number[] {
  let arr = [];
  arr.length = n;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (i + 1) * x;
  }
  return arr;
}

export interface ClassNameList {
  className: string;
}

export function addClass(obj: ClassNameList, name: string): ClassNameList {
  let listOfClassNames = obj.className.split(' ');
  if (listOfClassNames.some(el => el === name.trim())) return obj;
  else {
    obj.className = `${obj.className} ${name.trim()}`.trim();
    return obj;
  }

}


