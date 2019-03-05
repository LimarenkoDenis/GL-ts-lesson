export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const sumOfProperties: (arg: { [key: string]: number }) => number =
  (arg: { [key: string]: number }) => Object.keys(arg).reduce((acc: number, cur: string) => acc + arg[cur], 0);

export const maxSalary: (employees : { [key: string]: number }) => string =
  (employees: { [key: string]: number }) => {
    let emploeeWithMaxSalary: string = "no employees";
    let currSalary: number = 0;
    Object.keys(employees).forEach((prop: string) => {
      if (employees[prop] > currSalary) {
        currSalary = employees[prop];
        emploeeWithMaxSalary = prop;
      }
    })
    return emploeeWithMaxSalary;
  }