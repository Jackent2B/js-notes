// Polyfill of a filter function
Array.prototype.filter = function (callbackFun) {
  const output = [];
  this.forEach((el) => {
    if (callbackFun(el)) output.push(el);
  });
  return output;
};

// return even numbers
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => x % 2));
