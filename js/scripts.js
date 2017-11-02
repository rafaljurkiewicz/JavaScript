// scripts.js file

/*
var	a = prompt('Enter a value'),
	b = prompt('Enter b value'),
	value = (a * a) - (2 * a * b) + (b * b);
if (value > 0) {
	console.log('Outcome is above zero');
} else if (value == 0) {
	console.log('Outcome is equal to zero');
} else {
	console.log('Outcome is below zero');
}
*/



function getTriangleArea (a, h) {
	if ( (a <= 0) || (h <= 0) ) {
		console.log('Wrong data');
	}
	return a*h/2
}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 20);
var triangle3Area = getTriangleArea(10, 25);