export type SO = { [key: string]: string };
export type NO = { [key: string]: number };
export type NSO = { [key: string]: number | string };

function isEmpty(n: NO): boolean {
  if (Object.keys(n).length === 0) {
    return true;
  }
  return false;
}

function isNumeric(n: string | number): boolean {
  if (typeof n === 'number') {
    return true;
  }
  return false;
}

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const salariesSum: (salaries: NO) => number
  = (salaries: NO) =>
  Object.keys(salaries).reduce((accum: number, key: string) => accum + salaries[key], 0);

export const biggestSalary: (salaries: NO) => string
  = (salaries: NO) => {
    let max: number = 0;
    let employee: string = '';
    if (isEmpty(salaries)) {
      return 'нет сотрудников';
    }
    for (const key in salaries) {
      if (salaries.hasOwnProperty(key) && salaries[key] > max) {
        max = salaries[key];
        employee = key;
      }
    }
    return employee;
  };

export const countBy: (...a: number[]) => number[]
  = (multiple: number, length: number) => {
    const countByArr: number[] = [];
    for (let i: number = 0; countByArr.length < length; i++) {
      i % multiple === 0 && i > 0 && countByArr.push(i);
    }
    return countByArr;
  };

export function addClass(classObj: SO, newClass: string): string {
  const classArray: string[] = classObj.className.split(' ');
  for (let i: number = 0; i < classArray.length - 1; i++) {
    if (classArray[i] === newClass) {
      return classObj.className;
    }
  }
  classArray.push(newClass);
  const classString: string = classArray.join(' ');
  classObj.className = classString;
  return classObj.className;
}

export function multiplyTwo(someObject: NSO): NSO {
  return Object.keys(someObject).reduce((acc: NSO, key: string) => {
    const value: string | number = someObject[key];
    if (isNumeric(value)) {
      return { ...acc, ...{ [key]: (value as number) * 2 } };
    }
    return { ...acc, ...{ [key]: value } };
  }, {});
}