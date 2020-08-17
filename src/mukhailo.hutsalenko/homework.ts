import { ISalary } from "./ISalary";
import { IClassName } from "./IClassName";

export function calculateSalaries(salaries: ISalary): number {
  let totalSalary: number = 0;
  Object.values(salaries).forEach(key => totalSalary += key);
  return totalSalary;
}

export function getToptPaidEmployee(salaries: ISalary): string {
  let topPaidEmployee = Object.keys(salaries).reduce((function(prevEmp, nextEmp){
    let prevEmpSalary = salaries[prevEmp];
    let nextEmpSalary = salaries[nextEmp];

    return prevEmpSalary > nextEmpSalary ? prevEmp : nextEmp
  }), 'нет сотрудников');

  return topPaidEmployee;
}

export function multiplyNumeric(object : any) {
  for (const property in object) {
    if (isNumeric(object[property])) {
      object[property] *= 2;
    }
  }
}

function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export function countBySequence(initialNumber: number, length: number) {
  let array: number[] = [];
  for(let counter = 1; counter < length + 1; counter++) {
    array.push(counter * initialNumber);
  }
  return array;
}

export function addClass(obj: IClassName, cls: string) {
  if( obj.className.split(' ').indexOf(cls) < 0) {
    obj.className += ' ' + cls.trim();
  }
}

var obj = {
  className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
  console.log(obj.className);

