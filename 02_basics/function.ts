function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

function getUpperCaseString(str: string): string {
    return str.toUpperCase();
}

function getSignUpUser(name: string, email: string, isPaid: boolean): { name: string, email: string, isPaid: boolean } {
    return { name, email, isPaid };
}

let loginUser = (name: string, email: string, isPaid: boolean = false): { name: string, email: string, isPaid: boolean } => {
    return { name, email, isPaid };
}

function getValue(value: number): number | string | boolean {
    if (value > 5) {
        return true;
    } else {
        return "200 OK";
    }
}

const getHello = (s: string): string => {
    return "Hello " + s;
}

const heros = ["thor", "spiderman", "ironman"];
const numbers = [1, 2, 3, 4, 5];

heros.map((hero): string => {
    return `Hero is ${hero}`;
});

numbers.map((num): string => {
    return `Number is ${num}`;
});

function consoleError(message: string): void {
    console.error(message);
}

function handleError(message: string): never {
    throw new Error(message);
}

handleError("This is an error message");

// console.log(addTwoNumbers(5, 10)); // returns 15
// console.log(getUpperCaseString("hello")); // returns "HELLO"
// console.log(getSignUpUser("John Doe", "john@example.com", false)); // returns { name: 'John Doe', email: 'john@example.com', isPaid: false }
// console.log(loginUser("Jane Doe", "jane@example.com")); // returns { name: 'Jane Doe', email: 'jane@example.com', isPaid: false }

// console.log(getValue(10)); // returns true
// console.log(getValue(3)); // returns "200 OK"
// console.log(getHello("World")); // returns "Hello World"

export { }; 