/*
Receive three numbers and you have to sort them in descending order. 
Print each number on a new line.
*/
function descendingOrderSort(n1, n2, n3) {
    return [n1, n2, n3].sort((el1, el2) => el2 - el1).join('\n')
}

//console.log(descendingOrderSort(2, 1, 3))

/*
Write a function that returns the English name of the last digit of a given number. 
Write a program that receives a number and prints the returned value from this function.
*/
function printLastDigit(num) {
    let digits = { 0: 'null', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
    return digits[num%10];
}

console.log(printLastDigit(519))


/*
Write a JS function that calculates the date of the next day by given year, month, and day.
The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.
The output should be returned as a result of your function.
*/
function nextDayDate(year, month, day) {
    return new Date(year,month-1,day+1).toISOString().slice(0, 10).replace(/-0+/g, '-');
}
//console.log(nextDayDate(2016, 9, 30))

/*
Write a program that reverses a string and 
prints it on the console.
*/
function reversedString(word) {
    return word.split('').reverse().join('')
}

//console.log(reversedString('Hello'))

/*
Write a JS function that calculates the distance between two points by given x and y coordinates. 
The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.
The output should be returned as a result of your function.
*/
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1-y2));
}

console.log(getDistance(2, 4, 5, 0))