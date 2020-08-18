
import * as hw from './tasks';

describe('Test suit for homework 1', () => {
    describe('salarySum', () => {
        it('should return sum of provided object properties', () => {
            const salaries: hw.IMap<number> = {
                'Вася': 100,
                'Петя': 300,
                'Даша': 250
            };
            expect(hw.salarySum(salaries)).toBe(650);
        });

        it('should return 0 if no object properties provided', () => {
            const salaries: hw.IMap<number> = {};
            expect(hw.salarySum(salaries)).toBe(0);
        });
    });

    describe('maxSalary', () => {
        it('should return property name with max value for given properties', () => {
            const emp: string = 'Петя';
            const salaries: hw.IMap<number> = {
                'Вася': 100,
                [emp]: 300,
                'Даша': 250
            };
            expect(hw.maxSalary(salaries, '')).toBe(emp);
        });

        it('should return default name for properties not given', () => {
            const salaries: hw.IMap<number> = {};
            const def: string = 'SomeDef';
            expect(hw.maxSalary(salaries, def)).toBe(def);
        });
    });

    describe('multiplyNumeric', () => {
        it('should return property name with max value for given properties', () => {
            const vals: (string | number) [][] = [['width', 200, 400], ['height', 300, 600], ['title', 'My menu', 'My menu']];
            const menu: hw.Obj = {
                [vals[0][0]]: vals[0][1],
                [vals[1][0]]: vals[1][1],
                [vals[2][0]]: vals[2][1]
            };
            hw.multiplyNumeric(menu);

            vals.forEach((kv: (string | number)[]) => {
                expect(menu[kv[0]]).toBe(kv[2]);
            });
        });
    });

    describe('countBy', () => {
        it('should return expected arrays', () => {
            const testCases: { step: number[], expected: number[] }[] = [
                {step: [1, 10], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
                {step: [2, 5], expected: [2, 4, 6, 8, 10]}
            ];
            testCases.forEach((testCase: { step: number[], expected: number[] }) => {
                expect(hw.countBy(testCase.step[0], testCase.step[1])).toEqual(testCase.expected);
            });
        });
    });

    describe('addClass', () => {
        it('should return expected className', () => {
            const intial: string = 'open menu';
            const testCases: { toAdd: string, expected: string }[] = [
                {toAdd: 'new', expected: `${intial} new`},
                {toAdd: 'open', expected: `${intial} new`},
                {toAdd: 'me', expected: `${intial} new me`},
            ];
            const obj: hw.ClassName = {
                className: intial
            };

            testCases.forEach((testCase: { toAdd: string, expected: string }) => {
                expect(hw.addClass(obj, testCase.toAdd).className).toEqual(testCase.expected);
            });
        });
    });
});
