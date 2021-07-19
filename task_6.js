/*
Write a function that takes two parameters, an array and some number. The function should determine whether any three numbers in the array add up to the number. If it does, the function should return the numbers as an array. If it doesn’t, the function should return -1.
Example
Input: [1, 2, 3, 4, 5, 6], 6
Output: [1, 2, 3]
*/

let sumUp = (arr, num) => {

    let sumArr = []; //an array that stores an array of all the two pairs of values from the array i.e < someNumber parameter passed
    let resultArr = []; // an array that stores all three values to equals num

    for(i = 0; i < arr.length; i++) { //loop to push array of all the two pairs of values from the array i.e < someNumber parameter passed
        for(j = i+1; j < arr.length; j++) {
            if(!(arr[i] + arr[j] >= num)){
                sumArr.push([arr[i],arr[j]]);
            }
        }
    }


    for(i=0; i<sumArr.length; i++){ //looping through the sumArr array
        let sumArrSum = 0;
        let newArray = [...arr]; // asssigning arr to newArray

        for(j of sumArr[i]) { // obtaining the sum of each array in the sumArr array
            sumArrSum += j;
            newArray.splice(newArray.indexOf(j), 1); // removing the items from newArray
        }
        
        for(k of newArray){ // looping through newArray and adding its value to sumArrSum

            if(sumArrSum + k == num) { // if its value is same as num, push all three values into resultArr as an array
                resultArr.push(sumArr[i].concat(k));

                // for(j of sumArr[i]) { // loop through sumArr and remove its value from the arr passed as parameter
                //     arr.splice(arr.indexOf(j), 1);
                // }
            }
        }
    
    }

    // returning resultArr if the length is > 0 or -1 if otherwise
    if(resultArr.length != 0) {
        return resultArr;
    } else {
        return -1;
    }
}

let myarr = [6,5,3,3,4,2,1];
let myNum = 7;

let result = sumUp(myarr, myNum);
console.log(result);