// 1. Arrow Function - Find Maximum
const findMax = (arr) => {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};


// 2. Anonymous Function - Calculate Sum
const calculateSum = function(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};


// 3. Regular Function - Count Odd Numbers
function countOdd(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            count++;
        }
    }

    return count;
};


// Dummy Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Passing array to functions
console.log(`The maximum number is: ${findMax(numbers)}`);
console.log(`The sum of the numbers is: ${calculateSum(numbers)}`);
console.log(`The count of odd numbers is: ${countOdd(numbers)}`);