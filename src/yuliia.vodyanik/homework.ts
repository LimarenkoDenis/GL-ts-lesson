export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);
export type EmployeeSalaryType = {
    [key: string]: number
  }
export const salariesSum: (salaries: EmployeeSalaryType) => number
  = (salaries: EmployeeSalaryType) =>
    Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);

  export const maxPaidEmployee: (salaries : EmployeeSalaryType) => string
  = (salaries: EmployeeSalaryType) => {
    
    if (Object.keys(salaries).length == 0)
     return 'нет сотрудников';

    let maxSalary: number = 0, maxEmployee: string =' ';

    for (const i in salaries) {
      if (maxSalary <= salaries[i]) {
        maxSalary = salaries[i];
        maxEmployee = i;
      }
    }

    return maxEmployee;
  };

  export type MenuType = {
    [key: string]: any
  }
  export const multiplyIfnumber: (menu : MenuType) => MenuType
  = (menu : MenuType) => {
    
    for (const i in menu) {
      if (isNumeric ( menu[i] )) {
        menu[i] =  menu[i] as number  * 2;
      }
    }
    return menu;
  };

  function isNumeric(n:any):boolean {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  export const countBy: (x: number, n: number) => number[]
  = (x: number, n: number) => {
    const arr: number[] = [];
    let current :number = x;
    for (let i: number = 1; i <= n; i ++) {
          arr.push(current);
          current += current;
    }
    return arr;
  };

  
export type ClassNameType = {
  [key: string]: string
};

export const addClass: (obj: ClassNameType, word: string) => string
  = (obj: ClassNameType, word: string) => {
    if ( obj.className.indexOf(word.trim()) === -1 ) {
      obj.className = obj.className + ' ' + word.trim();
    }
    return obj.className;
  };