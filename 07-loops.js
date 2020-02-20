/*
For Loop, Syntax
Let's look at the syntax of a for loop. This takes a lot of practice and a lot of reading. Then, more practice.

Here's the structure:

    for (setup; test expression; increment) {
        body;   
    }
*/

/*
for (var i = 1; i < 101; i += 1){
    console.log(i);
}

for ( var i = 1; i <= 10; i++){  // i++ is shorthand for saying, add 1 to i.
    console.log("Number:", i);
}

console.log("Fives");
for (var fives = 0; fives <= 50; fives += 5){
    console.log(fives);
}

console.log("20 to 1");
for (var twenty = 20; twenty >= 1; twenty -= 1){
    console.log(twenty);
}

console.log("20 to 1 using --");
for (var twenty = 20; twenty >= 1; twenty--){
    console.log(twenty);
}
console.log("From 3 by 5 Up to 30");
for (var thirty = 3; thirty <= 30; thirty += 5){
    console.log(thirty);
}


console.log("200 by 25");
for (var quarter = 25; quarter <= 200; quarter += 25){
    console.log(quarter);
}

for (var sleepy = 1; sleepy < 20; sleepy *= 3){
    console.log(sleepy);
}

for (var sleepy = 20; sleepy >1; sleepy /= 3){
    console.log(sleepy);
}

for (var a = 0.5; a <=30; a *= 4){
    console.log(a);
}
*/

function iterate(iteration, value){
    console.log("After ", iteration, " times, the value is ", value);
}

/*
var iteration = 0;
for (var value = 200; value >= 1; value /=3){
    iteration += 1;
    iterate(iteration, value);
}
*/

var iteration = 0;
for (var value = 1; value <= 500; value *=7){
    iteration += 1;
    iterate(iteration, value);
}