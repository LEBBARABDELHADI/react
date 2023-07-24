/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/
const a = [1, 2, 4, 5, 6, { b: 2 }];

console.log(...a);
a[5].b = 22222;
let ab = [...a, 22];
console.log("ab", ab);
console.log("a", a);

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

// Fonctionne également avec les chaînes de caractères

const ob = {
  name: "aamine",
  age: 23,
  frere: [1, 3, 4],
};
console.log(ob);


console.log("modification of ", ob);
ob.age=24
console.log(ob);
const ob2 = {
  ...ob,
  frere: [3],
};

console.log(ob2);
const str = "Le chat saute, le chien court.";
