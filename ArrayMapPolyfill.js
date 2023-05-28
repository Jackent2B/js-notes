// Polyfill of a Array.map

Array.prototype.map = function (callbackFn) {
  const output = [];
  // Here this will point towards the object(i,e array) calling it.
  this.forEach((element, index) => {
    output.push(callbackFn(element, index));
  });
  return output;
};

const ans = [1, 2, 3, 4, 5].map((x) => x * 5);
console.log(ans);

// Polyfill of a Array.map
//IMPORTANT: This won't work, because `this` refers to global object with arrow functions
// Array.prototype.map = (callbackFn) => {
//   const output = [];
//   this.forEach((element, index) => {
//     output.push(callbackFn(element, index));
//   });
//   return output;
// };

// const ans = [1, 2, 3, 4, 5].map((x) => x * 5);
// console.log(ans);
