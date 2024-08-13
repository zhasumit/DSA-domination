// string that contains an @ and . symbol
function validateEmail(email) {
    // using regex // two forward slashes
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

console.log(validateEmail("sumit@gmail.com"));
console.log(validateEmail("sumit@gmail"));
console.log(validateEmail("sumit@yahooooooo"));
console.log(validateEmail("sumit@fb.com"));








function isEmailValid(email) {
    if (email.indexOf("@") === -1) return false;
    const [local, domain] = email.split("@");
    if (local.length === 0 || domain.length < 3) return false;
    const domainExtension = domain.split(".");
    // domain and subdomains checkup
    if (domainExtension.length < 2 || domainExtension[1] < 2) return false;
    return true;
}

console.log(isEmailValid("sumit@gmail.com"));
console.log(isEmailValid("sumit@gmail"));
console.log(isEmailValid("sumit@yahooooooo"));
console.log(isEmailValid("sumit@fb.com"));

