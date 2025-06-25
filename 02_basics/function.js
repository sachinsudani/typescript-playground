"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumbers = addTwoNumbers;
exports.getUpperCaseString = getUpperCaseString;
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
console.log(addTwoNumbers(5, 10)); // returns 15
console.log(getUpperCaseString("hello")); // returns "HELLO"
console.log(getSignUpUser("John Doe", "john@example.com", false)); // returns { name: 'John Doe', email: 'john@example.com', isPaid: false }
console.log(loginUser("Jane Doe", "jane@example.com")); // returns { name: 'Jane Doe', email: 'jane@example.com', isPaid: false }
