const arr = [5, 1, 3, 6, 7];

//.filter() runs over an array and returs a filtered array

function oddNumbers(x) {
  return x % 2;
}

// filter odd values

// const oddNumbersValues = arr.filter(oddNumbers);

const oddNumbersValues = arr.filter((i) => i % 2 !== 0);

console.log(oddNumbersValues);
