//import { property } from "lodash";

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export function propertySum(salaries: { [key: string]: number }): number {
  return Object.keys(salaries)
    .map((v) => salaries[v])
    .reduce((prev, current) => prev + current, 0);
}

export function highestSalaryEmployee(salaries: { [key: string]: number }): string {
  let result = Object.keys(salaries)
    .map<[string, number]>((v) => [v, salaries[v]])
    .reduce((acc: [string, number], current: [string, number]) => (acc[1] < current[1]) ? current : acc);
  return result[0];
}

function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export function multiplyNumeric(input: { [key: string]: any }): any {
  let result = {...input}; 
  Object.keys(result).forEach((v) => {
    if (isNumeric(result[v])) {
      result[v] = parseFloat(result[v]) * 2;
    }
  });
  return result;
}

export function countBy(multiplyBy: number, count: number): number[] {
  return Array.from(Array(count).keys()).map((v) => (v + 1) * multiplyBy);
}

export interface IClass {
  className: string;
};

export function addClass(obj: IClass, cls: string): IClass {
  let result = {...obj};
  if (!obj.className.split(' ').includes(cls)) {
    result.className += ` ${cls}`; 
  }
  return result;
}