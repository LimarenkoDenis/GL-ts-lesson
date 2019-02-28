export type SalType = {[ key: string ]: number };
export type MNType = { [key: string]: (number | string)};

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);


export const salSum: (sal: SalType) => number 
  = (sal: SalType) =>
  Object.keys(sal).reduce((acc: number, key: string) => acc + sal[key], 0)


export const bigersSal: (sal: SalType) => string | undefined
  = (sal: SalType) => {
    if (Object.keys(sal).length > 0) {
      return Object.keys(sal).find((key) => sal[key] === Math.max.apply(null, Object.values(sal)));
    } else {
        return 'нет сотрудников'
    }
  }

function isNumeric(n: string | number): boolean {
  if (typeof n === 'number') {
    return true;
  }
  return false;
}

export function multiplyNumeric (obj: MNType) : MNType {
  const returnObject: MNType = {};
  for (let key in obj) {
    if (isNumeric(obj[key])) {
      returnObject[key] = obj[key] as number * 2;
    } else {
      returnObject[key] = obj[key];
    }
  }
  return returnObject;
}

export function OfList(n: number, x: number): number[]{
  const returnArr: number[] = [];
  for(let i = 1; i <= x; i++ ){
    returnArr.push(i * n);
  }
  return returnArr;
}

export function addClass(obj: { [key: string]: string }, cls: string): { [key: string]: string } {
  const list = obj.className.split(' ');
  if(list.indexOf(cls) === -1){
    list.push(cls);
    obj.className = list.join(' ');
  }
  return obj;
};
