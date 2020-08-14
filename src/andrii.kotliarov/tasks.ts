
interface IMap<TVal> {
    [key: string]: TVal;
}

type ClassName = {
    className: string;
};

type Obj = {
    [key: string]: number | string
};

const salarySum: (sal: IMap<number>) => number = (sal: IMap<number>) => {
    const sum: number = Object.values(sal).reduce((t: number, c: number) => t + c, 0);
    return sum;
};

const maxSalary: (sal: IMap<number>, def: string) => string = (sal: IMap<number>, def: string): string => {
    const value: [string, number] = Object.entries(sal)
    .sort((s1: [string, number], s2: [string, number]) => s2[1] - s1[1])[0];
    return value && value.length ? value[0] : def;
};

const isNumeric: (n: string | number) => boolean = (n: string | number) => {
    const numb: number = Number(n);
    return !isNaN(numb) && isFinite(numb);
};

const multiplyNumeric: (obj: Obj) => Obj = (obj: Obj) => {
    Object.keys(obj).forEach((key: string) => {
        const val: string | number = obj[key];
        if (isNumeric(val)) {
            let numb: number = Number(val);
            obj[key] = (numb *= 2);
        }
    });
    return obj;
};

const countBy: (step: number, num: number) => number [] = (step: number, num: number) => {
    const result: number [] = [];
    for (let i: number = step; i <= step * num; i += step) {
        result.push(i);
    }
    return result;
};

const addClass: (obj: ClassName, cls: string) => ClassName = (obj: ClassName, cls: string) => {
    if (obj.className.split(' ').indexOf(cls) < 0) {
        obj.className = `${obj.className} ${cls}`;
    }
    return obj;
};

export {
    IMap,
    ClassName,
    salarySum,
    maxSalary,
    countBy,
    multiplyNumeric,
    addClass,
    Obj
};