// categoriesRecursion.js
// IMPORTANT TIP: Before starting coding too early make some time to thing 
// about the problem you have at hand


// we have to convert this shit into recursion using almighty recursion
var categories = [
	{id: 'animals', 'parent': null},
	{id: 'mammals', 'parent': 'animals'},
	{id: 'cats', 'parent':'mammals'},
	{id: 'dogs', 'parent': 'mammals'},
	{id: 'chihuahua', 'parent': 'dogs'},
	{id: 'labrador', 'parent': 'dogs'},
	{id: 'persian', 'parent': 'cats'},
	{id: 'siamese', 'parent': 'cats'}
]

/*
{
	animals: {
		mammals: {
			cats: {
				persian: {},
				siamese: {}
			},
			dogs: {
				chihuahua: {},
				labrador: {}
			}
		}
	}
}
*/


var makeTree = (categories, parent) => {
	var node = {}
	categories.filter(c => c.parent === parent)
	.forEach(c => node[c.id] =
		makeTree(categories, c.id))

	return node

}

console.log(
		JSON.stringify(
			makeTree(categories, null),
			null, 2)
	)