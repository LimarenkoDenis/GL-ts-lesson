import { IObjectWithClass, ISalary, IStringNumberObject } from './models';

function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function getSumOfObjectProps(obj: ISalary): number {
    return Object.keys(obj).reduce((memo: number, key: string) => {
        memo += obj[key];
        return memo;
    }, 0);
}

export function getPropertyWithMaxValue(obj: ISalary): string {
    let message: string = 'нет сотрудников';
    Object.keys(obj).reduce((memo: number, key: string) => {
        if (memo < obj[key]) {
            memo = obj[key];
            message = key;
        }
        return memo;
    }, 0);
    return message;
}

export function multiplyNumericProps(obj: IStringNumberObject): void {
    Object.keys(obj).forEach((key: string) => {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    });
}

export function getArrayByStepAndSize(step: number, size: number): number[] {
    const arrayList: number[] = [];
    for (let i: number = 1; i < size + 1; i += 1) {
        arrayList.push(i * step);
    }
    return arrayList;
}

export function addClassToObjectProp(obj: IObjectWithClass, className: string): void {
    const objectHasClass: boolean = obj.className.split(' ').indexOf(className) > -1;
    if (!objectHasClass) {
        obj.className += ` ${className}`;
    }
}
