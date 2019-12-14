import {sum} from './homework';
import {salariesSum, SalaryMap} from "../evgeniy.samoylov/homework";

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