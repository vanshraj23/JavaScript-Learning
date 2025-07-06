# # Assigment Operators : 

## 1. Assign operator '=' :
**It is used to initialize and update the variable with a value. :**
```js
// Initializing a variable to a value 
let number = 5;
var string = "text";
const pi = 3.14;

// Updating the value of variable 
number = 25;
string = "newText";
// const variable cannot be updated.
````

## 2. Add and assign operator '+=' :
**It is used to add the R.H.S to L.H.S and update the L.H.S with computed value:**

**Numbers :**
```js
// updating a variable with another variable by adding them.
var num1 = 5;
var num2 = 5;
num1 += num2;      // num1 = num1 + num 2;
console.log(num1); // 10

// updating a variable with it's own value by adding them.
var num = 5;
num += num;        // num = num + num;     
console.log(num);  // 10
```

**Strings :**
```js
// it concatenates the strings and returns a new string.
// First with other string.
let str1 = "str1";
let str2 = "str2";
str1 += str2;     // str1 = str1 + str2;
console.log(str1) // str1str2
str2 += str1;     // str2 = str2 + str1;
console.log(str2) // str2str1str2

// Second with itself
let str = "str";
str += str;        // str = str + str;
console.log(str);  // strstr
```

## 3. Substract and assign operator '-=' :
**It is used to substract the R.H.S from L.H.S and update the L.H.S with computed value**:

**Numbers :**
```js
// updating a variable with another variable by substracting them.
var num1 = 8;
var num2 = 5;
num1 -= num2;      // num1 = num1 - num 2;
console.log(num1); // 2

// updating a variable with it's own value by substracting them.
var num = 5;
num -= num;        // num = num - num;     
console.log(num);  // 0
```

**Strings : Does not support it.**


## 4. Multiplication and assign operator '*=' :
**It is used to Multiple the R.H.S with L.H.S and update the L.H.S with computed value:**

**Numbers :**
```js
// updating a variable with another variable by multiplying them.
var num1 = 8;
var num2 = 5;
num1 *= num2;      // num1 = num1 * num 2;
console.log(num1); // 40

// updating a variable with it's own value by multiplying them.
var num = 5;
num *= num;        // num = num * num;     
console.log(num);  // 25
```

**Strings : Does not support it.**


## 5. Division and assign operator '/=' :
**It is used to Divide the L.H.S by R.H.S and update the L.H.S with computed value:**

**Numbers :**
```js
// updating a variable with another variable by dividing them.
var num1 = 8;
var num2 = 5;
num1 /= num2;      // num1 = num1 / num 2;
console.log(num1); // 1.6

// updating a variable with it's value by dividing them.
var num = 5;
num /= num;        // num = num / num;     
console.log(num);  // 1
```

**Strings : Does not support it.**

## 6. Modulus and assign operator '%=' :
**It is used to get the remainder of L.H.S / R.H.S and update the L.H.S with computed value:**

**Numbers :**
```js
// updating a variable with another variable by the remainder.
var num1 = 8;
var num2 = 5;
num1 %= num2;      // num1 = num1 % num 2;
console.log(num1); // 3

// updating a variable with it's value by the remainder.
var num = 5;
num %= num;        // num = num % num;     
console.log(num);  // 0
```

**Strings : Does not support it.**

## 7. Exponentiation and assign operator '**=' 
**It is used to raise L.H.S to the power of R.H.S and update the L.H.S with computed value:**

**Numbers :**
```js
// updating a variable with another variable by exponentiating them.
var num1 = 2;
var num2 = 5;
num1 **= num2;      // num1 = num1 ** num 2;
console.log(num1);  // 32

// updating a variable with it's value by expoentiating them.
var num = 2;
num **= num;        // num = num ** num;     
console.log(num);   // 4
```

**Strings : Does not support it.**

*************************************************************************