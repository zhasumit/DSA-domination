function formatPhoneNumber(number) {
    const areaCode = number.slice(0, 3).join("");
    const prefix = number.slice(3, 6).join("");
    const lineNumber = number.slice(6).join("");
    return `(${areaCode}) ${prefix}-${lineNumber}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([2, 3, 1, 4, 5, 9, 3, 4, 4, 1]));








function formatPhoneNum(number) {
    const clean = number.join("");
    return `(${clean.substring(0, 3)}) ${clean.substring(3, 6)}-${clean.substring(6)}`;
}

console.log(formatPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNum([2, 3, 1, 4, 5, 9, 3, 4, 4, 1]));
