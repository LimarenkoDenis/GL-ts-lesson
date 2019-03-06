export interface ISalaryEntry {
  [key: string]: number;
}

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const salariesSum: (salaries: ISalaryEntry) => number
  = (salaries: ISalaryEntry): number =>
    Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);

export const highestPaidEmployee: (salaries: ISalaryEntry) => string
  = (salaries: ISalaryEntry): string => {
    let employee: string = 'Нет сотрудников';
    Object.keys(salaries).reduce((acc: number, key: string) => {
      if (acc < salaries[key]) {
        acc = salaries[key];
        employee = key;
      }
      return acc;
    }, 0);
    return employee;
  };

export const multiplyNumeric: (obj: {[key: string]: any}) => {[key: string]: any}
  = (obj: {[key: string]: any}) => {
    const returnObj: {[key: string]: any} = {};
    Object.keys(obj).forEach((key: string) =>
      returnObj[key] = isNumeric(obj[key]) ? obj[key] *= 2 : obj[key]
    );
    return returnObj;
  };

export const countBy: (multiplier: number, size: number) => number[]
  = (multiplier: number, size: number): number[] => {
    const arr: number[] = [];
    for (let i: number = 1; i <= size; i++) {
      arr.push(i * multiplier);
    }
    return arr;
  };

export const addClass: (obj: {className: string}, className: string) => {className: string}
  = (obj: {className: string}, className: string) => {
    const arr: string[] = obj.className.split(' ');
    if (!arr.includes(className)) {
      obj.className += ` ${className}`;
    }
    return obj;
  };

function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
