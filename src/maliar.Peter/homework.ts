export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);


// Задача №1. Напишите код, который выведет сумму всех зарплат. 

export type ObjectSalariesType = {[key: string] : number};

export const sumSalaries: (obj: ObjectSalariesType) => number = 
(obj: ObjectSalariesType) => Object.keys(obj).reduce((sum: number, cur: string) => sum + obj[cur], 0);


// Задача №2. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников». 

export function maxSalaries(obj: ObjectSalariesType): string {
    let max: number = -Infinity;
    let namePersonWithMaxSalary: string = '';
    for (let key in obj) {
        if (max <= obj[key]) {max = obj[key]; namePersonWithMaxSalary = key;}
    }
    return (namePersonWithMaxSalary === '') ? "нет сотрудников" : namePersonWithMaxSalary;
}


// Задача №3. Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 
// Судя по заданию функция вносит изменения в объект menu

export function multiplyNumeric(obj: {[key: string]: any}): void {
  function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
  for (let item in obj) {
      if (isNumeric(obj[item])) {obj[item] *= 2;}
  }
}


// Задача №4. Create a function with two arguments that will return a list of length (n) with multiples of (x).
// Return the results as an array (or list in Python, Haskell or Elixir).

export function countBy(step: number,count: number): number[] {
  let resultArr: number[] = [];
  let temp: number = 0;
  for (let i = 0; i < count; i++) {
    temp += step;
    resultArr.push(temp); 
  }
  return resultArr;
}

// Задача №5. Создайте функцию addClass(obj, cls), которая добавляет в список класс cls и возвращает новый обьект.

export function addClass(obj: {className: string},classToAdd: string): {className: string} {
  if (obj.className.split(" ").indexOf(classToAdd.trim()) === -1) {obj.className +=' ' + classToAdd.trim();}
  return obj;
}