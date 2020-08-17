import { sum, Profile, getEmployeeNameByMaxSalary, multiplyNumeric, Description, addClass } from './homework';

describe("Test Sum function", () => {
    var empoyee: Profile = {};
    var result: number = sum(empoyee);

    test("if employee is empty", () => {
        expect(result).toBe(0);
    });

    var empoyees: Profile = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    var salariesSum: number = sum(empoyees);

    test("sum of salaries", () => {
        expect(salariesSum).toBe(650);
    });
});

describe("Test getEmployeeNameByMaxSalary function", () => {
    var employee: Profile = {};
    var result: string = getEmployeeNameByMaxSalary(employee);

    test(("if employee is empty"), () => {
        expect(result).toBe('нет сотрудников');
    });

    var empoyees: Profile = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 2500
    };
    var SeniorDeveloper: string = getEmployeeNameByMaxSalary(empoyees);

    test("Who is senior?", () => {
        expect(SeniorDeveloper).toBe("Даша");
    });
});

describe("Test 'multiplyNumeric' function", ()=> {
    var property: Description = {};
    var result: Description = {};
    multiplyNumeric(property);

    test(("if property is empty"), () => {
        expect(property).toEqual(result);
    });

    var properties: Description = {
        "Item1": 100,
        "Item2": -234,
        "Item3": 23.4,
        "Item4": 'Item4',
        "Item5": undefined
    };
    var updProperties: Description = {
        "Item1": 200,
        "Item2": -468,
        "Item3": 46.8,
        "Item4": 'Item4',
        "Item5": undefined
    };
    multiplyNumeric(properties);

    test("Double size only numeric properties", () => {
        expect(properties).toEqual(updProperties);
    });
});

describe("Test 'addClass' function", () => {
    var htmlElement: Description = {
        className: ''
    };

    addClass(htmlElement, 'retro');

    test("Add first class to the empty string ", () => {
        expect(htmlElement.className).toEqual('retro');
    });

    var bodyElement: Description = {
        className: "retro metro uno quarto"
    }

    addClass(bodyElement, 'retro');

    test("Add already exsiting class", () => {
        expect(bodyElement.className).toBe('retro metro uno quarto');
    });

    var headElement: Description = {
        className: "retro metro uno quarto"
    }

    addClass(headElement, 'etro');

    test("Add class which is part of another name", () => {
        expect(headElement.className).toBe('retro metro uno quarto etro');
    });
});