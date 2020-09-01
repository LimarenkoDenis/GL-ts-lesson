import * as firstHw from './homework';

test('basic', () => {
    expect(firstHw.sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
    expect(firstHw.sum(1, 2)).toBe(3);
});

test('valueSum test', () => {
    expect(firstHw.valueSum(firstHw.salaries)).toBe(650);
});

test('valueSum test', () => {
    expect(firstHw.valueSum({})).toBe(0);
});

test('maxSelary test', () => {
    expect(firstHw.maxSelary(firstHw.salaries)).toBe('Petya');
});

test('maxSelary test', () => {
    expect(firstHw.maxSelary({})).toBe('нет сотрудников');
});

test('multiplyNumeric test', () => {
    expect(firstHw.multiplyNumeric(firstHw.menu)).toEqual({width: 400, height: 600, title: 'My menu'});
});

test('addClass test', () => {
    expect(firstHw.addClass(firstHw.classList, 'new')).toEqual({
        className: 'open menu new'
    });
});

test('countBy test', () => {
    expect(firstHw.countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('countBy test', () => {
    expect(firstHw.countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
});