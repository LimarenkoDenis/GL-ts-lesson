
export type Profile = {
    [key: string]: number
  }
  
export function sum (employees: Profile): number{
    var sum: number = 0;

    Object.values(employees).forEach(salary => {
        if(isNumeric(salary)){
          sum = sum + salary;
        }
    });

    return sum;
  }

export function getEmployeeNameByMaxSalary(employees: Profile): string {
    if (Object.values(employees).length === 0) {
        return 'нет сотрудников';
    }
    return Object.keys(employees).sort(function (a: string, b: string) { return employees[b] - employees[a]; })[0];
  }

  function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

export type Description = {
    [key: string]: any
}
export function multiplyNumeric(menu: Description): void {
       Object.keys(menu).forEach(item => {
            if(isNumeric(menu[item])){
                menu[item] *= 2;
            }
       })
  }


export function addClass(classList: Description, name: string): void {
    if(Object.keys(classList).length !== 0){
        var classes: string[] = classList['className'].split(' ');
        var isIn = false;
        
        classes.forEach((element: string) =>{
            if(element === name){
                isIn = true;
            }
        });
        var space: string = '';
        
      	if(classList['className'].length !== 0){
			space = ' ';
        }
        if (!isIn) {
            classList['className'] += space + name;
        }
    }
  }
