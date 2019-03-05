export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

  export const sumOfProperties: (arg: {[key:string]:number}) => number =
    (arg: {[key:string]:number}) => Object.keys(arg).reduce((acc: number, cur: string)=> acc + arg[cur], 0);