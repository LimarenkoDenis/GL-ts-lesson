// Сумма свойств
// Есть объект salaries с зарплатами. 
// Напишите код, который выведет сумму всех зарплат. 
// Если объект пустой, то результат должен быть 0.

type salariesType = { [key: string]: number };
type objectType = { [key: string]: number | string };

export const sumSalaries: (salaries: salariesType) => number
  = (salaries: salariesType = {}): number =>
    Object.keys(salaries).reduce((sum: number, key: string) => sum + salaries[key], 0);

// Свойство с наибольшим значением
// Есть объект salaries с зарплатами.
// Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

export const maxSalary: (salaries: salariesType) => number | string
  = (salaries: salariesType = {}): number | string => {
    const maxSalary: number = Math.max(...Object.keys(salaries).map(key => salaries[key]), 0);
    return maxSalary === 0 ? 'нет сотрудников' : maxSalary;

  }

// Умножьте численные свойства на 2
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
export const multiplyNumeric: (menu: objectType) => objectType = (menu: objectType = {}): objectType => {
  var copy: objectType = { ...menu };
  Object.keys(menu).forEach(key => isNumeric(copy[key]) ? copy[key] = copy[key] as number * 2 : copy[key]);
  return copy;
}

// Create a function with two arguments that will return a list of length (n) with multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).

export const countBy: (step: number, count: number) => number[] = (step: number, count: number): number[] => {
  if (step < 0 || count < 0) throw new Error('Argument exception.');

  const massNumber: number[] = [];
  let number = 0;

  for (let i = 0; i < count; i++) {
    number = number + step;
    massNumber.push(number);
  }
  return massNumber;
}

// Добавить класс в строку
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
// Создайте функцию addClass(obj, cls), которая добавляет в список класс   
// и возвращает новый обьект, но только если его там еще нет

export const addClass: (obj: { className: string }, addName: string) => { className: string } =
  ({ ...obj }: { className: string }, addName: string): { className: string } => {
    const classes: string[] = obj.className.split(' ');
    if (classes.indexOf(addName.trim()) === -1)
      obj.className = obj.className + ' ' + addName.trim();
    return obj;
  }

  export function addClass2(addName: string):(obj: { className: string }) => { className: string } {
    
    return function(obj): { className: string } {
      return (obj.className.indexOf(addName.trim()) === -1)?
        { className: obj.className+' '+addName.trim() }
        :
        { className: obj.className }
    }
}
 

function isNumeric(n: (string | number)): boolean {
  if ('string' === typeof n) {
    return false;
  }
  return true;
}