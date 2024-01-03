//alert('Hello World!');
// prompt('What is your name?');
/*
I now have a coding exercise for you to complete.

I want you to edit this code such that the value of result is the average of the numerical values of a, b,c and d, rounded up to the nearest whole number. Note the variables are currently strings, but I want the average of the numerical values.

Do this without editing the values that a, b, c and d are assigned.

Next I want you to assign the value of a random die roll to randomDieRoll. A die of course has six sides, so the result should be created by generating a random number between 1 and 6, inclusive.
*/

var a = '10';
var b = '5';
var c = '20';
var d = '30';
var total = Number(a) + Number(b) + Number(c) + Number(d);
var result = Math.ceil(total/4);
console.log(result);

var randomDieRollOutcome= Math.floor(Math.random() * 6) + 1;
console.log(randomDieRollOutcome);