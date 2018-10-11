export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

// tslint:disable-next-line:typedef
export const countBy = (multiple: number, length: number): number[] => {
  const countByArr: number[] = [];
  for (let i: number = 0; countByArr.length < length; i++) {
    if (i % multiple === 0 && i > 0) {
      countByArr.push(i);
    }
  }
  return countByArr;
};