/* 
This challenge asks you to take a string composed of only lowercase letters and space characters, for	 example, “hello world” and replace every consonant in the string with the next consonant in the alphabet. So in the above example, the output should be “jemmo xosmf” and you can see that we left every vowel in place and only changed the consonants. You should notice that the last letter changed was from “d” to “f” and not from “d” to “e” because “e” is a vowel.
*/


let consonantReplace = (str) => {
    let passedStr = str.toLowerCase(); // turns all character to lower case
    let replacedConsonant = ""; // variable to hold the new string form

    // array containing all the alphabets in lowercase
    let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ];

    for(i of passedStr) { // looping through the string passed as argument
        
        // condition to run, if the element is a vowel or space
        if( i == "a" || i == "e" || i == "i" || i == "o" || i == "u" || i == " " ) {
            replacedConsonant += i;

        } else if(i == "z"){ // test to see if passedStr item is "z" and assign "b" to replace it
            replacedConsonant += "b";

        } else { // condition to run, if the element is not a vowel or space

            let alphaIndex = alphabets.indexOf(i); // returns the index position of item

            // condition to check if the next alphabet following the passedStr Item is a vowel
             if (alphabets[alphaIndex + 1] == "a" || alphabets[alphaIndex + 1] == "e" || alphabets[alphaIndex + 1] == "i" || alphabets[alphaIndex + 1] == "o" || alphabets[alphaIndex + 1] == "u" ){
                replacedConsonant += alphabets[alphaIndex + 2];
            } else {
                replacedConsonant += alphabets[alphaIndex + 1];
            }

        }
    }
    return replacedConsonant;
}

let myStr = "hello world";
let result = consonantReplace(myStr);
console.log(result);