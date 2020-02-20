/*
Objects and Object Oriented Programming
Objects are a data type that let us store a collection of properties and methods.

Object Literals
Here is the syntax for an object literal:

var bobAlcorn = {
    name            : "Bob Alcorn",
    age             : 59,
    vocation        : "Chief Operating Officer",
    isRetired       : false
};

console.log(bobAlcorn); 
console.log(bobAlcorn.name); 
console.log(bobAlcorn.age);
*/

var player = {
    username        : "LeisureSuitLarry",
    power           : 48,
    toughness       : "Weak"
};

console.log(player.username);

var friend = {
    name            : "Rob Tatum",
    howMet          : "Ernst & Young project at Sallie Mae",
    dateMet         : new Date(1994, 9, 5),  // October 5, 1994 (year, month, day, hours, minutes, seconds, milliseconds)
    thingInCommon  : "live jazz"
};

var movie = {
    movieTitle                  : "Knives Out",
    rottenTomatoesAudienceScore : 92,
    releaseDate                 : new Date(2019, 10, 27)  // November 27, 2019
};

var drummer = {
    name            : "Neil Peart",
    band            : "Rush",
    favoriteAlbum   : "Signals",
    brandsEndorsed   : "DW, Sabian"
}

console.log(player);
console.log(friend);
console.log(movie);
console.log(drummer);
