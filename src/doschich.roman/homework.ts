export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

interface ISalariesType {
  [key: string]: number;
}
export interface IMenuType {
  [key: string]: number | string;
}
export interface IClassType {
  [key: string]: string;
}

const salaries: ISalariesType = {
  Вася: 100,
  Даша: 250,
  Петя: 300,
};

const menu: IMenuType = {
  height: 300,
  title: 'My menu',
  width: 200,
};

const element: IClassType = {
  className: 'open   menu    class',
};

calculateSum(salaries);
findMax(salaries);
multiplyNumeric(menu);
countBy(1, 10);
countBy(2, 5);
addClass(element, '  menu');
addClass(element, '   newClass   ');

export function calculateSum(arg: ISalariesType): number {
  const arr: number[] = [];

  for (const i of Object.keys(arg)) {
    const current: number = arg[i];
    arr.push(current);
  }

  const total: number = arr.reduce((amount: number, current: number) => amount + current, 0);
  return total;
}

export function findMax(arg: ISalariesType): string {
  let max: number = 0;
  let name: string = '';

  for (const i of Object.keys(arg)) {
    const current: number = arg[i];

    if (current > max) {
      name = i;
      max = current;
    }
  }

  return name;
}

export function multiplyNumeric(arg: IMenuType): IMenuType {
  /* tslint:disable:no-any */
  function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  for (const i of Object.keys(arg)) {
    if (isNumeric(arg[i])) {
      menu[i] = +arg[i] * 2;
    }
  }

  return menu;
}

export function countBy(a: number, b: number): number[] {
  const arr: number[] = [];

  for (let i: number = 1; i <= b; i++) {
    arr[i - 1] = i * a;
  }

  return arr;
}

export function addClass(obj: IClassType, cls: string): object {
  const arr: string[] = obj.className.split(' ');
  cls = cls.replace(/^\s*/, '').replace(/\s*$/, '');

  for (let i: number = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '') {
      arr.splice(i, 1);
    }
  }

  if (hasClass(obj, cls) !== true) {
    arr.push(cls);
  }

  obj.className = arr.join(' ');
  return obj;
}

function hasClass(obj: IClassType, cls: string): boolean {
  const arr: string[] = obj.className.split(' ');
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === cls) {
      return true;
    }
  }

  return false;
}
