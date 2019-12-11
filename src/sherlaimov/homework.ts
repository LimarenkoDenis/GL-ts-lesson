import { Isalaries, Menu, ClassName } from './dataStubs';

/* Сумма свойств */

export const calculateSalaryTotal: (o: Isalaries) => number = (o: Isalaries) => {
  return (Object as any).values(o).reduce((acc: number, val: number) => acc + val, 0);
};

/* Свойство с наибольшим значением */

export const getUserWithHighestSalary: (o: Isalaries) => number | string = (o: Isalaries) => {
  const allVals: Isalaries[] = (Object as any).entries(o);
  if (allVals.length === 0) return 'нет сотрудников';
  const sorted: Isalaries[] = allVals.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  return sorted[sorted.length - 1][0];
};

/* Умножьте численные свойства на 2 */

export function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const multiplyNumeric: (o: Menu) => void = (o: Menu) => {
  (Object.keys(o) as Array<keyof typeof o>).map(key => {
    if (isNumeric(o[key])) {
      o[key] = o[key] * 2;
    }
  });
};

/* Create a function with two arguments that will return a list of length (n) with multiples of (x). */

export const countBy: (x: number, times: number) => number[] = (x: number, times: number) => {
  let i: number = 1;
  const result: number[] = [];
  while (result.length < times) {
    if (i % x === 0) result.push(i);
    i++;
  }
  return result;
};

/* Добавить класс в строку */

export const addClass: (o: ClassName, nameStr: string) => ClassName = (
  o: ClassName,
  nameStr: string
) => {
  const newObj = { ...o };
  const classArr: string[] = newObj.className.split(' ');

  if (classArr.includes(nameStr) === false) {
    classArr.push(nameStr);
    newObj.className = classArr.join(' ');
  }
  return newObj;
};
