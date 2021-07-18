/*
Write a method to count the number of 3s that appear in all the numbers between 0 and n (inclusive). It should return an object containing the count of the number of 3s that appear and an array of the numbers that have 3s in them
Example:
Input: 35
Output: { count: 10, numbers: [3, 13, 23, 30, 31, 32, 33, 34, 35] }
*/


let patternCounter = (num) => {
    
    let myNum = []; // an array that will hold all the numbers that has 3 in it

    for(i = 1; i <= num; i++){ // looping through from 1 to num argument
        let newNum = i.toString();// converting each number in the loop to a string, and assign it to newNum
       
        if(newNum.indexOf(3) != -1) { // searching to see if newNum contains 3 in it, and pushing the number into myNum array
            myNum.push(i);
        }
    }
    return {"count": myNum.length, "numbers": myNum};
}

let myNum = 45;
let result = patternCounter(myNum);
console.log(result);