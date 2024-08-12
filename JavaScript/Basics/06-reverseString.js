const reverseString = (str) => str.split("").reverse().join("");
let result = reverseString("Hello world, How are ya?");
console.log(result);


function reverseStr (str){
    let reversed = ""
    for(let i = str.length-1;i>=0;i--)
        reversed += str[i];
    return reversed;
}
console.log(reverseStr("Sumit Here"));