// corresponding video for the code
// https://www.youtube.com/watch?v=BMUiFMZr7vk

// functions are values in javascript


// they are good for composition


// functions allow us to compose
// which leads to code reuse

// example
var triple = function triple(x) {
  return x * 3
}

var waffle = triple

// sample array animals
var animals = [
  {name : "Fluffy", species: "cat"},
  {name : "Kutta", species : "dog"},
  {name : "Kuttiya", species: "dog"},
  {name : "Tota", species: "parrot"},
  {name : "Billa", species: "cat"},
  {name : "Bhaeriya", species: "wolf"}
]


// stuff about functional programming

// normal non functional way to filter
// using for loop

/*
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species == "dog") {
    dogs.push(animals[i]);
  }
}

Output
[ { name: 'Kutta', species: 'dog' },
  { name: 'Kuttiya', species: 'dog' } ]
*/

var isDog = function (animal) {
  return animal.species == "dog"
}

// better functional way is to use the filter function
var dogs = animals.filter(isDog);
console.log(dogs);
