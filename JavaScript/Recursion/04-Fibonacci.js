// single liner
// const fibonacci = (num) => num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);

function fibonacci(num) {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// checking the resuts
for (let i = 1; i <= 10; i++) {
    let result = fibonacci(i);
    console.log(result);
}
