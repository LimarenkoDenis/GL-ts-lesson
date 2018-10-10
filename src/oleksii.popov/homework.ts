export const sum: (...a: number[]) => number
  = (...a: number[]) => a.reduce((acc: number, val: number) => acc + val, 0);

export const addClass: (obj: { className: string }, cls: string) => { className: string } = (obj: { className: string }, cls: string) => {
  if (obj.className.indexOf(cls) === -1) {
    obj.className = obj.className + ' ' + cls;
  }
  return obj;
}
export const camelize: (property: string) => string = (property: string) => {
  let string = property.split('-');
  for (let i = 1; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }

  return string.join('');
}