const arr = [5, 1, 3, 2, 6];

// .reduce() runs over an array and then returs single value out of it.

// sum

function findSum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

// max
function findMax(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

// using reduce:
// acc(accumulator) is the result value that reduce will return
// cur is the element of an array
// we can initialise acc by passing a second argument to the reduce function

// sum using reduce
const maxans = arr.reduce(function (acc, cur) {
  acc = acc + cur;
  return acc;
}, 0);

console.log(maxans);

// max using reduce
const sumans = arr.reduce(function (acc, cur) {
  if (cur > acc) acc = cur;
  return acc;
}, -1);

console.log(sumans);
