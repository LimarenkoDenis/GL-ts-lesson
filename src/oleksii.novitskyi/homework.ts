export class MenuItem {
  public className: string;

  public constructor(className?: string) {
    this.className = className || '';
  }
}

const delimeter: string = ' ';

export function addClass(menuItem: MenuItem, classToAdd: string): void {
  if (!classToAdd || classToAdd.indexOf(' ') > 0) {
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

export function multiplyNumeric(item: object): void {
  const propNameList: string[] = Object.getOwnPropertyNames(item);
  propNameList.forEach(propName => {
    const propValue: object = Reflect.get(item, propName);

    if (isNumeric(propValue)) {
      const parsed: number = parseFloat(propValue.toString());
      Reflect.set(item, propName, parsed * 2);
    }
  });
}

function isNumeric(n: object): boolean {
  const parsed: number = parseFloat(n.toString());
  return !isNaN(parsed) && isFinite(parsed);
}