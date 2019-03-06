export interface Isalaries {
  [key: string]: number;
}

export const salaries: Isalaries = {
  Вася: 100,
  Петя: 300,
  Даша: 250,
};

//? How not to use any below?
export type Menu = {
  [key: string]: number | string | any;
};

export const menu: Menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

export type ClassName = {
  className: string;
};

export var classNameObj: ClassName = {
  className: 'open menu',
};
