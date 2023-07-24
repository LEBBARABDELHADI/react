/* 
    1. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany",
};

// Donner un nom différent aux constantes

// Créer des constantes par défaut, au cas où les props n'existent pas.

// Combiner un nom différent et des valeurs par défaut.

// Affecter les props d'un objet attendu en paramètre

const nbr = {
  num1: 50,
  num2: 100,
};
function foo({ num1, num2 }) {
  return num1 + num2;
}
console.log(foo(nbr));

/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat", "dog", "mouse", "lion"];

// valeur par défaut et ignorer des valeurs

// affecter le reste d'un tableau

let animal1, animal2;
[animal1, animal2] = animals;
console.log(animal1);

// Fonctionne aussi avec les strings
