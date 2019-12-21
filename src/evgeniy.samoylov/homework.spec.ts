import {addClass, SomeClass, sum} from './homework';
import {SalaryMap, salariesSum, whomMaxSalary, Menu, multiplyNumeric, countBy} from "./homework";

test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});

//Сумма свойств
//Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат. Если объект пустой, то результат должен быть 0.
describe('Sum of properties', () => {
    it('Must return 650', () => {
        const salaries: SalaryMap = {
            "Вася": 100,
            "Петя": 300,
            "Даша": 250
        };
        expect(salariesSum(salaries)).toBe(650);
    });
    it('Must return 100', () => {
        const salaries: SalaryMap = {
            "Вася": 0,
            "Петя": 100,
            "Даша": 0
        };
        expect(salariesSum(salaries)).toBe(100);
    });
    it('Must return 0', () => {
        const salaries = {};
        expect(salariesSum(salaries)).toBe(0);
    });
});

//Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
//Если объект пустой, то пусть он выводит «нет сотрудников».
describe('Whom salary is ', () => {
    it('Must return Петя', () => {
        const salaries: SalaryMap = {
            "Вася": 100,
            "Петя": 300,
            "Даша": 250
        };
        expect(whomMaxSalary(salaries)).toBe("Петя");
    });
    it('Must return Даша', () => {
        const salaries: SalaryMap = {
            "Вася": 0,
            "Петя": 100,
            "Даша": 100.1
        };
        expect(whomMaxSalary(salaries)).toBe("Даша");
    });
    it('Must return нет сотрудников', () => {
        const salaries = {};
        expect(whomMaxSalary(salaries)).toBe("нет сотрудников");
    });
});

describe('Multiplying', () => {
    it('Must return Петя', () => {
        const menu: Menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        multiplyNumeric(menu);
        expect(menu.width).toBe(400);
        expect(menu.height).toBe(600);
    });
});

describe('countBy', () => {
    it('Must return [2,4,6,8,10]', () => {
        const n : number = 2;
        const x : number = 5;
        let result = countBy(n, x);
        expect(result).toEqual([2,4,6,8,10]);
    });
    it('Must return null', () => {
        const n : number = -2;
        const x : number = 5;
        let result = countBy(n, x);
        expect(result).toBeNull();
    });
});

describe('countBy', () => {
    it('Must return new class', () => {
        const oldObject : SomeClass = {
            className: "class name"
        }
        let result = addClass(oldObject, "name2");
        const newObject : SomeClass = {
            className: "class name name2"
        }
        expect(result).toEqual(newObject);
    });
});