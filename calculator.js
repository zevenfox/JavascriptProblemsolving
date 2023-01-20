function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculator(10, 5, add));