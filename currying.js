// Currying in JavaScript
// youtube video link: https://www.youtube.com/watch?v=iZLP4qOwY8I&index=6&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
// 
// Idea behind currying is my function can run through the program and gradually
// receive the arguments it needs
// 
// 

// We can also use a library such as lodash to do this currying for us
var _ = require("lodash")

// dragon function without currying
var dragon = (name, size, element) => 
	name + ' is a ' +
	size + ' dragon that breathes ' + 
	element + "!"

// dragon function with currying
var dragonCurrying = 
	name => 
		size =>
			element =>
				name + ' is a(n) ' +
				size + ' dragon that breathes ' +
				element + '!'

// lodash version with currying
var dragonLodash = _.curry(dragon)

// dragon call in the normal way
// console.log(dragon("fsajksdjlkf", " big", "lightening"))
// 
// dragon call in the currying way - a single call
// console.log(dragonCurrying('fsalfkjsakl')('large')('lightening'))

// this can be separated into multiple calls
var mpjmpeDragon = dragonLodash("mpjmpe")
var ohSoBigDragon = mpjmpeDragon("oh so big")

console.log(ohSoBigDragon("JavaScript!!!")) 