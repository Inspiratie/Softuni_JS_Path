//COMPETE

/* 
Compete -> ex.7
Write a function, which receives a single number – n, 
and prints a triangle from 1 to n as in the examples.
*/
function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        i = i.toString(); console.log(`${i} `.repeat(i))
    }
}

//console.log(printTriangle(3))


/*
Compete -> ex.8
You will receive a number as a parameter. 
Print the 10 times table for this number. 
See the examples below for more information.
*/
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

//console.log(multiplicationTable(4))


/*
Write a JS function to check whether a year is a leap. Leap years 
are either divisible by 4 but not by 100 or are divisible by 400. 
The output should be following:
*/
function isLeapYear(year) {
    return (year % 4 == 0 || year % 400 == 0) && year != 1900 ? 'yes' : 'no';
}

//console.log(isLeapYear(1900))

/*
Write a function that displays numbers from given 
start to given end and their sum. The input comes as 
two number parameters. 
Print the result like the examples below:
*/
function startEndSumOfNums(start, end) { 
    return `${Array.from({length: end - start + 1}, (i, el) => el + start).join(' ')}\nSum: ${(end - start + 1)/2*(start + end)}`
}

console.log(startEndSumOfNums(0, 26))