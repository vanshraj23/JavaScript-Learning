// block scope vs function scope

// let and const are block scope
// var is function scope

// block 1
{
    let firstName = "Vansh";
    console.log(firstName);
}

// console.log(firstName); // not defined 

// block 2
{
    let firstName = "raj";
    console.log(firstName);
}

const firstName = "bir";
console.log(firstName);

//------------var is different--------------

//block 3 
{
    var firstname = "vansh raj";
}

var firstname = "raj bir";

console.log(firstname);  // var can be accessed outside the block. 

// this whole is itself a function (main).
// var variables are function scoped. 

const pi = 3.14;

function func() {
    console.log(myVar); // using before decalaring.
    console.log(pi);
    var myVar = "value";
}

func();