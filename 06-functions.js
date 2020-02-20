/*
Declaration
Here's an example of a declaration of a function:
*/
function hello() {
    console.log("Hello World!");
}

/*
Calls
When we want to call a function, that means that we're going to use it, we say the name of the function followed by parenthesis:
*/
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

/*
Parameters and Arguments
A few things to know up front:

Parameters are the names listed in the function definition.
Arguments are the real values received by the function when you call it.
Here's a function with a parameter:
*/
function numberEntered(x){
    console.log("The number you entered was: ", x);
}

/*
Think of the x parameter just like a variable that can take in a different value each time that the function is called. 
When we call the function it must now have an argument to satisfy the parameter:
*/
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function subtractTwoNumbers(firstNum, secondNum){
    console.log("2nd - 1st = ",secondNum - firstNum);
}
subtractTwoNumbers(5, 7)

/*
The return Keyword
When JS reaches a return statement it will stop executing that function. The return is the value that the function spits out. It is the value that gets distilled down and returned out of the function. It's best to see it with a function that does some math:

Declare the function:
*/
function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}
/*
Call the function with arguments
*/
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 40000, 2222);
console.log(getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 40000, 2222));


// Write a function that returns the value of two numbers added together.

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

// Write a function that takes in a first and last name. It returns a whole name.

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");

// Write a function that returns your pet's name and breed.

function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Sansa", "Generic");

/*
Great Challenge
Write a function that calculates the the totalPrice after tax on any quantity of any price on a product.

*/

// My function
function totalPrice(productPrice,taxRate,orderQuantity){
    let productPriceAfterTax = productPrice * (1 + taxRate);
    let totalOrderPrice = productPriceAfterTax * orderQuantity;
    console.log("Return Total Price",totalOrderPrice);
    return totalOrderPrice;
}

totalPrice(25.25,.08,23);
console.log("Total Price",totalPrice(25.25,.08,23));

// The course function provided 
function calculatePriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceIndiana(17, 5);