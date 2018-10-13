// types:
type Salaries = {
    [key: string]: number
}

type StringNumberObject = {
    [key: string]: number | string
}

type ClassListHolder = {
    className: string
}


// test data:
const SalaryList: Salaries[] = [
    {},
    {
        "Adam": 100,
        "Brayan": 200,
        "Chad": 270
    },
    {
        "David": 300,
        "Ed": 280,
        "Frank": 350,
        "George": 1000,
        "Henry": 420
    }
];

const SNOList: StringNumberObject[] = [
    {
        width: 400,
        heigth: 600,
        title: 'Main menu'
    },
    {
        top: 20,
        bottom: 15,
        text: 'Hello everybody',
        right: 25,
        left: 25,
        alt: 'Default message'
    }
];

const CountDataList: {base: number, count: number}[] = [
    {base: 1, count: 10},
    {base: 2, count: 5},
    {base: 3.5, count: 7},
];

const CLHList: ClassListHolder[] = [
    { className: 'open menu' },
    { className: 'btn new hidden' },
    { className: 'new menu' }
];
const ClassList: string[] = [
    'new', 'hidden', 'open',  'disabled'
]

// FUNCTIONS:
// sum of salaries:
function sumSalary(salaries: Salaries): number {
    return Object.keys(salaries).reduce( (sum: number, key: string) => sum + salaries[key], 0 );
}

// max salary owner:
function ownerOfMaxSalary(salaries: Salaries): string {
    const DEFAULT: string = "There is no employees";
    const employees: string[] = Object.keys(salaries);
    if (!employees.length) {
        return DEFAULT;
    }
    return Object.keys(salaries).reduce( (owner: string, key: string) => salaries[key] > salaries[owner] ? key : owner );
}

// double numeric properties:
function doubleNumeric(arg: StringNumberObject): void {

    function isNumeric(n: number | string): boolean {
        return !isNaN( parseFloat( <string>n ) ) && isFinite( <number>n );
    }

    Object.keys(arg).forEach( (key: string) => {
        if ( isNumeric( arg[key] ) ) {
            arg[key] = <number>arg[key] * 2;
        }
    } );
}

// list of multiples:
function countBy(base: number, count: number): number[] {
    const times: number[] = [];

    if ( parseInt( '' + count ) === count || count > 0) {
        let multiple = 0;
        for (let i = 0; i < count; i++) {
            multiple += base;
            times.push( multiple );
        }
    }

    return times;
}

// add class to class list:
function addClass(obj: ClassListHolder, className: string): void {
    const list: string[] = obj.className.split(' ');
    if ( !list.includes(className) ) {
        obj.className += ` ${className}`;
    }
}

function addClassAlt(obj: ClassListHolder, className: string): void {
    const regexp = new RegExp(`(?:^|\\s)${className}(?:$|\\s)`);
    if ( !obj.className.match(regexp) ) {
        obj.className += ` ${className}`;
    }
}

// TESTING:
console.log('\n');

// sum of salaries:
console.log('sum of salaries:');
SalaryList.forEach( data => {
    console.log( 'Input:', data );
    console.log( 'Result:', sumSalary(data) );
    console.log('-\n');
} );
console.log('---\n');

// max salary owner:
console.log('max salary owner:');
SalaryList.forEach( data => {
    console.log( 'Input:', data );
    console.log( 'Result:', ownerOfMaxSalary(data) );
    console.log('-\n');
} );
console.log('---\n');

// double numeric properties:
console.log('double numeric properties:');
SNOList.forEach(data => {
    console.log( 'input:', data );
    doubleNumeric(data)
    console.log( 'Result:', data );
    console.log('-\n');
});
console.log('---\n');

// list of multiples:
console.log('list of multiples:');
CountDataList.forEach(data => {
    console.log( 'input:', `${data.base} ${data.count}` );
    console.log( 'Result:', countBy(data.base, data.count) );
    console.log('-\n');
});
console.log('---\n');

// add class to class list:
console.log('add class to class list:');
CLHList.forEach( item => {
    const data: ClassListHolder = Object.assign( {}, item );
    ClassList.forEach ( className => {
        console.log( 'input:', data, `'${className}'` );
        addClass( data, className )
        console.log( 'Result:', data );
        console.log('-\n');
    } );
    console.log('\n');
} );
console.log('---\n');

CLHList.forEach( item => {
    const data: ClassListHolder = Object.assign( {}, item );
    ClassList.forEach ( className => {
        console.log( 'input:', data, `'${className}'` );
        addClassAlt( data, className )
        console.log( 'Result:', data );
        console.log('-\n');
    } );
    console.log('\n');
} );
console.log('---\n');
