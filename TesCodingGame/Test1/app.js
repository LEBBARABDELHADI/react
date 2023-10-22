const tot = ["the", "dog", "got", "the", "dog", "got"];

function countFrequencies(words) {
  words.sort();
  const tab = [];
  const frequencyMap = new Map();
  words.forEach((element) => {
    if (frequencyMap.has(element)) {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  });
  frequencyMap.forEach((element, c) => {
    tab.push(frequencyMap.get(c));
  });
  return tab;
}

console.log(countFrequencies(tot));

function isOnOvenPOSTION(params, value) {
  let a = false;
  for (let index = 0; index < params.length; index++) {
    if (params[index] === value && index % 2 === 0) {
      return true;
    }
  }
  return false;
}
var t = [4, 23, 36, 7, 40, 8, 3, 2];
console.log(isOnOvenPOSTION(t, 3));

function helloPropeerties(obj) {
  const tab = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      tab.push(`hello-${key}`);
    }
  }
  return tab;
}
console.log(helloPropeerties({ john: 12, brian: true, doe: "h", fred: false }));
