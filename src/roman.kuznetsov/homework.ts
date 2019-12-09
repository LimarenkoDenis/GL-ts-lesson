export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const propertySum: (salaries: { [key: string]: number }) => number
    = (salaries: { [key: string]: number }) =>
    Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);

export const maxSalaryEmployee: (salaries: { [key: string]: number }) => string
    = (salaries: { [key: string]: number }) => {
    if (Object.entries(salaries).length === 0 && salaries.constructor === Object) {
        return 'нет сотрудников';
    } else {
        return Object.keys(salaries).reduce((prev: string, cur: string) =>
            salaries[prev] > salaries[cur] ? prev : cur);
    }
};

