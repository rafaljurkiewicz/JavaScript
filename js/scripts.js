// scripts.js file

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



