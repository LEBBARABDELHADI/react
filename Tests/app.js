console.log("test");

class Car {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }
}

function comparefu(c1, c2) {
  if (c1.order < c2.order) {
    return -1;
  } else {
    return 1;
  }
  return 0;
}

const listOfCar = [new Car("mer", 1000), new Car("meri", 200)];

listOfCar.sort(comparefu);

for (const iterator of listOfCar) {
  console.log(iterator.name);
}

class MyClass {
  constructor(value) {
    this.value = value;
  }
}

// Liste de classes non triée
const myList = [new MyClass(3), new MyClass(1), new MyClass(2)];

// Fonction de comparaison
function compareClasses(a, b) {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
}

// Tri de la liste
myList.sort(compareClasses);

// Affichage des classes triées
myList.forEach((item) => {
  console.log(item.value);
});
