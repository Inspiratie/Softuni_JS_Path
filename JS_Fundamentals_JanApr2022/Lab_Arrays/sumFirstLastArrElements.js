//Write a function that receives an array of numbers and 
//prints the sum of the first and last element in that array.
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length-1];
}

//console.log(sumFirstLast([20, 30, 40]))


//Write a program, which receives a number and prints the 
//corresponding name of the day of the week (in English).  
//If the number is NOT a valid day, print: "Invalid day!".
function numToDay(num) {
    return num <= 7 && num >= 1 ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][num-1] : 'Invalid day!';
}

//console.log(numToDay(7))

//Write a program, which receives a number n and an array of elements. 
//Your task is to create a new array with n numbers, reverse 
//it and print its elements on a single line, space-separated.
function reverseNewArr(num, arr) {
    return arr.filter((el, i) => i < num).reverse().join(' ');
}

//console.log(reverseNewArr(5, [10, 20, 30, 40, 50]))

//Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it 
//and print its elements on a single line, space-separated.
function addSpacesBetween(arr) {
    return arr.reverse().join(' ');
}
//console.log(addSpacesBetween(['a', 'b', 'c', 'd', 'e']))


/*
Write a program, which receives an array of strings, 
parse them into numbers, and sum only the even numbers.
*/
function sumEvenNums(arr) {
    return arr.filter(el => Number(el)%2 == 0 ? Number(el) : 0).reduce((el1, el2) => el1 + el2)
}

//console.log(sumEvenNums(['3','5','7','9']))



/*
Write a program that calculates the difference between 
the sum of the even and the sum of the odd numbers in an array.
*/
function evenOddSubstr(arr) {
    let sum = 0; 
    arr.map((el, i) => el%2 == 0 ? sum += el : sum -= el); return sum;
}   

//console.log(evenOddSubstr([2, 4, 6, 8, 10]))

/*
Equal Arrays
*/

function arrEquality(arr, arr1) {
    return arr.join().includes(arr1.join()) ? `Arrays are identical. Sum: ${arr.map(Number).reduce((el1, el2) => el1+el2)}` : `Arrays are not identical. Found difference at ${arr.map(Number).map(el => arr1.map(Number).includes(el) ? el : 'x').indexOf('x')} index`
}

//console.log(arrEquality(['1'], ['10']));


/*
Write a program, which receives an array of numbers, and 
condenses them by summing adjacent couples of elements until 
a single number is obtained.
*/
function condenseArray(arr) {
    if (arr.length === 1) {
        console.log(arr[0])
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = Number(arr[i]) + Number(arr[i + 1]);
    }
    arr.pop();
    condenseArray(arr);
}

console.log(condenseArray([2, 10, 3]))