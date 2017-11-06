// scripts.js file

/* 
// 8.5
var name = prompt('Enter your name'),
	a = prompt('Enter base of triangle'),
	h = prompt('Enter height of triangle'),
	triangleArea = a*h/2;
alert('Hello, ' + name + ' Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea),
console.log('Hello, ' + name + ' Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);


// 8.6
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



// 9.1
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

// 9.2
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
if ( allNames.indexOf(newName) === -1 ) {
	allNames.push(newName);
}

console.log(allNames);

*/


var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textAfter = text.replace('Velociraptor', dinosaurUpperCased);
var textLength = textAfter.length;
var partOfText = textAfter.slice(0,textLength/2);

console.log(partOfText);

