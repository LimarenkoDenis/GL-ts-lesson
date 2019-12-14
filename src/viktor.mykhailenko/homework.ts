export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

interface IMenu {
    width: number;
    height: number;
    title: string;
}

interface ISalaries {
    'Vasya': number;
    'Petya': number;
    'Dasha': number;
}

interface IClassList {
    'className': string;
}

export const salaries: ISalaries = {
    'Vasya': 100,
    'Petya': 300,
    'Dasha': 250
};

export const valueSum: (obj: object) => number = (obj: object) => {
    let result: number = 0;
    if (Object.keys(obj).length > 0) {
        for ( const key in obj) {
            result += obj[key];
        }
        return result;
    }
    return result;
};


export const maxSelary: (obj: object) => string = (obj: object) => {
    let result: string = 'нет сотрудников';
    if (Object.keys(obj).length > 0) {
        const newArray: number[] = [];
        for ( const key in obj) {
            newArray.push(obj[key]);
        }
        const maxValue: number = Math.max(...newArray);
        for ( const key in obj) {
            if (obj[key] === maxValue) {
                result = key;
            }
        }
        return result;
    }
    return result;
};

export const menu: IMenu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export const multiplyNumeric: (obj: object) => void = (obj: object) => {
    for ( const key in obj) {
        (isNumeric(obj[key])) ? obj[key] *= 2 : obj[key] = obj[key];
    }
};


export const countBy: (x: number, y: number) => number[] = (x: number, y: number) => {
    const newArray: number[] = [];
    for (let i: number = 1; i <= y; i++) {
        newArray.push(i * x);
    }
    return newArray;
};

export let classList: IClassList = {
    className: 'open menu'
};

export const addClass: (a: { className: string }, newClass: string)
    => void = (a: { className: string }, newClass: string) => {
    const allClasses: string[] = a.className.split(' ');
    if (allClasses.indexOf(newClass) === -1 ) {
        allClasses.push(newClass);
        a.className = allClasses.join(' ');
    }
};
