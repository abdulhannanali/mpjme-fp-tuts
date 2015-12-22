// reduce function in functional programming
// video link: https://www.youtube.com/watch?v=Wl98eZpkp-c

// sample array
var orders = [
  {amount : 250},
  {amount: 3500},
  {amount: 860},
  {amount: 199}
]

var totalAmount = orders.reduce(function (sum, order) {
  console.log("hello", sum, order)
  return sum + order.amount
}, 0)

console.log(totalAmount)
// Output: 4809

/// arrow function with reduce
// much conciser much wow
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount)


// non functional looping way
/*
var totalAmount = 0
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}
console.log(totalAmount)

// Output: 4809
*/
