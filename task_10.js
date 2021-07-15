/*
Write a function that takes a string. The function should calculate the character in the string with the most occurrences and return that character and the total occurrence of the character in a map or JSON object. If more than one character has the most occurrence, return those characters and total occurrences of each as an array of maps or JSON objects.
Example
Input: “afhuusnimr443o0sggg”
Output: “g”
*/

let stringOccurence = (string) => {
    newString = string.toLowerCase(); // converting all the string to lower case letters, inorder to make the string case insensitive
    let alphabetOccurence = {}; // an object that will hold each alphabet and the number of occurences
    let highestOccuredAlphabets = {}; // an object that will hold alphabets with highest occurence
    let minOccurence = 0; // initial value for comparing with each alphabetOccurence object value


    /* looping through each element in the string, checks if alphabetOccurence object has such element and add 1 to its value, else creates the element as a property of the object and assign 1 to it */
    for(i = 0; i < newString.length; i++) {
        if(alphabetOccurence[newString[i]]) {
            alphabetOccurence[newString[i]] += Number(1);
        } else {
            alphabetOccurence[newString[i]] = Number(1);
        }
    }

    /* looping through each element in the alphabetOccurence object, and usings its value to replace the value of minOccurence if it is >= minOccurence value */
    for(i in alphabetOccurence) {

        if(alphabetOccurence[i] >= minOccurence){
            minOccurence = alphabetOccurence[i]
        }

    }


     /* looping through each element in the alphabetOccurence object, adds its value to highestOccuredAlphabets if it has same value as minOccurence */
    for(i in alphabetOccurence) {

        if(alphabetOccurence[i] == minOccurence){
            highestOccuredAlphabets[i] = minOccurence;
        }

    }

    return JSON.stringify(highestOccuredAlphabets); // returning the value of highestOccuredAlphabets object as a json object
}

let myString = "peter";
let result = stringOccurence(myString);
console.log(result);