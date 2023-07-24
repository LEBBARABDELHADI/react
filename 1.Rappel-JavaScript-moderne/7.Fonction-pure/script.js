/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/

const arr = [1000, 2000, 3000, 4000];

function cunstomFilter(arr, call) {
  const a = [];
  arr.forEach((element) => {
    if (call(element)) {
      a.push(element);
    }
  });
  return a;
}

console.log(cunstomFilter(arr, (item) => item > 1000));

const obj = [
  {
    namee: "Maroc",
    gdp: 13,
  },
  {
    namee: "France",
    gdp: 12,
  },
];
console.log("toto",cunstomFilter(obj, (item) => item.gdp >= 5));
