export type salary = { [key: string]: number };
export type multypleObj = { [key: string]: number | string};

export const summOfSalary: (salaries: salary) => number
  = (salaries: { [key: string]: number }) =>
  Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);

export function maxOfSalary (salaries: salary): string {
  if (Object.keys(salaries).length === 0) return 'нет сотрудников';
  const maxVal = Math.max(...Object.values(salaries));
  let names = [];
  let less = [];
  for(let key in salaries) {
    if (salaries[key] === maxVal) {
      names.push(key);
    } else if (salaries[key] < maxVal) {
      less.push(key)
    }
  }
  if (less.length === 0) return 'зп одинаковая';
  return names.join(', ');
}



function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function multiplyNumeric(obj: multypleObj): void {
  for(let val in obj) {
    if (isNumeric(obj[val])){
      obj[val] = +obj[val] * 2;
    }
  }
}

export function countBy(delta:number, length: number) {
  let result = [];
  let num = delta;
  for (let i = 0; i < length; i++) {
    result.push(num);
    num += delta;
  }
  return result;
}

export interface ClassListModel {
  className: string;
}

export function addClass(obj:ClassListModel, cls: string) {
  if (cls.trim().split(' ').length !== 1 ) return false;

  const arr = obj.className.split(' ');

  if (arr.indexOf(cls) === -1) {
    arr.push(cls);
    return {className: arr.join(' ')}
  }
  return false
}


