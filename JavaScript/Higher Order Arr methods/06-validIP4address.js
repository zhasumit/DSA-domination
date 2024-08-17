// four number spearated by (.) dots each ranging from 0-256
function validIP4Address(str) {
    const octets = str.split(".");
    if (octets.length !== 4) return false;
    return octets.every((num) => num >= 0 && num < 256);
}
    
let result = validIP4Address("1.2.3.4");
console.log(result);
result = validIP4Address("123.45.67.89");
console.log(result);
result = validIP4Address("1.2.3");
console.log(result);
result = validIP4Address("1.2.3.4.5");
console.log(result);
result = validIP4Address("123.456.78.90");
console.log(result);
result = validIP4Address("123.045.067.089");
console.log(result);
