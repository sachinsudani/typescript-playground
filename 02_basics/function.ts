function addTwoNumbers(a: number, b: number) {
    return "hello";
}

function getUpperCaseString(str: string): string {
    return str.toUpperCase();
}

function getSignUpUser(name: string, email: string, isPaid: boolean) {
    return { name, email, isPaid };
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return { name, email, isPaid };
}

console.log(addTwoNumbers(5, 10)); // returns 15
console.log(getUpperCaseString("hello")); // returns "HELLO"
console.log(getSignUpUser("John Doe", "john@example.com", false)); // returns { name: 'John Doe', email: 'john@example.com', isPaid: false }
console.log(loginUser("Jane Doe", "jane@example.com")); // returns { name: 'Jane Doe', email: 'jane@example.com', isPaid: false }

export { addTwoNumbers, getUpperCaseString };