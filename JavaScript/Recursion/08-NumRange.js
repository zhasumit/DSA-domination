function numberRange(start, end) {
    if (start === end) return [start];
    const numbers = numberRange(start, end - 1);
    numbers.push(end);
    return numbers;
}

let result = numberRange(2, 6);
console.log(result);

result = numberRange(3, 14);
console.log(result);
