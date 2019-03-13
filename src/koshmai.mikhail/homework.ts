export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export type SimpleObj = { [key: string]: number };
export type SimpleObjStrings = { [key: string]: string };
export interface StringObj { [key: string]: any }

function isNumeric(n:any) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export const totalSum: (sal: SimpleObj) => number = (sal: SimpleObj) => Object.keys(sal).reduce((acc: number, key: string) => acc + sal[key], 0)


export function getMaxValue(obj: SimpleObj): string {
  let message: string = 'нет сотрудников';
  Object.keys(obj).reduce((maxValue: number, key: string) => {
      if (maxValue < obj[key]) {
          maxValue = obj[key];
          message = key;
      }
      return maxValue;
  }, 0);
  return message;
}


export function multiplyNumeric(obj: StringObj): void {
  Object.keys(obj).forEach((key: string) => {
      if (isNumeric(obj[key])) {
          obj[key] *= 2;
      }
  });
}

export function addClass(obj: SimpleObjStrings, cls: string): string {
  const classes: string[] = obj.className.split(' ');
  for (let i: number = 0; i < classes.length - 1; i++) {
    if (classes[i] === cls) {
      return obj.className;
    }
  }
  classes.push(cls.trim());
  const classString: string = classes.join(' ');
  obj.className = classString;
  return obj.className;
}
