import { ISalary } from './interfaces';

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
export const sallarySum: (obj: ISalary) => number
= (obj: ISalary) => Object.keys(obj).reduce((acc: number, key: string) => acc + obj[key], 0);

// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
export const sallaryMax: (obj: ISalary) => string
= (obj: ISalary) => {
  let max: string = 'нет сотрудников';
  let top: number = 0;
  if (Object.keys(obj).length === 0) { return max; }
  Object.keys(obj).forEach(key => {
    if (top < obj[key]) {
      top = obj[key];
      max = key;
    }
  });
  return max;
}