import { type } from "ramda";

export type Profile = {
    [key: string]: number
  }
  
  function sum (empoyees: Profile[]): number{
    var sum: number = 0;

    Object.values(empoyees).forEach(salary => {
        sum += salary;
    });

    return sum;
  }

  function getEmployeeNameByMaxSalary(empoyees: Profile[]) {
    if (Object.values(empoyees).length === 0) {
        return 'нет сотрудников';
    }

    return Object.keys(empoyees).sort(function (a, b) { return empoyees[a] - empoyees[b]; }).pop();
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

export type Description = {
    [key: string]: any
}
  function multiplyNumeric(menu: Description[]) {
       Object.keys(menu).forEach(item => {
            if(isNumeric(menu[item])){
                menu[item] *= 2;
            }
       })
  }


  function addClass(classList: {key: string}, name: string) {
    if(Object.keys(classList).length !== 0){
        var classes = classList['className'].split(' ');
        var isIn = false;
        
        classes.forEach(element =>{
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
