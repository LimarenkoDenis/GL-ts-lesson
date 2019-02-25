"use strict";
exports.__esModule = true;
var homework_1 = require("./homework");
test('basic', function () {
    expect(homework_1.sum(1, 2, 3, 4)).toBe(10);
});
test('basic again', function () {
    expect(homework_1.sum(1, 2)).toBe(3);
});
