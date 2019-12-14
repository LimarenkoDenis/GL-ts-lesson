export const sum: (...a: number[]) => number
    = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export type SalaryMap = {
    [key: string]: number
};

export function salariesSum(salaries: SalaryMap): number {
    let sum: number = 0;
    Object.keys(salaries).forEach((key: string) => {
        sum += salaries[key];
    });
    return sum;
}

export function whomMaxSalary(salaries: SalaryMap): string {
    let whom: string = "нет сотрудников";
    let max: number = 0;
    Object.keys(salaries).forEach((key: string) => {
        if (salaries[key] > max) {
            max = salaries[key];
            whom = key;
        }
    });
    return whom;
}