import { addClass, countBy, getPropsSum, getPropWithHighestValue, multipleNumeric } from './homework';
import { IDefaultObject, IMixedObject } from './homework.interfaces';

const salaries: IDefaultObject = {
    'Vasia': 100,
    'Petia': 300,
    'Dasha': 250
};

const salaries2: IDefaultObject = {
    'Vasia': -5,
    'Petia': -5,
    'Dasha': 30
};

const menu: IMixedObject = {
    width: 200,
    height: 300,
    title: 'My menu'
};

const menu2: IMixedObject = {
    width: 0,
    height: 30,
    title: 'My menu'
};

describe('Sum of object properties', () => {
    it('should return 650', () => {
        expect(getPropsSum(salaries)).toBe(650);
    });

    it('should return 10', () => {
        expect(getPropsSum(salaries2)).toBe(20);
    });

    it('should return 0', () => {
        expect(getPropsSum({})).toBe(0);
    });
});

describe('Property with highest value', () => {
    it('should return Petia', () => {
        expect(getPropWithHighestValue(salaries)).toBe('Petia');
    });

    it('should return Dasha', () => {
        expect(getPropWithHighestValue(salaries2)).toBe('Dasha');
    });

    it('should return no employees', () => {
        expect(getPropWithHighestValue({})).toBe('no employees');
    });
});

describe('Multiply number values', () => {
    it(`should return {
            width: 400,
            height: 600,
            title: 'My menu'
        }`, () => {
        expect(multipleNumeric(menu)).toEqual({
            width: 400,
            height: 600,
            title: 'My menu'
        });
    });

    it(`should return {
        width: 0,
        height: 60,
        title: 'My menu'
    }`, () => {
        expect(multipleNumeric(menu2)).toEqual({
            width: 0,
            height: 60,
            title: 'My menu'
        });
    });
});

describe('Count by', () => {
    it('should return [0]', () => {
        expect(countBy(0, 1)).toEqual([0]);
    });

    it('should return []', () => {
        expect(countBy(0, 0)).toEqual([]);
    });

    it('should return [1,2,3,4,5,6,7,8,9,10]', () => {
        expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should return [2,4,6,8,10]', () => {
        expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
    });
});

describe('Add new class to the existing object property', () => {
    it(`should return {className = 'open menu new'}`, () => {
        expect(addClass({className: 'open menu'}, 'new')).toEqual({
            className: 'open menu new'
        });
    });

    it(`should return {className = 'open menu'}`, () => {
       expect(addClass({className: 'open menu'}, 'open')).toEqual({
            className: 'open menu'
       });
    });

    it(`should return {className = 'open menu me'}`, () => {
        expect(addClass({className: 'open menu'}, 'me')).toEqual({
            className: 'open menu me'
        });
    });
});