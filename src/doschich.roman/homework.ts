export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);



interface salariesType {
  [key: string]: number;
}
export interface menuType {
  [key: string]: any;
}
export interface classType {
  [key: string]: string;
}

const salaries: salariesType = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
salaries['Валера'] = 250;

let menu: menuType = {
  width: 200,
  height: 300,
  title: "My menu"
};

let obj: classType = {
  className: 'open   menu    class'
}

calculateSum(salaries);
findMax(salaries);
multiplyNumeric(menu);
countBy(1,10);
countBy(2,5);
addClass(obj, ' menu');
addClass(obj, '  newClass   ');

export function calculateSum(arg: salariesType): number {
  let arr: number[] = [];

  for (let i in arg) {
    let current:number = arg[i];
    arr.push(current);
  }

  const total:number = arr.reduce((sum:number, current:number) => sum + current, 0);
  console.log(`${total} total salary`);
  return total;
};

export function findMax(arg: salariesType): string {
  let max: number = 0;
  let name: string = '';

  for (let i in arg) {
    let current:number = arg[i];

    if (current > max) {
      name = i;
      max = current;
		}
  }

  console.log(`${name} has max salary`);
  return name;
};

export function multiplyNumeric(arg: menuType): menuType {
  const isNumeric = (n: any): boolean => !isNaN(parseFloat(n)) && isFinite(n);

  for (let i in arg) {
    if (isNumeric(arg[i])) menu[i] = arg[i] * 2;
  }

  console.log(menu);
  return menu;
}

export function countBy(a: number, b: number) {
  let arr = [];
  if (a <= 0 || b <= 0) { // sorry :'(
    console.error(`Numbers should be positive and not equals to 0. What we have: a=${a}, b=${b}`);
  }
  for (let i = 1; i <= b; i++) arr[i-1] = i*a;
  console.log(arr);
  return arr;
}

export function addClass(obj: classType, cls: string): object {
  const arr = obj.className.split(' ');
  cls = cls.replace(/^\s*/,'').replace(/\s*$/,'');

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '') arr.splice(i, 1);
  }

  if (hasClass(obj, cls) !== true) arr.push(cls);

  obj.className = arr.join(' ');
  console.log(obj.className);
  return obj;
}

function hasClass(obj: classType, cls: string): boolean {
  const arr = obj.className.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === cls) return true;
  }

  return false;
}