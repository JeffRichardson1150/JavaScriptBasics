var isLoggedIn = true;
var isAuthenticated = true;
var hasLoggedInToday = false;
var hasToken = false;

/*
Comparison Operators
Booleans are often used to compare two values for equality, inequality, or difference:
Operator    Meaning
==          Equality (value)
===         Strict Equality (value and type)
!=          Inequality (value)
!==         Strict Inequality (value and type)
>           Greater than
>=          Greater than or Equal to
<           Less than
<=          Less than or equal to
*/

console.log(2 > 1); //true
console.log(3 < 2); //false

var test = 2 >= 3; //What will this print?
console.log(test);
console.log("Two is greater than one? " + (2 > 1));
console.log(3 >= 1);

console.log("2 === 2",2 === 2);  // true
console.log('2 === "2"',2 === "2");  // false

/*
Logical Operators
These are important and fairly easy to memorize. 
Essentially, && is the equivalent of and, || means or, and ! or bang means not.

We gave some hard thinking examples to get your brain working with it:

&& stands for AND Example: 4 > 0 && -2 < 0 
|| stands for OR Example: 4 > 0 || -2 > 0 
! stands for NOT Example: !(posNum < 0)
*/
console.log("&& :", 2===2 && 1===1 ); //true because?
console.log("|| :", 2===2 || 2===1 ); //true because?
console.log("!=", 2 != 1) //true because?