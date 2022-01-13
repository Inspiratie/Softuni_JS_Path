/*
Write a function that receives a number 
and prints as result that number multiplied by two.
*/
function multiplyByTwo(num) {
    return num * 2;
}

console.log(multiplyByTwo(3))


/*
You will be given 3 parameters – student name (string), 
age (number), and average grade (number). 
Your task is to print all the info about the student 
in the following format: 
`Name: {student name}, Age: {student age}, 
Grade: {student grade}`
*/
function studentInfo(name, age, grade) {
    return `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
}

console.log(studentInfo('Musa', 24, 5));


/*
Write a function that receives a single number and checks 
if the grade is excellent or not. 
If it is, print "Excellent", otherwise print "Not excellent".
*/

function excellentOrNot(grade) {
    return grade >= 5.50 ? 'Excellent' : 'Not excellent';
}

console.log(excellentOrNot(5));


/*
Write a program, which prints the language, that a 
given country speaks. 
You can receive only the following combinations:
English is spoken in England and USA;
Spanish is spoken in Spain, Argentina, and Mexico;
For the others, we should print "unknown";
*/

function countryLanguage(country) {
    return 'England, USA'.includes(country) ? 'English' : 'Spain, Argentina, Mexico'.includes(country) ? 'Spanish' : "unknown";
}

console.log(countryLanguage('Bulgaria'))

/*
Write a program, that takes an integer as a parameter and prints the corresponding month. 
If the number is more than 12 or less than 1 print "Error!"
*/

function numToMonth(num) {
    return num <= 12 ? Intl.DateTimeFormat('en', {month: 'long'}).format(new Date(num.toString())) : 'Error!';
}

console.log(numToMonth(3))

/*
A theatre is doing a ticket sale, but they need a program 
to calculate the price of a single ticket. 
If the given age does not fit one of the categories, 
you should print "Error!".  You can see the prices in the table below:
*/

function ageToPrice(typeDay, age) {
    let isOld = age > 64 && age <= 122; 
    let isMidAge = age > 18 && age <= 64;
    let isKid = age >= 0 && age <= 18;
    let prices = {'Weekday' : ['12$', '18$', '12$'], 'Weekend' : ['15$', '20$', '15$'], 'Holiday' : ['5$', '12$', '10$'] };

    return isOld ? prices[typeDay][2] : isMidAge ? prices[typeDay][1] : isKid ? prices[typeDay][0] : 'Error!';
}

console.log(ageToPrice('Weekend', 10))