/*
    # Datatypes in JavaScript.
    --------------------------
    A data type in a programming language is a classification that specifies:
    What kind of data a variable can hold (e.g., numbers, text, boolean).
    What operations can be performed on that data.
*/

// # There are seven primitive types data in javaScript:
// -----------------------------------------------------

// 1. Numbers : integers (-finite,+finite) and floating point numbers.
// Examples :-

// Integers :
var num1 = 5;  // +ve integer
var num2 = -6; // -ve integer

// Floating points numbers :
var num1 = 0.26 // +ve floating number
var num2 = -5.9 // -ve floating number

// 2. Sringts : squence of character, number and symbols enQuoted b/w single quotes, double quotes and back ticks.
// Examples :-

// Double quotes :
var string = "text";

// Single quotes :
var string = 'characters';

// Back Ticks :
var srring = `string658#4@14`;

// 3. Boolean : Boolean is of two types true and false.
// Examples :

// Under the hood true represents 1.
var isWorkDone = true;

// Under the hood false represents 0.
var isWorkDone = false;

// 4. Undefined : It is a speical type of data in javaScript.
// Eamples :

// It is used to explicitly mark the variable undifined when its value is unKnown.
var valueNotKnownYet = undefined;

// 5. Null : It is a speical type of data in JavaScript.
// Eamples :

// It is used to explicitly mark the variable null to show the absence of the object.
var absenceOfObject = null;

// 6. BigInt : It is use to show very large number of integers.
// Examples :

// First way to create :
var bigInteger = BigInt(124536987239439);

// Second way to create :
var bigInteger = 123456789987654321n;

// 7. Symbols : It is a special type of data in JavaScript.
// Examaples :

// It is used for speical key in objects :
var key = Symbol("speical-key");

// # There are three types of secondary data in javaScript :
//-----------------------------------------------------------

// 1. Objects : It is a collection of pair of key and values.
// Examples : 

// Object Literals : 
var object = {};

// Object with keys and values : 
var object = { 
    key1: "value1", 
    key2: "value2" 
};

// 2. Arrays : Arrays are the ordered collection of the datatypes.
// Examples : 

// Array of integers :
var integers = [-3,-2,-1,0,1,2,3];

// Array of floating point numbers :
var floatingNumbers = [-0.3,-0.2,-0.1,0,0.1,0.2,0.3];

// Array of strings :
var strings = ["string1","string2","string3"];

// Array of boolean, undefined and null : 
var array = [true,false,undefined,null];

// Array of objects :
var objects = [
    { key1: "value1" },
    { key2: "value2" },
    { key3: "value3" }
];

// Array of arrays (nested arrays) :
var arrays = [
    [1,2],
    ["string1","string2"],
    [{key1 : "value1"},{key2: "value2"}]
];

// Array can store any dataypes in it : 
var mixedArray = [1,"string",true,false,undefined,null,-0.9,{key1 : "value1"},[1,5,6]];

// 3. Functions : Function is block of instructions that does specific task.
// Example : 

// Function declaration using function keyword : 
function func(string) {
    console.log(string);
}

// Function expersion (storing a function into variable) :
var func = function(string) {
    console.log(string);
}

// Arrow Functions :
var func = (string) => {
    console.log(string);
}

// # Arrays and Functions are object internally.