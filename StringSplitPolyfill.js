// String Split polyfill => return the array

String.prototype.split = function (splitChar, limit = this.length) {
  const output = [];
  let count = 0;
  let word = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] === splitChar) {
      output.push(word);
      word = "";
      count++;
      if (count === limit) return output;
    } else {
      word = word + this[i];
    }
  }
  if (word) {
    output.push(word);
  }
  return output;
};

const str = "How are you doing today?";
console.log(str.split(" "));
