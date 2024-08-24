function power(num, exponent) {
    if (exponent === 0) return 1;
    return num * power(num, exponent - 1);
}

// checking the resuts
let result = power(2, 1);
result = power(2, 2);
result = power(2, 3);
result = power(2, 4);
result = power(2, 5);
console.log(result);
