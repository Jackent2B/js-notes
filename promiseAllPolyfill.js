/*
The Promise.all() static method takes an iterable of promises as input 
and returns a single Promise. This returned promise fulfills when all of 
the input's promises fulfill (including when an empty iterable is passed), 
with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.
*/

// polyfill for promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 100, "foo");
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
