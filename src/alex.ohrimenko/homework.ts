const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

// Сумма свойств
const sumSel: (salObj: { [key: string]: number }) => number
    = (salObj: { [key: string]: number }) => Object.values(salObj).reduce((acc: number, val: number) => acc + val, 0);


// Свойство с наибольшим значением
 type salObjType = {
    [key: string]: number
};

 const maxValue: (salObj: salObjType) => string
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

 type valueListType = {
    [key: string]: any
};

 const multiplyNumeric: (valueList: valueListType) => valueListType
    = (valueList: valueListType) => {
    for (const key in valueList) {
        if (isNumeric(valueList[key])) {
            valueList[key] *= 2;
        }
    }
    return valueList;
};


// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
 const countBy: (step: number, length: number) => number[]
    = (step: number, length: number) => {
    const arr: number[] = [];
    for (let i: number = step; i <= step * length; i += step) {
        arr.push(i);
    }
    return arr;
};


// Добавить класс в строку
 type objClassNameType = {
    [key: string]: string
};

 const addClass: (obj: objClassNameType, newClass: string) => string
    = (obj: objClassNameType, newClass: string) => {
    if ( obj.className.indexOf(newClass) === -1 ) {
        obj.className = obj.className + ' ' + newClass;
    }
    return obj.className;
};


export { sum, addClass, countBy, maxValue, multiplyNumeric, sumSel, objClassNameType, salObjType,  valueListType };
