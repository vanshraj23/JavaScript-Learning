# Variables
A variable in a programming language is nothing but container that can store some data (supported by that language) in itself.

For e.g, In JavaScript programming language.  

A variable is defined by var keyword ( a keyword is nothing but a speical reserved word in a language that has special meaning to it).

It follows a synatx rule, like :  
```js
var variable_name = "variable_value";
```

******************************************************************************

## Types of variables in JavaScript

### There are three types of variables in JavaScript :-
1. **var** variables.
2. **let** variables.
3. **const** variables

## Var variables
**Var** is an abbrivation of variable itself. A variable which is declared through var keyword is a function scoped variable.

### A var variable can be re-declared and updated.

```js
// Variable with same identifer can be re-declared. 
var c = "vansh";
var c = 50;
```

**Use Strict mode to prevent this same re-declaration on top of the script.**

```js
"use strict"
```

### Var variables are function scoped variables
This means var variables are available through out the script.  
Accessing them out of their block where they are declared won't give any error.

```js
// This will give no error
console.log(variable);

// Block 
{
    var variable = "value";
}

console.log(variable);
```

### Variables in javaScript are dynamic type :
This means, we can store or assign any values to variable and update them as per need.

```js
// Different values can be assigned to them.
var varibale = "value";  // value of type string.
variable = 25;           // value of type number.
```

### If var variable is not initialized by default it's of undefined type:
This means, it will give undefined on accessing it.

```js
var variable; 
console.log(variable) // its value is undefined.
```

*******************************************************************************

## Let variables
A variable declared through the **let** keyword is block scoped variable.

### Let varibles cannot be re-declared : 
This means on re-declaring them, it will give error.

```js
// This will give error.
let variable = "value";
let variable = "value"; // wrong error will come.
```

### Let variables are block scoped variables
This means let variables are available through out their block.  
Accessing them out of their block where they are declared will give error of not defined.

```js
// Block 
{
    var variable = "value";
}
// This will give an error of not defined variable.
console.log(variable);
```


### Just like var, let variable can be updated :
This means, we can update them with any type value.

```js
// Different values can be assigned to them.
let varibale = "value";  // value of type string.
variable = 25;           // value of type number.
```

### If let vairable is not initialized by deafault it's value is undefined :
This means, it will give undefined on accessing it.

```js
let variable; 
console.log(variable) // its value is undefined.
```

### Accessing the let variable before it's declaration will give error :
This means, on accessing the value of **let** variable before it's declaration will give error of **Refernce Error** as the variable is in TDZ (Temporal Dead Zone).

```js
// This will give reference error.
console.log(variable);
let variable = "value";
```
********************************************************************************

## Const variables
A variable declared through **const** keyword is a block scoped function.

### Initalization of const variable is must :
This means, if a const variable is not initialized will give an error.

```js
// This will give an error.
const variable; // it must be initalized. 
```
### Const variable cannot be updated : 
This means, if a const variable is updated, it will give an error,

```js
const pi = 3.14;
pi = 25; // will give error.
```

### Const variables are block scoped variables
This means const variables are available through out their block.  
Accessing them out of their block where they are declared will give error of not defined.

```js
// Block 
{
    const pi = 3.14;
}
// This will give an error of not defined variable.
console.log(pi);
```

### Accessing the const variable before it's declaration will give an error :
This means, on accessing the value of **const** variable before it's declaration will give an error of **Refernce Error** as the variable is in TDZ (Temporal Dead Zone).

```js
// This will give reference error.
console.log(variable);
let variable = "value";
```
********************************************************************************

***Let and Const are used most and recommend to use as var is primitive way.***