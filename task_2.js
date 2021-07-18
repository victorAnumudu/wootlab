/* Write a function that accepts a positive integer and determines if it is a prime number. The function should return true if it is a prime number or false if it isn’t. */

let isPrime = (int) => {

    let primeNum = Math.abs(int); //making the parameter an absolute value

    let divisibleNums = []; // an array that holds the value of all the numbers that can divide the integer argument passed without remainder
    
    //looping through from 1 to primeNum to find all the numbers that can divide primeNum
    for(i = 1; i <= primeNum; i++) {
        if ((primeNum % i) == 0) {
            divisibleNums.push(i);
        }
    }

    //if the length of divisibleNums is == 2, then its a prime number, because prime number can only be divided by two numbers
    if (divisibleNums.length == 2) {
        return true;
    } else {
        return false;
    }
}

let result = isPrime(31); // calling the function and passing 31 as an argument
console.log(result);