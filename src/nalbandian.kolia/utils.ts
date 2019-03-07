function isNumeric(n: any): n is number | string {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export {
    isNumeric
}