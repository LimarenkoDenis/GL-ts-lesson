
export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export type SalaryMap = {
    [key: string]: number
};

//Сумма свойств
export function salariesSum(salaries: SalaryMap): number {
    let sum: number = 0;
    Object.keys(salaries).forEach((key: string) => {
        sum += salaries[key];
    });
    return sum;
}

//Свойство с наибольшим значением
export function whomMaxSalary(salaries: SalaryMap): string {
    let whom: string = "нет сотрудников";
    let max: number = 0;
    Object.keys(salaries).forEach((key: string) => {
        if (salaries[key] > max) {
            max = salaries[key];
            whom = key;
        }
    });
    return whom;
}


//Умножьте численные свойства на 2
export type Menu = {
    width: number,
    height: number,
    title: string,
    [key: string]: any;
}

function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

export function multiplyNumeric(menu: Menu): void {
    Object.keys(menu).forEach((key: string) => {
        if (isNumeric(menu[key])) {
            menu[key] *= 2;
        }
    });
}

//Create a function with two arguments that will return a list of length (n) with multiples of (x).
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array (or list in Python, Haskell or Elixir).
//Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
export function countBy(n: number, x: number): number[] | null {
    if (n <= 0 || x <= 1) {
        return null;
    }
    const result: number[] = [];
    for (let i = 1; i <= x; i++) {
        //returnArr.push(i * n);
        result[i-1] = i*n;
    }
    return result;
}

//Добавить класс в строку
export interface SomeClass {
    className: string;
}
export function addClass(obj: SomeClass, newClass: string) : SomeClass {
    const classArray: string[] = obj.className.split(' ');
    for (let i: number = 0; i < classArray.length - 1; i++) {
        if (classArray[i] === newClass) {
            return obj;
        }
    }
    classArray.push(newClass);
    const classString: string = classArray.join(' ');
    obj.className = classString;
    return obj;

}