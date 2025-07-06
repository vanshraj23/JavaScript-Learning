// # Logical operators :
// --------------------- 

// Truthy and Falsy values in JavaScript
//--------------------------------------

// Falsy values : zero, empty sting, undefined, NAN, and false.
undefined;  // falsy value
false;      // falsy value
0.0;        // falsy value
NaN;        // falsy value
0;          // falsy value
"";         // falsy value

// Truthy values : apart from falsy value every other value is truthy value.
{ key1: "value1" }; // truthy value
"string"; // truthy value           
[1,5,5];  // truthy value
true;     // truthy value
-0.3;     // truthy value
1;        // truthy value 
[],{} // are also truthy value

// # Expresion : it is a legal combination of oprand and operators.


// 1. Logical AND operator '&&' :
// ------------------------------

// It operates either with two operand, two expression or two values.
// # Synatx : 
// expression1 && expression2;


//  # It returns expression1 only when expression1 evaluates to falsy value. (it will not even evaluate the expression 2)

// expressions
let expression1 = "string" / 5; // NAN (falsy value)
let expression2 = 5 + 6 - 3;    // 8 (truthy value)
console.log(expression1 && expression2); // NAN as expression1 => falsy value.

// values
undefined && NaN; // undefined
0 && false;       // 0
false && true;    // false
"" && undefined;  // ""


//  # It returns expression2 only when expression1 evaluates to truthy value. (no matter whether expression 2 is falsy or truthy value).

// expressions
expression1 = "hello" + " " + "world"; // "hello world" (truthy value)
expression2 =  5 / 5 - 1; // 0 (falsy value)
console.log(expression1 && expression2); // 0 as expression2 => falsy value.

// values
true && undefined; // undefined
true && false;     // false
"st" && true;      // true
true && 56;        // 56
// Hence it is also called guard operator.
// If first is true then only second will evaluates and get returned.


// 2. Logical OR operator '||' :
// ------------------------------

// It operates with either two operand, two expression or two values.
// # Syntax : 
// expression1 || expression2;


//  # It returns expression1 only when expression1 evaluates to truthy value. (it will not even evaluate the expression 2)

// expressions
let expression_1 = "ture"; // (truthy value)
let expression_2 = "";     // (falsy value)
console.log(expression_1 || expression_2); // "true" as expression1 => truthy value

// values
true || undefined; // true
true || "text";    // true
true || false;     // true
true || 0;         // true
// Hence it is called default operator if expression 1 is truth value 
// then expression1 will return always.


//  # It returns expression2 only when expression1 evaluates to falsy value. (no matter whether expression 2 is falsy or truthy value). 

// variables
expression_1 = 36 - (72 / 2); // 0 (falsy value)
expression_2 = true;          // true (truthy value) 
console.log(expression_1 || expression_2); // true as expression2 => tuthy value.

// values
false || undefined; // undefined 
false || true;      // true
false || 0;         // 0
false || "";        // ""


// 3. Logical Not operator '!' : 
//------------------------------

// It operates with only single expression, single operand or single value.
// # sytax :
// !expression

// It flips the truthyness and falsyness of a expression, operand or value.

// It turns trutyness into the falsyness and vice versa.

// expression
let expression = 15 > 10; // true
console.log(!expression); // false 

let age = 12;
let isAdult = age >= 18; // false
console.log(isAdult);    // true
 

// values
console.log(!false); // true
console.log(!true);  // false
console.log(!"");    // true
console.log(!0);     // true