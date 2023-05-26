function flattenObject(obj, parentKey) {
  const flatObj = {};
  function generateFlatObj(obj, parentKey) {
    for (let key in obj) {
      const newKey = parentKey + key;
      if (typeof obj[key] === "object") {
        generateFlatObj(obj[key], newKey + ".");
      } else {
        flatObj[newKey] = obj[key];
      }
    }
  }
  generateFlatObj(obj, parentKey);
  return flatObj;
}

const obj = {
  A: "12",
  B: 23,
  C: {
    D: 25,
    E: {
      F: 26,
    },
    F: [1, 2],
  },
};

console.log(flattenObject(obj, ""));
