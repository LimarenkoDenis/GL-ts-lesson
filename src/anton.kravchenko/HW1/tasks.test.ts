import { cloneDeep } from 'lodash';
import {
  addClassIfNotAlreadyAdded,
  countBy,
  getEmployeeNameWithHighestSalary,
  IDict,
  multiplyNumeric,
  multiplyNumeric___FancyAndTrulyFunctionalVersion,
  sumSalaries,
} from './tasks';

describe('Test HW1 solutions', () => {
  describe('Test test sumSalaries', () => {
    it('must properly calculate salaries from dictionary', () => {
      const salaries = { worker0: 100, worker1: 300, worker2: 250 };
      expect(sumSalaries(salaries)).toBe(650);
    });

    it('must return 0 for an empty dictionary', () => {
      expect(sumSalaries({})).toBe(0);
    });
  });

  describe('test getEmployeeNameWithHighestSalary function', () => {
    it('must return "No employees" for an empty dict', () => {
      expect(getEmployeeNameWithHighestSalary({})).toBe('No employees');
    });
    it('must return a name of the employee with the highest salary', () => {
      const salaries = { worker0: 100, worker1: 300, worker2: 250 };
      expect(getEmployeeNameWithHighestSalary(salaries)).toBe('worker1');
    });
  });

  describe('test multiplyNumeric function', () => {
    it('must return a dict with values multiplied by 2', () => {
      const salaries = { worker0: 100, worker1: 300, worker2: 250 };
      const expected = { worker0: 200, worker1: 600, worker2: 500 };
      expect(multiplyNumeric(salaries)).toEqual(expected);
    });

    it('must return an untouched string in place of value', () => {
      const salaries: IDict<number | string> = {
        worker0: 100,
        worker1: 'invalid',
        worker2: 250,
      };
      const expected = { worker0: 200, worker1: 'invalid', worker2: 500 };
      expect(multiplyNumeric(salaries)).toEqual(expected);
    });

    it('must return an empty dict if the first arg is an empty dict', () => {
      expect(multiplyNumeric({})).toEqual({});
    });

    it(`mustn't mutate passed dictionary`, () => {
      const salaries: IDict<number | string> = {
        worker0: 100,
        worker1: 'invalid',
        worker2: 250,
      };

      let copy = cloneDeep(salaries);
      multiplyNumeric(salaries);
      expect(salaries).toEqual(copy);

      copy = cloneDeep(salaries);
      multiplyNumeric___FancyAndTrulyFunctionalVersion(salaries);
      expect(salaries).toEqual(copy);
    });

    it('multiplyNumeric___FancyAndTrulyFunctionalVersion must works the same as multiplyNumeric', () => {
      const salaries: IDict<number | string> = {
        worker0: 100,
        worker1: 'invalid',
        worker2: 250,
      };
      const expected = {
        worker0: 200,
        worker1: 'invalid',
        worker2: 500,
      };
      expect(
        multiplyNumeric___FancyAndTrulyFunctionalVersion(salaries),
      ).toEqual(expected);

      expect(multiplyNumeric___FancyAndTrulyFunctionalVersion({})).toEqual({});
    });
  });

  describe('test countBy function', () => {
    it.each([
      [1, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      [2, 5, [2, 4, 6, 8, 10]],
      [3, 10, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]],
      [1, 1, [1]],
      [0, 0, [0]],
    ])(
      '.countBy properly generates a range for the following arguments: %i, %i',
      (step: number, till: number, expected: number) =>
        expect(countBy(step, till)).toEqual(expected),
    );
  });

  describe('test addClassIfNotAlreadyAdded function', () => {
    it('must add new class to the list of classes', () => {
      expect(addClassIfNotAlreadyAdded({ className: 'a b c' }, 'd')).toEqual({
        className: 'a b c d',
      });

      expect(
        addClassIfNotAlreadyAdded({ className: '' }, 'the_first_one'),
      ).toEqual({
        className: 'the_first_one',
      });
    });

    it(`mustn't add already existing class names`, () => {
      expect(
        addClassIfNotAlreadyAdded(
          { className: `a'm_already_here` },
          `a'm_already_here`,
        ),
      ).toEqual({
        className: `a'm_already_here`,
      });
    });
  });
});
