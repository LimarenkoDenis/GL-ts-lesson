// import _isEmpty from 'lodash/isEmpty'; // TODO: find solution

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const salariesSum: (salaries: { [key: string]: number }) => number
  = (salaries: { [key: string]: number }) =>
  Object.keys(salaries).reduce((accum: number, key: string) => accum + salaries[key], 0);


export const biggestSalary: (salaries: { [key: string]: number }) => string
  = (salaries: { [key: string]: number }) => {
    let max: number = 0;
    let employee: string = '';
    // if (_.isEmpty(salaries)) { // TODO: fix this
    //   employee = 'нет сотрудников';
    // } else {
      for (const key in salaries) {
        if (salaries.hasOwnProperty(key) && salaries[key] > max) {
          max = salaries[key];
          employee = key;
        }
      }
    // }
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