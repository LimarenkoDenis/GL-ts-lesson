// salaries sum

export const salariesSum: (salaries: { [key: string]: number }) => number
  = (salaries: { [key: string]: number }) => {
    let sum: number = 0;
    for(let key in salaries) {
      sum += salaries[key];
    }
    return sum;
  }

  

  // max salarie

export const maxSalarieName: (salaries: { [key: string]: number }) => string
= (salaries: { [key: string]: number }) => {
  let name: string = 'нет сотрудников';
  let sum: number = 0;
  for(let key in salaries) {
     if(salaries[key] > sum) {
       name = key;
       sum = salaries[key];
      }
  }
  return name;
}


// multiplyNumeric
export type MNum = { [key: string]: (number | string)};

function isNumeric(n:any) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export function multiplyNumeric (obj: MNum) : MNum {
  const newObject: MNum = {};
    for(let key in obj) {
      if(isNumeric(obj[key])) {
        newObject[key] = obj[key] as number * 2;
      } else {
        newObject[key] = obj[key]
      }
  }
  return newObject;
};


// counterNum

export function counterNum (num: number, length: number): number[]{
  const numArr: number[] = [];
  for(let i = 1; i <= length; i++ ){
    numArr.push(i * num);
  }
  return numArr;
}


//addClass
export function addClass (obj: { [className: string]: string }, cls:string) : { [className: string]: string } {
  const classList = obj.className.split(' ');
  if(classList.indexOf(cls) === -1){
    classList.push(cls);
    obj.className = classList.join(' ');
  }
  return obj;
};
