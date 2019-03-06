export type NumericValues = { [key: string]: number }
export type AnyValues = { [key: string]: any }
export interface IClassName {
  className: string;
}

export const isNumeric = function(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const propertySum = function(values: NumericValues): number {
    let sum: number = 0;
    Object.keys(values).forEach(element => {
      sum += values[element];
    });
    return sum;
  }

export const maxValueProperty = function(values: NumericValues): string {
  let maxValue: number = 0;
  let valueName: string = 'нет сотрудников';
  Object.keys(values).forEach(element => {
    if (values[element] > maxValue) {
      maxValue = values[element];
      valueName = element;
    }
  });
  return valueName;
}

export const multiplyNumeric = function(values: AnyValues, multiplier: number = 2): void {
  for(const key in values) {
    values[key] = isNumeric(values[key]) ? values[key] * multiplier : values[key];
  }
}

export const addClass = function(obj: IClassName, newClass: string): void {
  let currentClasses = obj.className.split(' ');
  if (currentClasses.indexOf(newClass) == -1) {
    currentClasses.push(newClass);
  }
  obj.className = currentClasses.join(' ');
}

export const countBy = function(x: number, n: number): number[] {
  let result: number[] = [];
  for (let ind = 0, initial = x; ind < n; ind++) {
    result.push(initial);
    initial += x;
  }
  return result;
}