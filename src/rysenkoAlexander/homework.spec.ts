import 'jest';
import {
    sum,
    sumAllSalaries,
    maxSalary,
    multiplyNumeric,
    countBy,
    addClass,
    ObjStringNumber,
    ObjStringString,
    ObjStrNumOrStr,
} from './homework';

// Пример
describe('sum', () => {
    test('basic', () => {
        expect(sum(1, 2, 3, 4)).toBe(10);
    });
    test('basic again', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

// Вернуть сумму значния ключей, если пусто то 0
describe('function return sum of keys value', () => {
    const salaries: ObjStringNumber = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250,
    };
    test('should return 650', () => {
        expect(sumAllSalaries(salaries)).toBe(650);
    });
    test('should return 0', () => {
        expect(sumAllSalaries({})).toBe(0);
    });
});

//Вернуть сотрудника с максимальной зарплатой, если пусто то никого
describe('function maxSalary', () => {
    const salaries: ObjStringNumber = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250,
    };
    test('should return Петя', () => {
        expect(maxSalary(salaries)).toBe("Петя");
    });
    test(`should return no employee`, () => {
        expect(maxSalary({})).toEqual('no employee');
    });
});

describe('should return multiply object values', () => {
    test('object values', () => {
        const menu: ObjStrNumOrStr = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        const menu2: ObjStrNumOrStr = {
            width: 400,
            height: 600,
            title: "My menu"
        };
        expect(multiplyNumeric(menu)).toEqual(menu2);
    });
});

// Функция с 2-мя аргументами возвращает список длин умноженных на (х), все больше 0, резельтат масив
describe('function countBy', () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const array2 = [2, 4, 6, 8, 10];
    test('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        expect(countBy(1, 10).length).toBe(10);
        expect(countBy(1, 10)).toEqual(array1);
    });
    test('should return [2, 4, 6, 8, 10]', () => {
        expect(countBy(2, 5).length).toBe(5);
        expect(countBy(2, 5)).toEqual(array2);
    });
});

// Функция добавляет в список класс cls и возвращает новый обьект, но только если его там еще нет
describe('add class to object', () => {
    const obj: ObjStringString = {
        className: 'open menu',
    };
    it('add new class', () => {
        expect(addClass(obj, 'new')).toEqual({ className: 'open menu new' })
    });
    it('class already exist', () => {
        expect(addClass(obj, 'open')).toEqual(obj)
    });
    it('add new class', () => {
        expect(addClass(obj, 'me')).toEqual({ className: 'open menu new me' })
    });
});
