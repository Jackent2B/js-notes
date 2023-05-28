function flattenArray(arr) {
  const flattenArrayAns = [];
  const flattenArrayResult = (arr) => {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flattenArrayResult(element);
      } else {
        flattenArrayAns.push(element);
      }
    });
  };
  flattenArrayResult(arr);
  return flattenArrayAns;
}

const array = [
  [1, [1, 2], [1, 3]],
  [4, 5],
];
console.log(flattenArray(array));
