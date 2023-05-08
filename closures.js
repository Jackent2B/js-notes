// 1.) Normal Example ------------------------------
/*
let x = 10;

function parentFunction() {
  let y = 1;
  function childFunction() {
    x = x + 5;
    y = y + 1;
  }
  childFunction();
  console.log("x is", x);
  console.log("y is", y);
}

parentFunction();
*/

// 2.) Closure Example ---------------------------------
/*
let x = 10;
function parentFunction() {
  let y = 1;
  return function childFunction() {
    x = x + 5;
    y = y + 1;
    console.log("x is", x);
    console.log("y is", y);
  };
}

const result = parentFunction();
result();
*/

// 3.) Closure Example with IIFE --------------------------
/*
let x = 10;
const parentFunction = (() => {
  let y = 1;
  console.log("Initial Render", y);
  return function childFunction() {
    x = x + 5;
    y = y + 1;
    console.log("x is", x);
    console.log("y is", y);
  };
})();

parentFunction();
parentFunction();
parentFunction();
*/

// 4.) Clousre example with IIFE -----------------------------

let x = 10;
const parentFunction = ((num) => {
  let y = num;
  console.log("Initial Render", num);
  return () => {
    y = y - 1;
    if (y > 0) console.log("It is +");
    else if (y < 0) console.log("It is -");
    else console.log("It is 0");
  };
})(3);

parentFunction();
parentFunction();
parentFunction();
parentFunction();
