const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"],
    },
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Stapleton"],
  },
};

const getNames = (inputData, resultingArray = []) => {
  Object.keys(inputData).forEach((key) => {
    if (Array.isArray(inputData[key])) {
      inputData[key].forEach((name) => {
        resultingArray.push(name);
      });
    }
    getNames(inputData[key], resultingArray);
  });
  return resultingArray;
};

console.log(getNames(artistsByGenre));
