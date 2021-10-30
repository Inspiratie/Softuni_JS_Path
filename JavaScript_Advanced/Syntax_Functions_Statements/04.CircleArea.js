const circleArea = (r) => {
    if(typeof(r) == 'number') return 3.14*r*r;
    return 'We can not calculate the circle area, because we receive a string.';
}

console.log(circleArea(10));