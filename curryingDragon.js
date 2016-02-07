// curryingDragon.js
// youtube link: same as currying.js
// 
// improvement over a file with currying


var _ = require("lodash")


var dragons = [
	{name: 'fluffykins', element: 'lightining'},
	{name: 'noomi', element: 'lightining'},
	{name: 'karo', element: 'fire'},
	{name: 'doomer', element: 'timewarp'}
]



// hasElement checks the function if it has the desired property
// 
// make this function curryable
var hasElement = _.curry((element, obj) => obj.element == element)


// because of currying this call has been made even more concise 
var lightiningDragons = 
	dragons.filter(hasElement('lightining'))

console.log(lightiningDragons)