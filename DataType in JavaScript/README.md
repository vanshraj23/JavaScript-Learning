# # DataTypes in JavaScript.
A data type in a programming language is a classification that specifies:  
* What kind of data a variable can hold (e.g., numbers, text, boolean).  
* What operations can be performed on that data.

************************************************************************

## # There are seven primitive datatypes in javaScript:

### 1. Numbers  
Integers (-finite,+finite) and floating point numbers.  

**Examples :-**
```js
// Integers :
let num1 = 5;  // +ve integer
let num2 = -6; // -ve integer

// Floating points numbers :
let num3 = 0.26 // +ve floating number
let num4 = -5.9 // -ve floating number
```

### 2. Strings 
Squence of character, number and symbols enQuoted b/w either in single quotes, double quotes or back ticks.

**Examples :-**
```js
// Double quotes :
const string = "text";

// Single quotes :
const string = 'characters';

// Back Ticks :
const string = `string658#4@14`;
```

### 3. Boolean 
Boolean is of two types true and false.

**Examples :-**
```js
// Under the hood true represents 1.
let isWorkDone = true;

// Under the hood false represents 0.
let isCompleted = false;
```

### 4. Undefined 
It is a speical type of data in javaScript.

**Example :-**
```js
// It is used to explicitly mark the variable undifined when its value is unKnown.
let valueNotKnownYet = undefined;
```

### 5. Null
It is a speical type of data in JavaScript.

**Example :**
```js
// It is used to explicitly mark the variable null to show the absence of the object.
let absenceOfObject = null;
```

### 6. BigInt 
It is use to show very large number of integers.

**Examples :-**
```js
// First way to create :
let bigInteger1 = BigInt(124536987239439);

// Second way to create :
let bigInteger2 = 123456789987654321n;
```

### 7. Symbols 
It is a special type of data in JavaScript.

**Examaple :-**
```js
// It is used for speical key in objects :
const key = Symbol("speical-key");
```

**********************************************************************************

## # There are three types of secondary data in javaScript :

### 1. Objects 
It is a collection of pair of key and values.

**Examples :-** 
```js
// Object Literal : 
const object1 = {};

// Object with keys and values : 
const object2 = { 
    key1: "value1", 
    key2: "value2" 
};
```

### 2. Arrays  
Arrays are the ordered collection of the elements.

**Examples :-** 
```js
// Array of integers :
const integers = [-3,-2,-1,0,1,2,3];

// Array of floating point numbers :
const floatingNumbers = [-0.3,-0.2,-0.1,0,0.1,0.2,0.3];

// Array of strings :
const strings = ["string1","string2","string3"];

// Array of boolean, undefined and null : 
const array = [true,false,undefined,null];

// Array of objects :
const objects = [
    { key1: "value1" },
    { key2: "value2" },
    { key3: "value3" }
];

// Array of arrays (nested arrays) :
const arrays = [
    [1,2],
    ["string1","string2"],
    [{key1 : "value1"},{key2: "value2"}]
];

// Array can store any dataypes in it : 
const mixedArray = [1,"string",true,false,undefined,null,-0.9,{key1 : "value1"},[1,5,6]];
```

### 3. Functions 
Function is block of instructions that does specific task.

**Examples :-** 
```js
// Function declaration using function keyword : 
function func1(string) {
    console.log(string);
}

// Function expersion (storing a function into variable) :
const func2 = function(string) {
    console.log(string);
}

// Arrow Functions :
const func3 = (string) => {
    console.log(string);
}
```
***********************************************************************************

## # Important :-
* Arrays and Functions are object internally.
* Functions can stored in the array and objects.
* Functions, Array and Objects are first class citizens.