/*
Write a function that takes an array of positive integers and calculates the standard deviation of the numbers. The function should return the standard deviation.
*/

let standardDev = (arr) => {

    let sum = 0; // variable to hold the value of the sum of numbers in the array
    let myMean; // variable to hold the value of the mean of numbers in the array
    let newArray = [] // an array to hold the square of each item in the array after subtracting the mean value
    let myVariance = 0; // variable to hold the value of the variance
    let standardDeviation = 0; // initializing standard deviation to zero

    for(i of arr) { // loop to sum up the items in the array
        if(i < 0) {
            return "please enter an array with position integers"
        }

        sum += i;
    }

    myMean = sum/arr.length;

    //subtracting the mean value from each of the item in the array and pushing the value of their square to newArray
    for(i of arr) {
        newArray.push(Math.pow((i - myMean),2));
    }

    // looping through the newArray to sum its value and assign it to myVariance
    for(i of newArray) {
        myVariance += i;
    }

    //dividing myVariance with arr.length, and squaring it to obtain standard deviation
    standardDeviation = Math.sqrt((myVariance/arr.length));
    return standardDeviation.toFixed(3);
}

let myArray = [1,2,3,4];
let result = standardDev(myArray);
console.log(result);