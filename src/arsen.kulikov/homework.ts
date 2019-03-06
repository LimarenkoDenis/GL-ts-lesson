export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);


export const getSalariesSum: (obj: {[key:string]: number}) => number
  = (obj: {[key:string]: number}): number => Object.keys(obj).reduce((acc: number, val: string) => acc + obj[val], 0); 


export const getHighestSalary: (obj: {[key:string]: any}) => string 
  = (obj: {[key:string]: number}): string => {
    if (!Object.keys(obj).length) return 'Нет сотрудников';
    
    return Object.keys(obj).reduce((prev, next) => obj[prev] > obj[next] ? prev : next);
  }


function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


export const multiplyNumeric: (obj: {[key:string]: any}) => {[key:string]: any}
  = (obj: {[key:string]: any}): object => {
    for (let key in obj) {
      if (isNumeric(obj[key])) obj[key] = obj[key] * 2;
    }
    return obj;
  }

export const countBy: (a: number, b: number) => number[]
  = (a: number, b: number): number[] => {
    if (a <= 0 || b <= 0) throw new Error('Arguments must be a positive numbers');
    return new Array(b).fill(a).map((el, i) => el * (i+1));
  }

export const addClass: (obj: {[key:string]: any}, a: string) => {[key:string]: any}
  = (obj: {[key:string]: any}, newClass: string) => {
    if (!Object.keys(obj).includes('className')) {
      obj.className = newClass;
      return obj;
    }
    const classList = obj.className.split(' ')

    if (!classList.includes(newClass)) {
      classList.push(newClass);
      obj.className = classList.join(' ');
    }
    
    return obj;
  }




