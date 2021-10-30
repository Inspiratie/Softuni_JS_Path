const aggregateElements = ([a, b, c]) => {
    return `${[a, b, c].reduce((x, y) => x + y)}\n${[a, b, c].reduce((x, y) => 1/x + 1/y)}\n${[a, b, c].join('')}`;
}

console.log(aggregateElements([1, 2, 3]));