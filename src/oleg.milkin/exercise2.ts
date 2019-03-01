interface ISalariesList {
    [key: string]: number;
}

var salaries: ISalariesList = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var counter: number = 0;
var salariesKey: string = "";

for (var key in salaries) {
    if(salaries[key] > counter) {
        counter = salaries[key];
        salariesKey = key;
    }
}

if(salaries) {
    console.log(salariesKey);
}
