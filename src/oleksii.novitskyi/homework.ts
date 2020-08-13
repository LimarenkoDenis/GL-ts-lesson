export class MenuItem {
  public className: string;

  public constructor(className?: string) {
    this.className = className || '';
  }
}

const delimeter: string = ' ';

export function addClass(menuItem: MenuItem, classToAdd: string): void {
  if (classToAdd.indexOf(' ') > 0) {
    throw new TypeError(classToAdd + ' is incorrect');
  }

  if (menuItem.className.indexOf(classToAdd) >= 0) {
    throw new TypeError(classToAdd + ' already added');
  }

  // seems that we are good to go
  if (!menuItem.className) {
    menuItem.className = classToAdd;
  } else {
    menuItem.className += delimeter + classToAdd;
  }
}