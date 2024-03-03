function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y !== 0) {
                result = x / y;
            } else {
                result = "Division by zero is not possible";
            }
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = "Unknown operation";
    }
    return result;
}


const x = parseFloat(prompt("Enter the first number:"));
const znak = prompt("Enter the operation sign (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Enter the second number:"));

alert("Result: " + doMath(x, znak, y));
