import { isEmpty } from "lodash";

export type SalariesType = {[ key: string ]: number };
export type MenuObj = {[ key: string ]: number | string };
export type obj = { [key: string]: string };
/* 
  Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат. Если объект пустой, то результат должен быть 0.
*/

export function sumSalaries(salaries: SalariesType) : number{
  let sum: number = 0;
  if(isEmpty(salaries)){
    return 0;
  }
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

/* 
  Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

  Если объект пустой, то пусть он выводит «нет сотрудников».
*/
export function maxSalary(salaries: SalariesType) : string{
  let maxSalary : number = 0;
  let name: string = "";
  
  if(isEmpty(salaries)){
    return "no employees"
  }
    for (let key in salaries) {
      if(maxSalary < salaries[key]) {
        maxSalary = salaries[key];
        name = key;
      }
    }
    return name;
}

/*
  Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
*/

export function isNumeric(n : number | string): boolean {
  return  typeof n === 'number';
}

export function multiplyNumeric (menu: MenuObj) : MenuObj {
  let result: MenuObj = {};
  for (let key in menu) {
    if (isNumeric(menu[key])) {
      result[key] = Number(menu[key])  * 2;
    } else {
      result[key] = menu[key];
    }
  }
  return result;
}

/*
  Create a function with two arguments that will return a list of length (n) with multiples of (x).

  Assume both the given number and the number of times to count will be positive numbers greater than 0.
*/
export function countBy(n: number, x: number): number[]{
  let res: number[] = [];
  for(let i = 1; i <= x; i++ ){
    res.push(i * n);
  }
  return res;
}

/*
  Добавить класс в строку
*/

export function addClassName(obj: obj, cls: string): obj{
  let words = obj.className.split(' ');
  if(!words.includes(cls)){
    words.push(cls)
    obj.className = words.join(' ');
    return obj;
  }
  return obj;
}
