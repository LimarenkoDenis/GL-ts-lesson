type Salaries = { [key: string]: number };
type pseudoAny = number | string | boolean | object | null;
type multipliedObject = { [key: string]: pseudoAny };
export interface IClassObject {
  className: string;
}

function isNumeric(n: pseudoAny): boolean {
  let isNumericValue: boolean;
  switch (typeof n) {
    case 'number':
      isNumericValue = !isNaN(n as number) && isFinite(n as number);
      break;
    case 'string':
      isNumericValue = !isNaN(parseFloat(n as string));
      break;
    default:
      isNumericValue = false;
  }
  return isNumericValue;
}

export const sumOfSalaries: (salariesObj: Salaries) => number
  = (salariesObj: Salaries) => {
    let sum: number = 0;
    for (const empl in salariesObj) {
      sum += salariesObj[empl];
    }
    return sum;
  };

export function maxSailary(salariesObj: Salaries): string {
  let res: string = '';
  let max: number = 0;
  for (const empl in salariesObj) {
    if (salariesObj[empl] > max) {
      max = salariesObj[empl];
      res = empl;
    } else if (salariesObj[empl] === max) {
      res += `, ${empl}`;
    }
  }
  return res.length ? res : 'нет сотрудников';
}
export function multiplyNumeric(obj: multipliedObject): multipliedObject {
  const resObj: multipliedObject = {};
  for (const item in obj) {
    resObj[item] = isNumeric(obj[item])
      ? (obj[item] as number) * 2
      : obj[item];
  }
  return resObj;
}
export const countBy: (mult: number, length: number) => number[] | boolean
  = (mult: number, length: number) => {
    if (mult < 1 || length < 1) {
      return false;
    }
    const resArr: number[] = [];
    for (let i: number = 1; i <= length; i++) {
      resArr.push(i * mult);
    }
    return resArr;
  };
export function addClass(obj: IClassObject, className: string): IClassObject {
  return obj.className.indexOf(className) === -1
    ? { className: `${obj.className} ${className}` }
    : Object.assign({}, obj);
}