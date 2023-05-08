// Decorators wrap a function in another function
// These wrappers "decorate" the original function with new capabilities

// The concept of decorators is not exclusive to Js

// Benefits: D.R.Y and clean code through composition

//Example 1:---------------------------------------------
// using closure to log how many times a function is called
/*
let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const decorator = (fn) => {
  let count = 0;
  return (...args) => {
    console.log("It has been called by", count++);
    return fn(...args);
  };
};

sum = decorator(sum);
console.log(sum);
const ans = sum(2, 3, 4);
console.log(ans);
*/

//Example 2:----------------------------------------------
// check for valid data and number of params

let rectangleArea = (length, width) => length * width;
let circle = (radius) => 3.14 * radius * radius;

const countParams = (fn) => {
  console.log(fn);
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of params passed for ${fn.name}`);
    }
    return fn(...params);
  };
};

const requireIntegers = (fn) => {
  console.log(fn);
  return (...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new Error("Param is not an Integer");
      }
    });
    return fn(...params);
  };
};

// decorating the original function:

/*
Think of this as my original function (i.e rectangleArea) is a gift and I have to to put it inside
box1 (i.e countParams function) then then wrap them inside bigger box say box2 (i.e requireInteger function)
Now in order to take out the gift, I have to first open box2 then box1 then I will get the gift.
*/
// applied first makes it runs last
rectangleArea = countParams(rectangleArea);
// applied last makes it runs first
rectangleArea = requireIntegers(rectangleArea);

console.log(checkintegerAndArea(2, 32));
console.log(checkintegerAndArea(2, 32, 4));
console.log(checkintegerAndArea(2, "hey"));
