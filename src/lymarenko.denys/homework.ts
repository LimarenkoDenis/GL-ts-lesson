export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);


export const propertySum: (salaries: { [key: string]: number }) => number
  = (salaries: { [key: string]: number }) =>
    Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);


function isNumeric(n: string | number): boolean {
  if (typeof n === 'number') {
    return true;
  }
  return false;
}

export type MN = { [key: string]: number | string };
export function multiplyNumeric(obj: MN): MN {
  return Object.keys(obj).reduce((acc: MN, key: string) => {
    const value: string | number = obj[key];

    if (isNumeric(value)) {
      return { ...acc, ...{ [key]: (value as number) * 2 } };
    }
    return { ...acc, ...{ [key]: value } };
  }, {});
}