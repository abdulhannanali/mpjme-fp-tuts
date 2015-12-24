// advanced reduce part 4 of functional programming
// video link: https://www.youtube.com/watch?v=1DMolJ2FrNY

// data contains in data.txt file

// importing the fs module for getting the `data.txt file`
var fs = require('fs')

// we are doing the following things here
// reading the file and setting it's encoding to utf-8

var output = fs.readFileSync('./data.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((customers, line) => {
    if (dot(customers))
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

// instead of using that ugly [] using dot function
function dot(obj, prop) {
  return obj[prop]
}


console.log('output\n', JSON.stringify(output, null, 2));
