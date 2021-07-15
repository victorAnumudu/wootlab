/* Write a function that takes an array of positive integers. The function should calculate the sum of all even and odd integers and return an array containing the sums. The first index in the returned array should hold the sum of the even integers and the second index should hold the sum of the odd integers. */

//function that takes an array of positive intergers
let sumFunction = (array) => {
    let evenSum = 0;
    let oddSum = 0;
    
    // for loop to loop through the array
    for(i of array) {

        //returing i to be an absolute value
        i = Math.abs(i);
        if((i % 2) == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    //returing the sum of the even and odd numbers in an array
    return [evenSum, oddSum];
}

let array = [1,2,3,4,5];
let result = sumFunction(array);
console.log(result);