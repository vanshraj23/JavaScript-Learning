# # Arthematic Operator on Numbers : 

## # Addition operator '+' : 

**Integers :** 
```js
let num1 = 5;
let num2 = 6;
let sum = num1 + num2 // 5 + 6
console.log(sum);     // 11
```

**Floating point numbers :**
```js 
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 + num2; // 0.1 + 0.2
console.log(sum)       // 0.30000000000000004
// wired behaviour of javaScript with floating point numbers when they get add.
```

## # Substraction operator '-' : 

**Integers :**
```js 
let num1 = 5;
let num2 = 6;
let sum = num1 - num2 // 5 - 6
console.log(sum);     // -1
```

**Floating point numbers :**
```js 
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 - num2; // 0.1 - 0.2 
console.log(sum)       // -0.1
```
## # Multiplication operator '*' : 

**Integers :**
```js
let num1 = 5;
let num2 = 6;
let sum = num1 * num2 // 5 * 6
console.log(sum);     // 30
```

**Floating point numbers :**
```js 
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 - num2; // 0.1 * 0.2 
console.log(sum)       // 0.03
```

## # Division operator '/' : 

**Integers :**
```js 
let num1 = 5;
let num2 = 6;
let sum = num1 * num2; // 5 / 6
console.log(sum);      // 0.83333
```

**On dividing with zero gives infinity :**
```js
let num1 = 10;
let num2 = 0;
let sum = num1 / num2; // 10 / 0
console.log(sum) // Infinity
```

**Floating point numbers :**
```js
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 / num2; // 0.1 / 0.2 
console.log(sum)       // 0.5
```

## # Modulus operator (remainder) '%' : 

**Integers :** 
```js
// case 1 num2 divides completely num1.
let num1 = 10;
let num2 = 5;
let result = num1 % num2; // 10 % 5
console.log(result);      // 0

// case 2 num4 divides not completely num3.
let num3 = 10;
let num4 = 4;
let result = num3 % num4; // 10 % 4
console.log(result);      // 2
```

**If denominator is greater than nominator then it will give nominator itself :**
```js
let num1 = 5;
let num2 = 6;
let result = num1 / num2; // 5 / 6
console.log(result) // 5
```

**Floating point numbers :**
```js 
let num1 = 0.5;
let num2 = 0.2;
let result = num1 / num2; // 0.5 / 0.2 
console.log(result)       // 0.9999999
```

## # Exponential operator '**' : 
```js
// base is +ve
let base = 2;
let exponet = 5;
let result = base ** exponet; // 2 ** 5
console.log(result);          // 32

// base is -ve, follow the synatx
let base = -2;
let exponet = 5;
let result = (base) ** exponet; // (-2) ** 5
console.log(result);            // -32
```
* Both base and exponent can be floating points and negative.
* Better to use base as integers.


## # Increment operator '++' :
It increments variable by +1 value.

**Integers :**
```js
let number = 5;

// pre increment
console.log(++number); // 6 
// first it increments the number then uses it.

// post increment
console.log(number++); // 6 
console.log(number);   // 7 
// first it uses the number then increments it.
```

**Floating point numbers :**
```js
let number = 0.5;

// pre increment
console.log(++number); // 1.5 
// first it increments the number then uses it.

// post increment
console.log(number++); // 1.5
console.log(number);   // 2.5
// first it uses the number then increments it.
```

**Important ++ works with only variables declared with let and var. :**
```js
// Incrementing const variable gives error :
const number1 = 5;
++number1 // will giver error

// Incrementing number literals gives error :
5++;   // error
++0.5; // error
```

## # Decrement operator '--' :
It decrements variable by -1 value.

**Integers :**
```js 
let number = 5;

// pre increment
console.log(--number); // 5 
// first it increments the number then uses it.

// post increment
console.log(number--); // 5 
console.log(number);   // 4 
// first it uses the number then increments it.
```

**Floating point numbers :**
```js
let number = 2.5;

// pre decrement
console.log(--number); // 1.5 
// first it decrementsts the number then uses it.

// post decrement
console.log(number--); // 1.5
console.log(number);   // 0.5
// first it uses the number then decrements it.
```

**Important -- works with only variables declared with let and var. :**
```js
// Decrementing const variable gives error :
const number2 = 5;
--number2 // will giver error

// Decrementing number literals gives error :
5--;   // error
--0.5; // error
```
***********************************************************************