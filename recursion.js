// recursion.js
// mpjme video about recursion
// 
// youtube video link: https://www.youtube.com/watch?v=k7-N8R0-KY4&index=7&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
// 

// what is recursion?
// recursion is when a function calls itself until it doesn't
// 
// why is recursion is hard?
// because internet uses asshole fibonacci

// why recurse?
// every time we use a loop we can use a recursion
// 

var countDownFrom = (num) => {
	if (num === 0) {
		return
	}
	console.log(num)
	countDownFrom(num - 1)
}

// implement this in recursion
countDownFrom(10)

// Should output
// 10
// 9
// 8
// 7
// ..
// 1
