import { addClass, Clazz, countBy, maxSalaryEmployee, MN, multiplyNumeric, propertySum, sum } from './homework';


test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sum of 1, 2 should return 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('should return sum of object properties', () => {
    test('should return 650', () => {
        const salaries: { [key: string]: number } = {
            Вася: 100,
            Петя: 300,
            Даша: 250
        };

        expect(propertySum(salaries)).toBe(650);
    });

    test('should return 6', () => {
        const salaries: { [key: string]: number } = {
            Вася: 1,
            Петя: 2,
            Даша: 3
        };

        expect(propertySum(salaries)).toBe(6);
    });
});


describe('should return name of max salary employee', () => {
    test('should return Петя', () => {
        const salaries: { [key: string]: number } = {
            Вася: 100,
            Петя: 300,
            Даша: 250,
        };

        expect(maxSalaryEmployee(salaries)).toBe('Петя');
    });

    test('should return нет сотрудников', () => {
        const salaries: { [key: string]: number } = {};

        expect(maxSalaryEmployee(salaries)).toBe('нет сотрудников');
    });

    test('only one employee Петя', () => {
        const salaries: { [key: string]: number } = {Петя: 300, };

        expect(maxSalaryEmployee(salaries)).toBe('Петя');
    });
});

describe('should return object properties multiplication to 2', () => {
    test('should return equal expected object', () => {
        const test: MN = {
            Вася: 100,
            Петя: 300,
            Даша: '250',
        };

        const expected: MN = {
            Вася: 200,
            Петя: 600,
            Даша: '250',
        };

        // const result: MN = multiplyNumeric(salaries);
        expect(multiplyNumeric(test)).toEqual(expected);
    });
    it('zero in object properties', () => {
        const test: MN = {
            Вася: 0,
            Петя: 300,
            Даша: '250',
        };
        const result: MN = multiplyNumeric(test);
        expect(result.Вася).toBe(0);
        expect(result.Петя).toBe(600);
        expect(result.Даша).toBe('250');
    });
    it('returns nothing', () => {
        expect(multiplyNumeric({})).toMatchObject({});
    });
});

describe('should return new object and add to propertie className new class if it absent i it', () => {
        test('should return new object', () => {
            const input: Clazz = new Clazz('test 1');
            const result: Clazz = addClass(input, 'added');
            expect(result.className).toBe('test 1 added');
        });

        test('should return same object', () => {
            const input: Clazz = new Clazz('test 1');
            const result: Clazz = addClass(input, 'test');
            expect(input).toMatchObject(result);
        });
    }
);

describe('should create number[] with set step and length', () => {
    test('return equal normal array', () => {
      const result: number[] = countBy(10, 2);
      expect(result).toEqual([10, 20]);
    });
    test('return empty array if step = 0', () => {
        const result: number[] = countBy(0, 2);
        expect(result).toEqual([]);
    });

    test('return empty array if length = 0', () => {
        const result: number[] = countBy(2, 0);
        expect(result).toEqual([]);
    });

    test('return empty array if length = -1', () => {
        const result: number[] = countBy(2, -1);
        expect(result).toEqual([]);
    });

    test('return empty array if step = -1', () => {
        const result: number[] = countBy(-2, 0);
        expect(result).toEqual([]);
    });

    it('working with float step', () => {
        const result: number[] = countBy(1.2, 2);
        expect(result).toEqual([1.2, 2.4]);
    });

    it('working with float length', () => {
        const result: number[] = countBy(1, 2.6);
        expect(result).toEqual([1, 2]);
    });
});