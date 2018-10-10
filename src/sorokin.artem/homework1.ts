export function stepNumber( step: number, countNumeric: number): number[] {
    const list: number[] = [];
    let sum: number = 0;
    let k: number;
    for ( k = 0; k < countNumeric; k++) {
        sum = sum + step;
        list[k] = sum;
    }
    return list;
}

// console.log(stepNumber(2, 5));


interface IObject {
    key:  string;
}

// const obj1: IObject = {
//     key: 'open menu'
// };

export function addNewFeature ( obj: IObject, cls: string): IObject {
    const arr: string[] = obj.key.split(' ');
    for (let i: number = 0; i < arr.length; i++) {
        const str: string = arr[i];
        if (str === cls) {
            return obj;
        }
    }
    arr.push(cls);
    obj.key = arr.join(' ');
    return obj;
}
// console.log(addNewFeature(obj1, 'new'));
// console.log(addNewFeature(obj1, 'open'));
