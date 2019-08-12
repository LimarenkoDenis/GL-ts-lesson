export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const wagesAggregator: (items: { [key: string]: number }) => number = (items: { [key: string]: number }): number => {
    let sum: number = 0;
    Object.keys(items).forEach(itemKey => {
        sum += items[itemKey];
    });
    return sum;
};

export const getMaxKey = (items: { [key: string]: number }): string => {
    let keys: string[] = Object.keys(items);
    let maxKey: string = keys[0];
    keys.forEach(itemKey => {
        maxKey = items[itemKey] > items[maxKey] ? itemKey : maxKey;
    });
    return maxKey;
};

export const multiplyNumeric = (items: { [key: string]: any }): { [key: string]: any } => {
    Object.keys(items).forEach(itemKey => {
        items[itemKey] = isNumeric(items[itemKey]) ? items[itemKey] * 2 : items[itemKey];
    });
    return items;
};

export const addClass = (obj: { [key: string]: string }, className: string): void => {
    if (!obj.hasOwnProperty('className')) return;
    obj.className = obj.className.indexOf(className) >= 0 ? obj.className : obj.className + ' ' + className;
};

export const crazyFunc = (lenth: number, multiples: number): number[] => {
    let arr = [];
    for (let i: number = 1; i <= lenth; i++) {
        arr.push(i * multiples);
    }
    return arr;
};

function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


