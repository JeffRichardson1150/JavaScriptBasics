console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

var tweet = "Lebron is king! Westbrook for president!";
var facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
var username = 'jamespauloconnor';  

console.log(username);

//concatenation
var birthCity = "Fort Wayne";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState);

var ageInAugust = 40; 
var highSchool = "Bill Murray High School";
var graduatedHighSchool = 1994;
var commaWithSpace = ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

var gradYear = 1994;
var highSchool = "Bill Murray High School";
console.log("I graduated from " + highSchool + " in " + gradYear + ".");

/*
String Method
String Methods allow us to introduce functions w/o having to worry about writing them. In JS, Strings, Numbers, and Booleans (not yet covered) have some built in properties and methods that are available through using the . operator.
*/
//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(10)); // cuts off everything before the nth index