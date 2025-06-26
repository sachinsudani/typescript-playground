"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(a, b) {
    return a + b;
}
function getUpperCaseString(str) {
    return str.toUpperCase();
}
function getSignUpUser(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
};
function getValue(value) {
    if (value > 5) {
        return true;
    }
    else {
        return "200 OK";
    }
}
var getHello = function (s) {
    return "Hello " + s;
};
var heros = ["thor", "spiderman", "ironman"];
var numbers = [1, 2, 3, 4, 5];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
numbers.map(function (num) {
    return "Number is ".concat(num);
});
function consoleError(message) {
    console.error(message);
}
function handleError(message) {
    throw new Error(message);
}
handleError("This is an error message");
