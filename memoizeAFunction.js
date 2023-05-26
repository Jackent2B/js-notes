const memoize = (fn) => {
  const cache = {};

  // here we have used spread operator (...) because we can have any number of arguments.
  // and spread operator turns args into an array
  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log(`Fetching results from cache for args ${argsToString}`);
      return cache[argsToString];
    } else {
      console.log(`Computing results for args ${argsToString}`);
      console.log("Here This object is", this);
      console.log(args);
      // here we used apply because args is a type of array
      // and apply takes argumnets as an array
      const result = fn.apply(this, args);
      cache[argsToString] = result;
      return result;
    }
  };
};

// const addThreeNumbers = (a, b, c) => a + b + c;
// const memoizedAddThreeNumbers = memoize(addThreeNumbers);
// console.log(memoizedAddThreeNumbers(1, 2, 3));
// console.log(memoizedAddThreeNumbers(1, 2, 3));

// const multiplyTwoNUmbers = (a, b) => a * b;
// const memoizedMultiplyTwoNUmbers = memoize(multiplyTwoNUmbers);
// console.log(memoizedMultiplyTwoNUmbers(4, 5));
// console.log(memoizedMultiplyTwoNUmbers(4, 5));

const factorial = memoize((x) => {
  if (x == 0) return 1;
  else {
    return x * factorial(x - 1);
  }
});
console.log(factorial(5));
console.log(factorial(6));
