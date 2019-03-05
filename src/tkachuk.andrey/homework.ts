/*
Сумма свойств
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат. Если объект пустой, то результат должен быть 0.

Например:
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650 
*/

interface SalaryInfo {
  [key: string]: number
}

export function sumSalaries(salaries: SalaryInfo): number {
  let sum: number = 0;
  Object.keys(salaries).forEach((key: string) => {
    sum += salaries[key];
  });

  return sum;
}


/* 
Свойство с наибольшим значением

Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».

Например:
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"
 */

export const noEmployeesMessage = 'нет сотрудников';

export function maxSalary(salaries: SalaryInfo): number | string {
  if (Object.keys(salaries).length === 0) {
    return noEmployeesMessage;
  }

  let sortedSalaries = Object.values(salaries).sort((prev: number, next: number) => {
    return next - prev;
  });

  return sortedSalaries[0];
}

/* 
Умножьте численные свойства на 2
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
*/

interface GenericObject {
  [key: string]: any
}

function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export function multiplyNumeric(multiProps: GenericObject): GenericObject {
  Object.keys(multiProps).forEach((key: any) => {
    if (isNumeric(multiProps[key])) {
      multiProps[key] *= 2;
    }
  });

  return multiProps;
}

/* 
Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

export function countBy(multiplier: number, length: number): number[] {
  let resultArray = [];
  for (let i = 0; i < length; ) {
    resultArray[i] = ++i*multiplier;
  }

  return resultArray;
}

/* 
Добавить класс в строку
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls и возвращает новый обьект, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
P.S. Ваша функция не должна добавлять лишних пробелов.
*/

interface ClassCollection {
  className: string;
}

class NewCollection implements ClassCollection {
  public className: string;

  constructor(className: string) {
    this.className = className;
  }
}

export function addClass(classCollection: ClassCollection, newClass: string): ClassCollection {
  let trimmedClass = newClass.trim();

  if (classCollection.className.includes(trimmedClass)) {
    return classCollection;
  }

  return new NewCollection(`${classCollection.className} ${newClass}`.trim());
}