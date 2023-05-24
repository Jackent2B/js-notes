const arr = [2, 4, 5, 6, 7];

// .map() runs over an array and returns a new array

// const double = (i) => i * 2;
function double(i) {
  return i * 2;
}

function triple(i) {
  return i * 3;
}

function binaryOfNumber(i) {
  return i.toString(2);
}

const outputDouble = arr.map(double);
const outputTriple = arr.map(triple);
// const outputBinaryNUmber = arr.map(binaryOfNumber);
const outputBinaryNUmber = arr.map((i) => i.toString(2));

console.log(outputDouble);
console.log(outputTriple);
console.log(outputBinaryNUmber);
