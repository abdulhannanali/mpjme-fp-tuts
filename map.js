// map functions
// corresponding video link: https://www.youtube.com/watch?v=BMUiFMZr7vk

var animals = [
  {name : "Fluffy", species: "cat"},
  {name : "Kutta", species : "dog"},
  {name : "Kuttiya", species: "dog"},
  {name : "Tota", species: "parrot"},
  {name : "Billa", species: "cat"},
  {name : "Bhaeriya", species: "wolf"},
  {name : "Corgi", species: "dog"},
  {name : "nemo", species: "fish"},
  {name : "mooooOOOooooOOOOo", species: "cow"}
]

// less code almost always mean less bugs
// map can also be used to create entirely different objects
var names = animals.map(function (animal) {
  return animal.name
})


// functional way rewritten using arrow function for even lesser code
var names = animals.map((animal) => animal.name)

// even shorter way
// naming the variables even shorter
// var names = animals.map((x) => x.name)

console.log(names);
// Output : same as the for loop. See below.

// standard for loop non functional way
/*
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}

console.log(names);

Output:
[ 'Fluffy',
  'Kutta',
  'Kuttiya',
  'Tota',
  'Billa',
  'Bhaeriya',
  'Corgi',
  'nemo',
  'mooooOOOooooOOOOo' ]

*/
