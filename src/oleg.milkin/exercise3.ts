interface IMenu {
    width: number,
    height: number,
    title: string
}

var menu: IMenu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (var prop in obj) {
        if(isNumeric(obj[prop])) {
            menu[prop] = obj[prop] * 2;
        }
    }
    return menu;
}

function isNumeric(n): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(multiplyNumeric(menu));
