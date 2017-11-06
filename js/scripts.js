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



var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
if ( allNames.indexOf(newName) === -1 ) {
	allNames.push(newName);
}

console.log(allNames);



var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textAfter = text.replace('Velociraptor', dinosaurUpperCased);
var textLength = textAfter.length;
var partOfText = textAfter.slice(0,textLength/2);

console.log(partOfText);



function drawTree(a) {
	for (var i = 1 ; i <= a ; i++) {
		var star = '';
		for ( var j = 1 ; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
}

console.log(drawTree(10)); 
*/
		

var buttonClass = document.getElementsByClassName('button');
var buttonClassLength = buttonClass.length;
for (var i= 0 ; i <= buttonClass.length ; i++) {
	var buttonInnerText = buttonClass[i].innerText;
	alert(buttonInnerText);
}
