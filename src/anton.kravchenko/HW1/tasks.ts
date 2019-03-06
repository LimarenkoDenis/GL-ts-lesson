import { fromPairs, map, maxBy, range, sum, toPairs } from 'lodash';
import R from 'ramda';

interface IDict<T> {
  [key: string]: T;
}

/* T1 */
const sumSalaries = (s: IDict<number>): number => sum(Object.values(s));

/* T2 */
const getEmployeeNameWithHighestSalary = (s: IDict<number>): string => {
  const salaryChampion = maxBy<[string, number]>(
    Object.entries(s),
    ([_, value]) => value,
  );
  return salaryChampion ? salaryChampion[0] : 'No employees';
};

/* T3 */
function isParsableFiniteNumber(n: any): n is number {
  const num = typeof n === 'string' ? parseFloat(n) : n;
  return false === isNaN(num) && isFinite(num) ? num : false;
}

const multiplyNumeric = (d: IDict<string | number>): IDict<string | number> =>
  fromPairs(
    map(toPairs(d), ([k, v]) => [k, isParsableFiniteNumber(v) ? v * 2 : v]),
  );

/* I've spent roughly 2 hours to add types for the following func and while
all those "types" are perfectly valid (at least I believe so),
this makes me think, that the author of 
https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b (highly recommend to read)
is actually right about some "aspects" of strong typing "at scale". */

/* tslint:disable-next-line variable-name */
const multiplyNumeric___FancyAndTrulyFunctionalVersion = R.pipe<
  IDict<number | string>,
  Array<[string, number | string]>,
  Array<[string, number | string]>,
  IDict<number | string>
>(
  R.toPairs,
  (e: Array<[string, number | string]>) =>
    R.map<[string, number | string], [string, number | string]>(
      ([name, salary]) => [
        name,
        isParsableFiniteNumber(salary) ? salary * 2 : salary,
      ],
      e,
    ),
  R.fromPairs,
);

/* T4 */
const countBy = (step: number, till: number) =>
  range(step, till * step + 1, step);

/* T5 */
const addClassIfNotAlreadyAdded = (
  {
    className,
  }: {
    className: string;
  },
  classNameToAdd: string,
): { className: string } => {
  const classNames = className.split(' ');
  return classNames.includes(classNameToAdd)
    ? { className }
    : { className: [...classNames, classNameToAdd].join(' ').trim() };
};

export {
  addClassIfNotAlreadyAdded,
  sumSalaries,
  getEmployeeNameWithHighestSalary,
  multiplyNumeric,
  multiplyNumeric___FancyAndTrulyFunctionalVersion,
  IDict,
  countBy,
};
