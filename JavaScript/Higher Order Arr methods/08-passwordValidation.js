// one uppercse, one lowercase, one digit, one number
function validPassword(str) {
    const charArr = str.split("");
    const hasValidLength = str.length >= 8;
    if (!hasValidLength) return false;

    const hasUpperCase = charArr.some(
        (char) => char === char.toUpperCase() && char !== char.toLowerCase()
    );
    if (!hasUpperCase) return false;

    const hasLowerCase = charArr.some(
        (char) => char !== char.toUpperCase() && char === char.toLowerCase()
    );
    if (!hasLowerCase) return false;

    const hasDigit = charArr.some((char) => !isNaN(parseInt(char, 10)));
    if (!hasDigit) return false;

    return true;
}
let result = validPassword("Abc12345");
console.log(result);
result = validPassword("password123");
console.log(result);
result = validPassword("Pass");
console.log(result);
result = validPassword("HelloWorld");
console.log(result);
