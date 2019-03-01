// Сумма свойств
export const sum: (salObj: { [key: string]: number }) => number
  = (salObj: { [key: string]: number }) => Object.values(salObj).reduce((acc: number, val: number) => acc + val, 0);


// Свойство с наибольшим значением
export type salObjType = {
  [key: string]: number
}

export const maxValue: (salObj: salObjType) => string
  = (salObj: salObjType) => {
    let max: number = 0;
    let maxName: string = '';

    for (const key in salObj) {
      if (max < salObj[key]) {
        max = salObj[key];
        maxName = key;
      }
    }
    return maxName;
  };


// Умножте численные свойства на 2
function isNumeric(n: any): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export type valueListType = {
  [key: string]: any
};

export const multiplyNumeric: (valueList: valueListType) => valueListType
  = (valueList: valueListType) => {
    for (const key in valueList) {
      if (isNumeric(valueList[key])) {
        valueList[key] *= 2;
      }
    }
    return valueList;
  };


// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
export const countBy: (step: number, length: number) => number[]
  = (step: number, length: number) => {
    const arr: number[] = [];
    for (let i: number = step; i <= step * length; i += step) {
      arr.push(i);
    }
    return arr;
  };


// Добавить класс в строку
export type objClassNameType = {
  [key: string]: string
};

export const addClass: (obj: objClassNameType, newClass: string) => string
  = (obj: objClassNameType, newClass: string) => {
    if ( obj.className.indexOf(newClass) === -1 ) {
      obj.className = obj.className + ' ' + newClass;
    }
    return obj.className;
  };
