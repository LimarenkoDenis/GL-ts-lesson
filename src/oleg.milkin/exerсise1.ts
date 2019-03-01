interface ISalariesList {
    [key: string]: number;
}

let salaries: ISalariesList = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};


let counter: number = 0;

for (let key in salaries) {
    counter+=salaries[key];
}

if(salaries) {
    console.log(counter);
}
