// # Comparison Operators : 
//---------------------------

// 1. Equal to operator '==' (loose) :
//------------------------------------

// It compare the two entities based on their values only. 
// It return true if L.H.S and R.H.S are equal in value.
// It return false if L.H.S and R.H.S are not equal in value.

// Comparing number :

// Number literals
0.1 == 0.1; // true
5 == 6;     // false
1 == 1.0;   // true

// variables of type number
let num1 = 5;
let num2 = 5;
let num3 = 6;
console.log(num1 == num2); // true
console.log(num1 == num3); // false


// Comparing strings :

// String literals
"str1" == "str2"; // false
"str1" == "str1"; // true

// variables of type string
let str1 = "str1";
let str2 = "str2";
console.log(str1 == str2); // false

// a variable is always equal to self.
console.log(str1 == str1); // true
console.log(str2 == str2); // true


// Comparing booleans :

// boolean literals
false == false; // true
false == true;  // false
true == true;   // true

//variable of type boolean
let variable1 = true;
let variable2 = false;
console.log(variable1 == variable2); // false
// a variable is always equal to self.
console.log(variable1 == variable1); // true
console.log(variable2 == variable2); // true


// Comparing arrays :

// always false as arrays are of reference type even thought they look same.
[1,2] == [1,2]; // false
[] == [];       // false 
// camparison is based upon their memory reference
const array1 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array2 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array1 == array2); // 0X12 == 0X56 => false


// Comparing objects :

// always false as objects are of reference type even thought they look same.
 
// camparison is based upon their memory reference
const object1 = { key1: "value1" }; // 0X12 (memory reference)
const object2 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object1 == object2); // 0X12 == 0X56 => false


// Comparing functions :

// always false as functions are of reference type even thought they look same.

// camparison is based upon their memory reference
const func1 = function() {console.log("hello")};  // 0X12 (memory reference)
const func2 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func1 == func2); // 0X12 == 0X56 => false

// # Comparing number with string : 

// camparison based upon their value not type.
"0.25" == 0.25; // true
"45" == 45;    // true
"1f" == 1;      // false

// # Comparing number with booleans : 

// camparison based upon their value not type.
true == 1;    // true
true == 1.0;  // true
true == 5;    // false
false == 0;   // true
false == 0.0; // true
false == 5;   // false
// under the hood 
// true => 1
// false => 0


// 2. Not Equal to operator '!=' (loose) :
//----------------------------------------

// It compare the two entities based on their values only. 
// It return false if L.H.S and R.H.S are equal in value.
// It return true if L.H.S and R.H.S are not equal in value.

// Comparing number :

// Number literals
0.1 != 0.1; // false
5 != 6;     // true
1 != 1.0;   // false

// variables of type number
let num4 = 5;
let num5 = 5;
let num6 = 6;
console.log(num4 != num5); // false
console.log(num4 != num6); // true


// Comparing strings :

// String literals
"str1" != "str2"; // true
"str1" != "str1"; // false

// variables of type string
let str3 = "str1";
let str4 = "str2";
console.log(str3 != str4); // true

// a variable is always equal to self.
console.log(str3 != str3); // false
console.log(str4 != str4); // false


// Comparing booleans :

// boolean literals
false != false; // false
false != true;  // true
true != true;   // false

//variable of type boolean
let variable3 = true;
let variable4 = false;
console.log(variable3 != variable4); // true

// a variable is always equal to self.
console.log(variable1 != variable1); // false
console.log(variable2 != variable2); // false


// Comparing arrays :

// always true as arrays are of reference type even thought they look same.
[1,2] != [1,2]; // true
[] != [];       // true 

// camparison is based upon their memory reference
const array3 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array4 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array3 != array4); // 0X12 != 0X56 => true


// Comparing objects :

// always true as objects are of reference type even thought they look same.
 
// camparison is based upon their memory reference
const object3 = { key1: "value1" }; // 0X12 (memory reference)
const object4 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object3 != object4); // 0X12 != 0X56 => true 


// Comparing functions :

// always false as functions are of reference type even thought they look same.

// camparison is based upon their memory reference
const func3 = function() {console.log("hello")};  // 0X12 (memory reference)
const func4 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func3 != func4); // 0X12 != 0X56 => true

// # Comparing number with string : 

// camparison based upon their value not type.
"0.25" != 0.25; // false
"45" != 45;    // false
"1f" != 1;      // true

// # Comparing number with booleans : 

// camparison based upon their value not type.
true != 1;    // false
true != 1.0;  // false
true != 5;    // true
false != 0;   // false
false != 0.0; // false
false != 5;   // true
// under the hood 
// true => 1
// false => 0

// 3. Equal to operator '===' (Strict) :
//----------------------------------------

// It compare the two entities based on their values and types. 
// It return true if L.H.S and R.H.S are equal in value and type.
// It return false if L.H.S and R.H.S are not equal in value and type.
// Type has higher priority than value.

// Comparing number :

// Number literals
0.1 === 0.1; // true
5 === 6;     // false
1 === 1.0;   // true

// variables of type number
let num7 = 5;
let num8 = 5;
let num9 = 6;
console.log(num7 === num8); // true
console.log(num4 === num6); // false
// same type but different values


// Comparing strings :

// String literals
"str1" === "str2"; // false
"str1" === "str1"; // true

// variables of type string
let str5 = "str1";
let str6 = "str2";
console.log(str5 === str6); // false

// a variable is always equal to self.
console.log(str5 === str5); // true
console.log(str6 === str6); // true


// Comparing booleans :

// boolean literals
false === false; // true
false === true;  // false
true === true;   // true

//variable of type boolean
let variable5 = true;
let variable6 = false;
console.log(variable5 === variable6); // false

// a variable is always equal to self.
console.log(variable5 === variable5); // true
console.log(variable6 === variable6); // true


// Comparing arrays :

// always true as arrays are of reference type even thought they look same.

// camparison is based upon their memory reference and type 
const array5 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array6 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array5 === array6); // 0X12 === 0X56 => false


// Comparing objects :

// always true as objects are of reference type even thought they look same.
 
// camparison is based upon their memory reference amd type
const object5 = { key1: "value1" }; // 0X12 (memory reference)
const object6 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object5 === object6); // 0X12 === 0X56 => false 


// Comparing functions :

// always false as functions are of reference type even thought they look same.

// camparison is based upon their memory reference amd type
const func5 = function() {console.log("hello")};  // 0X12 (memory reference)
const func6 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func5 === func6); // 0X12 === 0X56 => false

// # Comparing number with string : 

// camparison based upon their value not type.
"0.25" === 0.25; // false
"45" != 45;      // false
"1f" != 1;       // true
// even though their values are same but types are different

// # Comparing number with booleans : 

// camparison based upon their value not type.
true === 1;    // false
true === 1.0;  // false
true === 5;    // false
false === 0;   // false
false === 0.0; // false
false === 5;   // false
// under the hood 
// true => 1
// false => 0


// 4. Not Equal to operator '!==' (Strict) :
//----------------------------------------

// It compares the two entities based on their values and types. 
// It returns true if L.H.S and R.H.S are NOT equal in value or type.
// It returns false if L.H.S and R.H.S are equal in value and type.
// Type has higher priority than value.


// Comparing number :

// Number literals
0.1 !== 0.1; // false
5 !== 6;     // true
1 !== 1.0;   // false

// variables of type number
let num10 = 5;
let num11 = 5;
let num12 = 6;
console.log(num10 !== num11); // false
console.log(num10 !== num12); // true
// same type but different values


// Comparing strings :

// String literals
"str1" !== "str2"; // true
"str1" !== "str1"; // false
// if values are same and types are same then false

// variables of type string
let str7 = "str1";
let str8 = "str2";
console.log(str7 !== str8); // true

// a variable is always equal to self.
console.log(str7 !== str7); // false
console.log(str8 !== str8); // false


// Comparing booleans :

// boolean literals
false !== false; // false
false !== true;  // true
true !== true;   // false

// variable of type boolean
let variable7 = true;
let variable8 = false;
console.log(variable7 !== variable8); // true

// a variable is always equal to self.
console.log(variable7 !== variable7); // false
console.log(variable8 !== variable8); // false


// Comparing arrays :

// always true as arrays are of reference type even though they look same.

// comparison is based upon their memory reference and type 
const array7 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array8 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array7 !== array8); // 0X12 !== 0X56 => true


// Comparing objects :

// always true as objects are of reference type even though they look same.
 
// comparison is based upon their memory reference and type
const object7 = { key1: "value1" }; // 0X12 (memory reference)
const object8 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object7 !== object8); // 0X12 !== 0X56 => true 


// Comparing functions :

// always true as functions are of reference type even though they look same.

// comparison is based upon their memory reference and type
const func7 = function() {console.log("hello")};  // 0X12 (memory reference)
const func8 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func5 !== func6); // 0X12 !== 0X56 => true


// # Comparing number with string : 

// comparison based upon their value and type
"0.25" !== 0.25; // true
"45" !== 45;     // true
"1f" !== 1;      // true
// values might seem similar but types are different => true


// # Comparing number with booleans : 

// comparison based upon their value and type
true !== 1;    // true
true !== 1.0;  // true
true !== 5;    // true
false !== 0;   // true
false !== 0.0; // true
false !== 5;   // true
// under the hood:
// true => 1
// false => 0
// but since type is boolean vs number => true


// 5. Greater than operator '>' :
// -------------------------------

// It compare two entities based upon their value.
// It returns true if L.H.S is greater than R.H.S.
// It returns false if L.H.S is not greater than R.H.S.

// Its for numbers to compare, Other datatype always give false.

// number literals
4 > 5;    // false
10 > 0.2; // true

// variable of type number
let age = 15;
age > 18; // false

// Apart from number any camparison of other data types among themself using
// greater than operator always give error.
// comparing them is also illogical.


// 6. Less than operator '<' :
// -------------------------------

// It compare two entities based upon their value.
// It returns true if L.H.S is less than R.H.S.
// It returns false if L.H.S is not less than R.H.S.

// Its for numbers to compare, Other datatype always give false.

// number literals
4 < 5;    // true
10 < 0.2; // false

// variable of type number
let num = 15;
num < 18; // true

// Apart from number any camparison of other data types among themself using
// less than operator always give error.
// comparing them is also illogical.


// 7. Greater than and equal to operator '>=' :
// --------------------------------------------

// It compare two entities based upon their value.
// It returns true if L.H.S is either greater than or equal to R.H.S.
// It returns false if L.H.S is neither greater than nor equal to R.H.S.

// Its for numbers to compare, Other datatype always give false.

// number literals
4 >= 5;     // false
10 >= 0.2;  // true as 10 == 2 => false but 10 > 2 => true. 
"25" >= 25; // true as "25" > 25 => false but "25" == 25 => true (loose) checking

// variable of type number
let number = 29;
console.log(number >= 5); // true

// Apart from number any camparison of other data types among themself using
// less than operator always give error.
// comparing them is also illogical.


// 8. Less than and equal to operator '<=' :
// --------------------------------------------

// It compare two entities based upon their value.
// It returns true if L.H.S is either less than or equal to R.H.S.
// It returns false if L.H.S is neither less than nor equal to R.H.S.

// Its for numbers to compare, Other datatype always give false.

// number literals
4 <= 5;     // true
10 <= 0.2;  // false as 10 == 2 => false and 10 < 2 => false. 
"25" <= 25; // true as "25" < 25 => false but "25" == 25 => true (loose) checking

// variable of type number
let integer = 29;
console.log(integer <= 5); // false

// Apart from number any camparison of other data types among themself using
// less than operator always give error.
// comparing them is also illogical.