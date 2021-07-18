/* Write a function that takes an array of positive integers. The function should calculate the sum of all even and odd integers and return an array containing the sums. The first index in the returned array should hold the sum of the even integers and the second index should hold the sum of the odd integers. */

//function that takes an array of positive intergers
let sumFunction = (array) => {
    let evenSum = 0; // initializing sum of even numbers to zero
    let oddSum = 0; // initializing sum of odd numbers to zero
    let sums = [] // An array to hold the sum of even and odd nmbers
    
    // for loop to loop through the array
    for(i of array) {

        i = Math.abs(i); //returing each item in the array as a positive value
        if((i % 2) == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    sums.push(evenSum, oddSum);  //pushing sum of even and odd into sums array
   
    return sums;
}

let array = [1,2,3,4,5];
let result = sumFunction(array);
console.log(result);