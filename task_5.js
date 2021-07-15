/* Write a method to replace all spaces in a string with '%20'.
Example
Input: "Mr John Smith" 
Output: "Mr%20John%20Smith" 
*/

let replaceSpace = (string) => {
    let stringArr = string.split(""); // changing the string text to an array
    let replaceTextWith  = "%20";

    // looping through the items in the array and replacing items with space with %20
    for(i = 0; i < stringArr.length; i++) {
        if(stringArr[i] == " ") {
            stringArr[i] = replaceTextWith;
        }
    }
   let changedString = stringArr.join(""); // changing back the replaced array to a string
    return changedString;
}


let myString = "Mr John Smith";
let result = replaceSpace(myString);
console.log(result);