
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marcin', 'Marek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Monika';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log(allNames);
