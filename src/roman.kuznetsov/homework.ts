export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const propertySum: (salaries: { [key: string]: number }) => number
    = (salaries: { [key: string]: number }) =>
    Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);

export const maxSalaryEmployee: (salaries: { [key: string]: number }) => string
    = (salaries: { [key: string]: number }) => {
    if (Object.entries(salaries).length === 0 && salaries.constructor === Object) {
        return 'нет сотрудников';
    } else {
        return Object.keys(salaries).reduce((prev: string, cur: string) =>
            salaries[prev] > salaries[cur] ? prev : cur);
    }
};
export type MN = { [key: string]: number | string };

export function multiplyNumeric(obj: MN): MN {
   return Object.keys(obj).reduce((acc: MN, key: string) => {
   const entry: string | number = obj[key];
   if (isNumeric(entry)) {
       return { ...acc, ...{ [key]: (entry as number) * 2 }};
   }
   return { ...acc, ...{ [key]: entry}};
   }, {});
}

function isNumeric(n: string | number): boolean {
    if (typeof n === 'number') {
        return true;
    }
    return false;
}


export class Clazz {
  public constructor(
      public className: string,
  ) {}
}

export function addClass(obj: Clazz, cls: string): Clazz {
    const searchIndex: number = obj.className.search(cls);
    if (searchIndex === -1) {
        const newClassName: string = obj.className + ' ' + cls;
        return new Clazz(newClassName);
    }
    return obj;
}