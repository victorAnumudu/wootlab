/* 
Create a password validator function that takes in the password as its argument and returns an integer value you can evaluate to determine the password strength. Using the following validators:
0 -> very weak e.g. a password with only strings
1 -> weak e.g. a password with only numbers
2 -> strong e.g. a password containing strings and numbers
3 -> very strong e.g. a password containing strings, numbers and special characters
*/


let passwordValidator = (password) => {
    let myRegExString = /[a-zA-Z]*/; // Expression for string password only

    let myRegExNum = /[0-9]*/; // Expression for number password only

    let myRegExStringNum = /[a-zA-Z0-9]*/; // Expression for string and number password only

    let myRegExSpe = /[a-zA-Z0-9!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/?]*/; // Expression including string and number and special characters

    if (password == myRegExString.exec(password)) {
        return 0;
    } else if (password == myRegExNum.exec(password)) {
        return 1;
    } else if (password == myRegExStringNum.exec(password)) {
        return 2;
    } else if (password == myRegExSpe.exec(password)) {
        return 3;
    }

}

let password = "@a12";
let result = passwordValidator(password);
console.log(result);