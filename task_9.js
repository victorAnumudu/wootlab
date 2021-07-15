/*
Write a function that takes a string and determines if the string is a palindrome. A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam, racecar. The function should return “Yes” if the word is a palindrome and “No” if it isn’t. You are not to use the programming language’s existing function or method, if any.
*/



let palindromeFunction = (strings) => {
    let newString = ""; // variable to hold the value of strings passed in reverse order

    for(i = strings.length-1; i>=0; i--) { // Looping through strings in reverse order and concatenating it to newString
        newString += strings[i];
    }
    
    // comparing the strings passed with its reversed order
    if(strings == newString) {
        return "Yes"
    } else {
        return "No"
    }
}

let myString = "madam";
let result = palindromeFunction(myString);
console.log(result);