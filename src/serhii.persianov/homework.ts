export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export interface IStrNumObj {
  [key: string]: number;
}

export interface IClassNames {
  [key: string]: any;
  className: string;
}

export interface IAnyObject {
  [key: string]: any;
}

export const salariesSum: (a: IStrNumObj) => number = (obj: object) => {
  return sum(...Object.values(obj));
};

export const getHighestSalary: (a: IStrNumObj) => string = (obj: IStrNumObj) => {
  const keys: string[] = Object.keys(obj);
  if (keys.length) {
    const sortedKeys: string[] = keys.sort((a: string, b: string) => obj[b] - obj[a]);
    return sortedKeys[0];
  }
  return 'нет сотрудников';
};

export const multiplyNumeric: (a: IAnyObject) => IAnyObject = (obj: IAnyObject) => {
  const newObj: IAnyObject = { ...obj };
  for (const key in newObj) {
    if (isNumeric(newObj[key])) {
      newObj[key] *= 2;
    }
  }
  return newObj;
};

export const countBy: (a: number, b: number) => number[] = (multiplier: number, length: number) => {
  const arr: number[] = [...Array(length).keys()].slice(1);
  arr.push(length);
  return arr.map((i: number) => i * multiplier);
};

export const addClass: (a: IClassNames, b: string) => IClassNames = (obj: IClassNames, str: string) => {
  const strArr: string[] = obj.className.split(' ');

  if (!strArr.includes(str)) {
    strArr.push(str);
  }

  const resultObject: IClassNames = {
    ...obj,
    className: strArr.join(' ')
  };

  return resultObject;
};
