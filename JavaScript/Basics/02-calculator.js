function calculator(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        default:
            throw new Error("Invalid operator");
    }
    return -1;
}

let result = calculator(1, 2, "+");
console.log(result);

function calculatorIfs(a, b, op) {
    return op == "+"
        ? a + b
        : op == "-"
        ? a - b
        : op == "*"
        ? a * b
        : op == "/"
        ? a / b
        : op == "%"
        ? a % b
        : -1;
}

result = calculatorIfs(1, 2, "/");
console.log(result);
