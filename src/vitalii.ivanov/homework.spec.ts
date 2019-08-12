import {sum} from './homework';
import {wagesAggregator} from './homework';
import {multiplyNumeric} from './homework';
import {getMaxKey} from './homework';
import {addClass} from './homework';
import {crazyFunc} from './homework';

test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});

test('test wagesAggregator', () => {
    expect(wagesAggregator({
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    })).toBe(650);
});

test('test multiplyNumeric', () => {
    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    multiplyNumeric(menu);

    expect(menu.width).toBe(400);
    expect(menu.height).toBe(600);
    expect(menu.title).toBe(menu.title);
});

test('test getMaxKey', () => {
    expect(getMaxKey({
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    })).toBe("Петя");
});

test('test addClass', () => {
    let test = {
        className: "open"
    };
    addClass(test, 'menu');
    addClass(test, 'new');
    addClass(test, 'new');
    expect(test.className).toBe('open menu new');

    let test_2 = {};
    addClass(test_2, 'test');
    expect(test_2).toEqual({});
});

test('test crazyFunc', () => {
    expect(crazyFunc(6, 2).length).toBe(6);
    expect(crazyFunc(6, 2)).toEqual([2, 4, 6, 8, 10, 12]);
});