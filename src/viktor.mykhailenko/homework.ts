export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

interface IMenu {
    [key: string]: number | string;
}

interface ISalaries {
    [key: string]: number;
}

interface IClassList {
    'className': string;
}

export const salaries: ISalaries = {
    'Vasya': 100,
    'Petya': 300,
    'Dasha': 250
};

export const valueSum: (obj: ISalaries) => number = (obj: ISalaries) => {
    let result: number = 0;
    if (Object.keys(obj).length > 0) {
        for ( const key in obj) {
            result += obj[key];
        }
        return result;
    }
    return result;
};


export const maxSelary: (obj: ISalaries) => string = (obj: ISalaries) => {
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

function isNumeric(n: (number | string)): boolean {
    if (typeof n === 'number') {
        return true;
    }
    return false;
}

export const multiplyNumeric: (obj: IMenu) => void = (obj: IMenu) => {
    for ( const key in obj) {
        isNumeric(obj[key]) ? (obj[key] as number) *= 2 : obj[key] = obj[key];
    }
    return obj;
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

export const addClass: (a: IClassList, newClass: string)
    => void = (a: IClassList, newClass: string) => {
    const allClasses: string[] = a.className.split(' ');
    if (allClasses.indexOf(newClass) === -1 ) {
        allClasses.push(newClass);
        a.className = allClasses.join(' ');
    }
    return a;
};
