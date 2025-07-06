// # Arthematic Operator on Numbers : 
//-----------------------------------

// # Addition operator '+' : 
//--------------------------

// Integers : 
var num1 = 5;
var num2 = 6;
var result = num1 + num2 // 5 + 6
console.log(result);     // 11

// Floating point numbers : 
var num1 = 0.1;
var num2 = 0.2;
var result = num1 + num2; // 0.1 + 0.2
console.log(result)       // 0.30000000000000004
// wired behaviour of javaScript with floating point numbers when they get add.


// # Substraction operator '-' : 
//------------------------------

// Integers : 
var num1 = 5;
var num2 = 6;
var result = num1 - num2 // 5 - 6
console.log(result);     // -1

// Floating point numbers : 
var num1 = 0.1;
var num2 = 0.2;
var result = num1 - num2; // 0.1 - 0.2 
console.log(result)       // -0.1


// # Multiplication operator '*' : 
//------------------------------

// Integers : 
var num1 = 5;
var num2 = 6;
var result = num1 * num2 // 5 * 6
console.log(result);     // 30

// Floating point numbers : 
var num1 = 0.1;
var num2 = 0.2;
var result = num1 - num2; // 0.1 * 0.2 
console.log(result)       // 0.03


// # Division operator '/' : 
//--------------------------

// Integers : 
var num1 = 5;
var num2 = 6;
var result = num1 * num2; // 5 / 6
console.log(result);      // 0.83333

// On dividing with zero gives infinity
var num1 = 10;
var num2 = 0;
var result = num1 / num2; // 10 / 0
console.log(result) // Infinity

// Floating point numbers : 
var num1 = 0.1;
var num2 = 0.2;
var result = num1 / num2; // 0.1 / 0.2 
console.log(result)       // 0.5


// # Modulus operator (remainder) '%' : 
//------------------------------------

// Integers : 

// case 1 num2 divides completely num1
var num1 = 10;
var num2 = 5;
var result = num1 % num2; // 10 % 5
console.log(result);      // 0

// case 1 num2 divides not completely num1
var num1 = 10;
var num2 = 4;
var result = num1 % num2; // 10 % 4
console.log(result);      // 2

// If denominator is greater than nominator then it will give nominator itself.
var num1 = 5;
var num2 = 6;
var result = num1 / num2; // 5 / 6
console.log(result) // 5

// Floating point numbers : 
var num1 = 0.5;
var num2 = 0.2;
var result = num1 / num2; // 0.5 / 0.2 
console.log(result)       // 0.9999999


// # Exponential operator '**' : 
//------------------------------

// base is +ve
var base = 2;
var exponet = 5;
var result = base ** exponet; // 2 ** 5
console.log(result);          // 32

// base is -ve, follow the synatx
var base = -2;
var exponet = 5;
var result = (base) ** exponet; // (-2) ** 5
console.log(result);            // -32

// both base and exponent can be floating points and negative
// better to use base as integers.


// # Increment operator '++' :
// --------------------------

// It increments variable by +1 value.

// Integers
var number = 5;

// pre increment
console.log(++number); // 6 
// first it increments the number then uses it.

// post increment
console.log(number++); // 6 
console.log(number);   // 7 
// first it uses the number then increments it.

// Floating point numbers
var number = 0.5;

// pre increment
console.log(++number); // 1.5 
// first it increments the number then uses it.

// post increment
console.log(number++); // 1.5
console.log(number);   // 2.5
// first it uses the number then increments it.

// Important ++ works with only variables declared with var and let

// Incrementing const variable gives error :
const number1 = 5;
++number1 // will giver error

// Incrementing number literals gives error :
5++;   // error
++0.5; // error


// # Decrement operator '--' :
// --------------------------

// It decrements variable by -1 value.

// Integers
var number = 5;

// pre increment
console.log(--number); // 5 
// first it increments the number then uses it.

// post increment
console.log(number--); // 5 
console.log(number);   // 4 
// first it uses the number then increments it.

// Floating point numbers
var number = 2.5;

// pre decrement
console.log(--number); // 1.5 
// first it decrementsts the number then uses it.

// post decrement
console.log(number--); // 1.5
console.log(number);   // 0.5
// first it uses the number then decrements it.

// Important -- works with only variables declared with var and let

// Decrementing const variable gives error :
const number2 = 5;
--number2 // will giver error

// Decrementing number literals gives error :
5--;   // error
--0.5; // error