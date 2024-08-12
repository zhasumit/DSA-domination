function isPalindrome(str) {
    const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = formattedString.split("").reverse().join("");
    return formattedString === reversedString;
}

// ignore the non-alphanumeric letter
console.log(isPalindrome("MADAM"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("racecars"));







function checkPalindrome(str) {
    // remove non-alphanumberic characters from the string
    str = str.toLowerCase();
    let formattedString = "";
    for (let i = 0; i < str.length; i++)
        if (isAlphaNum(str[i])) formattedString += str[i];

    // reverse the string
    let reversed = "";
    for (let i = formattedString.length - 1; i >= 0; i--)
        reversed += formattedString[i];

    return reversed == formattedString;
}

function isAlphaNum(str) {
    const charCode = str.charCodeAt(0);
    return (
        (charCode >= 48 && charCode <= 57) || // Numbers (0-9)
        (charCode >= 97 && charCode <= 122) // letters (a-z)
    );
}

console.log(checkPalindrome("MADAM"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("racecars"));

