function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// checking the resuts
for (let i = 1; i <= 10; i++) {
    let result = factorial(i);
    console.log(result);
}
