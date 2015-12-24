
// mpjmpe - closures in javascript
// part 5 of functional programming
// video link: https://www.youtube.com/watch?v=CQqwU2Ixu-U

// functions are closures
// functions have access to the variables that are defined outside the function

var request = require('request')

/* Greet Example Uncomment to  use
var me = 'Bruce Myers'
function greetMe() {
  console.log(me)
}
// if we reassign it to batman
me = 'Batman'
greetMe()
*/



// working request example
// as an alternative for the ajax example used in the video
var requestId = "123"
function sendRequest() {
  request({
    type: "GET",
    uri: "http://xkcd.com/info.0.json"
  }, function (error, response, body) {
    // requestId is availabe in here thanks to the closures
    if (!error) {
      console.log("Request: " + requestId + " returned")
    }
    else {
      console.log("Request: " + requestId + " not returned")
    }
  })
}

sendRequest()
