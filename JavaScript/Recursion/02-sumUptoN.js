function sumUptoN(num) {
    if (num <= 0) return 0;
    return num + sumUptoN(num - 1);
}

// with every stack unwinding the sum is added
let result = sumUptoN(10);
result = sumUptoN(5);
console.log(result);
