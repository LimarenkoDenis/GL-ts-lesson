export type NumericOrString = { [key: string]: (number | string) };
export type CLS = { [key: string]: string };

function isNumeric(n: (string | number)): boolean {
  if ('string' === typeof n) {
    return false;
  }
  return true;
}

export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const objectPropertySum: (employersSalaries: { [key: string]: number }) => number
  = (salaries: { [key: string]: number }) => Object.keys(salaries).reduce((sum: number, currentKey: string) => sum + salaries[currentKey], 0)

export const bigestSalaries: (employersSalaries: { [key: string]: number }) => string
  = (salaries: { [key: string]: number }) => {
    if (Object.keys(salaries).length > 0) {
      return Object.keys(salaries).sort((currentKey: string, nextKey: string) =>
        salaries[nextKey] - salaries[currentKey])[0]
    } else {
      return 'нет сотрудников'
    }
  }

export function multiplyNumeric(object: NumericOrString): NumericOrString {
  const resultObject: NumericOrString = {};
  for (let key in object) {
    if (isNumeric(object[key])) {
      resultObject[key] = object[key] as number * 2;
    } else {
      resultObject[key] = object[key];
    }
  }
  return resultObject;
}

export const arrayGenerator: (a: number, b: number) => number[]
  = (a: number, b: number) => {
    const finallyArray: number[] = [];
    for (let i = 1; i <= b; i++) {
      finallyArray.push(i * a);
    }
    return finallyArray;
  }

export function addClassName(obj: CLS, cls: string): CLS{
  const currentClasses = obj.className.split(' ');
  if(currentClasses.indexOf(cls) === -1){
    currentClasses.push(cls);
    obj.className = currentClasses.join(' ');
    return obj;
  }
  return obj;
}