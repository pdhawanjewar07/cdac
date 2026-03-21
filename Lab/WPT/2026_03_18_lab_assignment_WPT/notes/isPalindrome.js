
function isPalindrome(n) {
    //let s = Math.abs(n).toString();
    let s = "" + n;  //  string
    //let s = n.toString(); // string 
    let len = s.length;

    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - i - 1])
            return false;
    }
    return true;
}






let n = 123221;
if (isPalindrome(n) === true) {
    console.log("True");
}
else {
    console.log("False");
}

//Promise resolved   reject 

let m = new Promise((res, rej) => {
    if (isPalindrome(n) === true)
        res("Palindome")
    else
        rej("Not a Palindrome")


})

m.then((res) => console.log(res))
    .catch((rej) => console.log(rej))

// 














let p = new Promise((res, rej) => {
    if (isPalindrome(n) === true) {
        res("Palindrome")
    } else {
        rej("Not a Palindrome")
    }

})










p.then((res) => console.log(res))
    .catch((rej) => console.log(rej))




async function check(n) {
    let result = '';
    let s = Math.abs(n).toString();
    let len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - i - 1]) {
            result == await 'false';
            return false;
        }
    }
    result = await "true";
    return true;
}

let a = check(121);

a.then((res) => console.log(res))
    .catch(rej => console.log(rej))