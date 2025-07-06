# # Comparison Operators : 

## 1. Equal to operator '==' (loose) :
**It compare the two entities based on their values only.** 
* It return true if L.H.S and R.H.S are equal in value.
* It return false if L.H.S and R.H.S are not equal in value.

**Camparing number :**
```js
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
```

**Camparing strings :**
```js
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
```

**Camparing booleans :**
```js
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
```

**Camparing arrays :**
```js
// always false as arrays are of reference type even thought they look same.
[1,2] == [1,2]; // false
[] == [];       // false 

// camparison is based upon their memory reference
const array1 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array2 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array1 == array2); // 0X12 == 0X56 => false
```

**Camparing objects :**
```js
// always false as objects are of reference type even thought they look same.
 
// camparison is based upon their memory reference
const object1 = { key1: "value1" }; // 0X12 (memory reference)
const object2 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object1 == object2); // 0X12 == 0X56 => false
```

**Camparing functions :**
```js
// always false as functions are of reference type even thought they look same.

// camparison is based upon their memory reference
const func1 = function() {console.log("hello")};  // 0X12 (memory reference)
const func2 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func1 == func2); // 0X12 == 0X56 => false
```

## # Camparing number with string : 
```js
// camparison based upon their value not type.
"0.25" == 0.25 // true
"45" == 45;    // true
"1f" == 1      // false
```

## # Camparing number with booleans : 
```js
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
```

## 2. Not Equal to operator '!=' (loose) :
**It compare the two entities based on their values only.** 
* It return false if L.H.S and R.H.S are equal in value.
* It return true if L.H.S and R.H.S are not equal in value.

**Camparing number :**
```js
// Number literals
0.1 != 0.1; // false
5 != 6;     // true
1 != 1.0;   // false

// variables of type number
let num1 = 5;
let num2 = 5;
let num3 = 6;
console.log(num1 != num2); // false
console.log(num1 != num3); // true
```

**Camparing strings :**
```js
// String literals
"str1" != "str2"; // true
"str1" != "str1"; // false

// variables of type string
let str1 = "str1";
let str2 = "str2";
console.log(str1 != str2); // true

// a variable is always equal to self.
console.log(str1 != str1); // false
console.log(str2 != str2); // false
```

**Camparing booleans :**
```js
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
```

**Camparing arrays :**
```js
// always true as arrays are of reference type even thought they look same.
[1,2] != [1,2]; // true
[] != [];       // true 

// camparison is based upon their memory reference
const array3 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array4 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array3 != array4); // 0X12 != 0X56 => true
```

**Camparing objects :**
```js
// always true as objects are of reference type even thought they look same.
 
// camparison is based upon their memory reference
const object3 = { key1: "value1" }; // 0X12 (memory reference)
const object4 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object3 == object4); // 0X12 != 0X56 => true 
```

**Camparing functions :**
```js
// always false as functions are of reference type even thought they look same.

// camparison is based upon their memory reference
const func3 = function() {console.log("hello")};  // 0X12 (memory reference)
const func4 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func3 == func4); // 0X12 != 0X56 => true
```

## # Camparing number with string : 
```js
// camparison based upon their value not type.
"0.25" != 0.25 // false
"45" != 45;    // false
"1f" != 1      // true
```

## # Camparing number with booleans : 
```js
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
```

## 3. Equal to operator '===' (Strict) :
**It compare the two entities based on their values and types.** 
* It return true if L.H.S and R.H.S are equal in value and type.
* It return false if L.H.S and R.H.S are not equal in value and type.
* Type has higher priority than value.

**Camparing number :**
```js
// Number literals
0.1 === 0.1; // true
5 === 6;     // false
1 === 1.0;   // true

// variables of type number
let num1 = 5;
let num2 = 5;
let num3 = 6;
console.log(num1 === num2); // true
console.log(num1 === num3); // false
// same type but different values
```

**Camparing strings :**
```js
// String literals
"str1" === "str2"; // false
"str1" === "str1"; // true

// variables of type string
let str1 = "str1";
let str2 = "str2";
console.log(str1 === str2); // false

// a variable is always equal to self.
console.log(str1 === str1); // true
console.log(str2 === str2); // true
```

**Camparing booleans :**
```js
// boolean literals
false === false; // true
false === true;  // false
true === true;   // true

//variable of type boolean
let variable1 = true;
let variable2 = false;
console.log(variable1 === variable1); // false

// a variable is always equal to self.
console.log(variable1 === variable1); // true
console.log(variable2 === variable2); // true
```

**Camparing arrays :**
```js
// always true as arrays are of reference type even thought they look same.

// camparison is based upon their memory reference and type 
const array1 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array2 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array1 === array2); // 0X12 === 0X56 => false
```

**Camparing objects :**
```js
// always true as objects are of reference type even thought they look same.
 
// camparison is based upon their memory reference amd type
const object1 = { key1: "value1" }; // 0X12 (memory reference)
const object2 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object1 === object2); // 0X12 === 0X56 => false 
```

**Camparing functions :**
```js
// always false as functions are of reference type even thought they look same.

// camparison is based upon their memory reference amd type
const func1 = function() {console.log("hello")};  // 0X12 (memory reference)
const func2 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func1 === func2); // 0X12 === 0X56 => false
```

## # Camparing number with string : 
```js
// camparison based upon their value not type.
"0.25" === 0.25; // false
"45" != 45;      // false
"1f" != 1;       // true
// even though their values are same but types are different
```

## # Camparing number with booleans : 
```js
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
```

## 4. Not Equal to operator '!==' (Strict) :
**It compares the two entities based on their values and types.** 
* It returns true if L.H.S and R.H.S are NOT equal in value or type.
* It returns false if L.H.S and R.H.S are equal in value and type.
* Type has higher priority than value.


**Camparing number :**
```js
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
```

**Camparing strings :**
```js
// String literals
"str1" !== "str2"; // true
"str1" !== "str1"; // false

// variables of type string
let str7 = "str1";
let str8 = "str2";
console.log(str7 !== str8); // true

// a variable is always equal to self.
console.log(str7 !== str7); // false
console.log(str8 !== str8); // false
```

**Camparing booleans :**
```js
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
```

**Camparing arrays :**
```js
// always true as arrays are of reference type even though they look same.

// comparison is based upon their memory reference and type 
const array7 = [1,2,3,4,5,6]; // 0X12 (memory reference)
const array8 = [1,2,3,4,5,6]; // 0X56 (memory reference)

console.log(array7 !== array8); // 0X12 !== 0X56 => true
```

**Camparing objects :**
```js
// always true as objects are of reference type even though they look same.
 
// comparison is based upon their memory reference and type
const object7 = { key1: "value1" }; // 0X12 (memory reference)
const object8 = { key1: "value1" }; // 0X56 (memory reference)

console.log(object7 !== object8); // 0X12 !== 0X56 => true 
```

**Camparing functions :**
```js
// always true as functions are of reference type even though they look same.

// comparison is based upon their memory reference and type
const func7 = function() {console.log("hello")};  // 0X12 (memory reference)
const func8 = function() {console.log("hello")};  // 0X56 (memory reference)

console.log(func5 !== func6); // 0X12 !== 0X56 => true
```

## # Camparing number with string : 
```js
// comparison based upon their value and type
"0.25" !== 0.25; // true
"45" !== 45;     // true
"1f" !== 1;      // true
// values might seem similar but types are different => true
```

## # Camparing number with booleans : 
```js
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
```

## 5. Greater than operator '>' :
**It campare two entities based upon their value.**
* It returns true if L.H.S is greater than R.H.S.
* It returns false if L.H.S is not greater than R.H.S.

**Its for numbers to campare, Other datatypes always give false.**
```js
// number literals
4 > 5;    // false
10 > 0.2; // true

// variable of type number
let age = 15;
age > 18; // false
```

* Apart from number any camparison of other data types among themself using
greater than operator always give error.
* Comparing them is also illogical.


## 6. Less than operator '<' :
**It campare two entities based upon their value.**
* It returns true if L.H.S is less than R.H.S.
* It returns false if L.H.S is not less than R.H.S.

**Its for numbers to campare, Other datatypes always give false.**
```js
// number literals
4 > 5;    // true
10 > 0.2; // false

// variable of type number
let num = 15;
num < 18; // true
```

* Apart from number any camparison of other data types among themself using
less than operator always give error.
* Comparing them is also illogical.


## 7. Greater than and equal to operator '>=' :
**It campare two entities based upon their value.**
* It returns true if L.H.S is either greater than or equal to R.H.S.
* It returns false if L.H.S is neither greater than nor equal to R.H.S.

**Its for numbers to campare, Other datatype always give false.**
```js
// number literals
4 >= 5;     // false
10 >= 0.2;  // true as 10 == 2 => false but 10 > 2 => true. 
"25" >= 25; // true as "25" > 25 => false but "25" == 25 => true (loose) checking

// variable of type number
let number = 29;
console.log(number >= 5); // true
```

* Apart from number any camparison of other data types among themself using
less than operator always give error.
* Comparing them is also illogical.


## 8. Less than and equal to operator '<=' :
**It campare two entities based upon their value.**
* It returns true if L.H.S is either less than or equal to R.H.S.
* It returns false if L.H.S is neither less than nor equal to R.H.S.

**Its for numbers to campare, Other datatype always give false.**
```js
// number literals
4 <= 5;     // true
10 <= 0.2;  // false as 10 == 2 => false and 10 < 2 => false. 
"25" <= 25; // true as "25" < 25 => false but "25" == 25 => true (loose) checking

// variable of type number
let integer = 29;
console.log(integer <= 5); // false
```

* Apart from number any camparison of other data types among themself using
less than operator always give error.
* Comparing them is also illogical.

****