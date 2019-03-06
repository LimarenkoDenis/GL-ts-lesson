// Пример
export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

// Шаблоны
export type ObjStringNumber = { [key: string]: number };
export type ObjStringString = { [key: string]: string };
export type ObjStrNumOrStr = { [key: string]: number | string };

// Вывести сумму всех зарплат, если пусто то 0
export const sumAllSalaries: (salaries: ObjStringNumber) => number
    = (salaries: ObjStringNumber): number =>
    Object.keys(salaries).reduce((value: number, key: string) => value + salaries[key], 0);


// Вывести сотрудника с максимальной зарплатой, если пусто то никого
export function maxSalary (obj: ObjStringNumber): string {
    let empty: string = 'no employee';
    Object.keys(obj).reduce((value: number, key: string) => {
        if (value < obj[key]) {
            value = obj[key];
            empty = key;
        }
        return value;
    }, 0);
    return empty;
}


// Функция multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
export function multiplyNumeric(obj: ObjStrNumOrStr): ObjStrNumOrStr {
    const instance: ObjStrNumOrStr = {};
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            instance[key] = obj[key] as number * 2;
        } else {
            instance[key] = obj[key];
        }
    }
    return instance;
}

function isNumeric(n: (string | number)): boolean {
    return 'string' !== typeof n;
}


// Функция с 2-мя аргументами возвращает список длин умноженных на (х), все больше 0, резельтат масив
export const countBy: (step: number, count: number) => number[] = (step: number, count: number): number[] => {
    if (step < 0 || count < 0) throw new Error('Error');
    const numbers: number[] = [];
  //  let number = 0;
    for (let i = 0, number = 0; i < count; i++) {
        number += step;
        numbers.push(number);
    }
    return numbers;
};


// Функция добавляет в список класс cls и возвращает новый обьект, но только если его там еще нет
export function addClass(obj: ObjStringString, cls: string): ObjStringString {
    const classes = obj.className.split(' ');
    if(classes.indexOf(cls) === -1){
        classes.push(cls);
        obj.className = classes.join(' ');
        return obj;
    }
    return obj;
}
