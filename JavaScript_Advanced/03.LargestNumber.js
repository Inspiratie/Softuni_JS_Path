const largestNumber = (a, b, c) => {
  const arr = new Set([a, b, c]);
  return Math.max(...arr);
}

console.log(largestNumber(1, -111, 161));
console.log(largestNumber(-2, 111, 101));
