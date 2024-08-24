function reverseString(string) {
    console.log(string);
    if (string === "") return "";
    // substr goes for one complete iteration and while returing [o]th index is added
    return reverseString(string.substr(1)) + string[0];
}

let result = reverseString("Dum dum digga digga");
console.log(result);

const reverseStr = (str) => {
    return str === "" ? "" : reverseStr(str.substr(1)) + str[0];
};

result = reverseStr("Yum Yum Yum");
console.log(result);
