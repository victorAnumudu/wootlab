/*
Write a function that takes two parameters, an array and some number. The function should determine whether any three numbers in the array add up to the number. If it does, the function should return the numbers as an array. If it doesn’t, the function should return -1.
Example
Input: [1, 2, 3, 4, 5, 6], 6
Output: [1, 2, 3]
*/

let sumUp = (arr, num) => {
    let sumArr = []; //an array that stores the number that adds up to some number

    for(i = 0; i<arr.length; i++) { // first loop condition to run if any of the items in the array is < some number
        if(arr[i] < num) {

            sumArr.push(arr[i]); // pushing to value of "i" to sumArr

            // removing "i" from the arr items
            arr.splice(arr.indexOf(arr[i]), 1);

            for(i = 0; i<arr.length; i++) { //second loop condition to run if any of the items in the new array is < some number
               if((sumArr[0] + arr[i] < num)) {
                sumArr.push(arr[i]); // pushing to value of "i" to sumArr

                // removing "i" from the arr items
                arr.splice(arr.indexOf(arr[i]), 1);
                
                for(i = 0; i<arr.length; i++) {  // third loop condition to run if any of the items in the new array is < some number
                    if((sumArr[0] + sumArr[1] + arr[i] == num)) {
                        sumArr.push(arr[i]); // pushing to value of "i" to sumArr
                        return sumArr;
                    } else if (i == arr.length-1) { // else condition to return false if all the items in the array is >= some number
                        return -1
                    }
                }

               } else if (i == arr.length-1) { // else condition to return false if all the items in the array is >= some number
                return -1;
               }
            }

        } else if (i == arr.length-1) { // else condition to return false if all the items in the array is >= some number
            return -1;
        }
    }
}

let myarr = [7,6,3,3,1];
let myNum = 7;

let result = sumUp(myarr, myNum);
console.log(result);