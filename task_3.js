/* Write a function that accepts an array of positive integers and returns an array of all prime numbers from the given array. A prime number is a number that is only divisible by 1 and itself. */

//function that takes an array of positive intergers
let primeArray = (array) => {
    let primeNums = []; // array that will contain all the prime numbers

    let divisibleNums = [];
    
    // for loop to loop through the array
    for(i of array) {

        i = Math.abs(i); //returing each value in the array as a positive integer

        //pushing all the numbers from 1 to item value, that can divide each of the items in the array without remainder to divisibleNums
        for(j = 1; j <= i; j++) {
            if ((i % j) == 0) {
                divisibleNums.push(i);
            }
        }

        //pushing the last item of divisibleNums to primeNums, if its length is 2
        if (divisibleNums.length == 2) {
            primeNums.push(divisibleNums[divisibleNums.length-1]);
        }

        divisibleNums = []; // setting back divisibleNums to an empty array
    }

    //returing the sum of the even and odd numbers in an array
    return primeNums;
}

let array = [1,2,3,4,5,7,8,9,97];
let result = primeArray(array);
console.log(result);