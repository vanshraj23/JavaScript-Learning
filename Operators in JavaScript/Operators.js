/*
   # Operators in JavaScript :
   ---------------------------
   In programming, operators are special symbols or keywords used to perform operations on variables and values. 
   They are a fundamental part of expressions and statements.
*/

// 1. Arithmetic Operators

// | Operator | Description         | Example     |
// |----------|---------------------|-------------|
// | `+`      | Addition            | `a + b`     |
// | `-`      | Subtraction         | `a - b`     |
// | `*`      | Multiplication      | `a * b`     |
// | `/`      | Division            | `a / b`     |
// | `%`      | Modulus (remainder) | `a % b`     |
// | `**`     | Exponentiation      | `a ** b`    |
// | `++`     | Increment           | `a++`       |
// | `--`     | Decrement           | `a--`       |

// 2. Assignment Operators

// | Operator | Description                     | Example        |
// |----------|---------------------------------|----------------|
// | `=`      | Assign                          | `a = b`        |
// | `+=`     | Add and assign                  | `a += b`       |
// | `-=`     | Subtract and assign             | `a -= b`       |
// | `*=`     | Multiply and assign             | `a *= b`       |
// | `/=`     | Divide and assign               | `a /= b`       |
// | `%=`     | Modulo and assign               | `a %= b`       |
// | `**=`    | Exponent and assign             | `a **= b`      |
// | `<<=`    | Left shift and assign           | `a <<= b`      |
// | `>>=`    | Right shift and assign          | `a >>= b`      |
// | `>>>=`   | Unsigned right shift and assign | `a >>>= b`     |
// | `&=`     | Bitwise AND and assign          | `a &= b`       |
// | `^=`     | Bitwise XOR and assign          | `a ^= b`       |
// | `|=`     | Bitwise OR and assign           | `a |= b`       |
// | `&&=`    | Logical AND and assign          | `a &&= b`      |
// | `||=`    | Logical OR and assign           | `a ||= b`      |
// | `??=`    | Nullish coalescing and assign   | `a ??= b`      |

// 3. Comparison Operators

// | Operator | Description               | Example     |
// |----------|---------------------------|-------------|
// | `==`     | Equal to (loose)          | `a == b`    |
// | `!=`     | Not equal to (loose)      | `a != b`    |
// | `===`    | Equal to (strict)         | `a === b`   |
// | `!==`    | Not equal to (strict)     | `a !== b`   | 
// | `>`      | Greater than              | `a > b`     |
// | `<`      | Less than                 | `a < b`     |
// | `>=`     | Greater than or equal to  | `a >= b`    |
// | `<=`     | Less than or equal to     | `a <= b`    |

// 4. Logical Operators

// | Operator | Description          | Example     |
// |----------|----------------------|-------------|
// | `&&`     | Logical AND          | `a && b`    |
// | `||`     | Logical OR           | `a || b`    |
// | `!`      | Logical NOT          | `!a`        |
// | `??`     | Nullish coalescing   | `a ?? b`    |

// 5. Bitwise Operators

// | Operator | Description            | Example     |
// |----------|------------------------|-------------|
// | `&`      | AND                    | `a & b`     |
// | `|`      | OR                     | `a | b`     |
// | `^`      | XOR                    | `a ^ b`     |
// | `~`      | NOT                    | `~a`        |
// | `<<`     | Left shift             | `a << 2`    |
// | `>>`     | Right shift            | `a >> 2`    |
// | `>>>`    | Unsigned right shift   | `a >>> 2`   |

// 6. String Operators

// | Operator | Description       | Example      |
// |----------|-------------------|--------------|
// | `+`      | Concatenation     | `"a" + "b"`  |
// | `+=`     | Append and assign | `str += "!"` |

// 7. Conditional (Ternary) Operator

// | Operator | Description      | Example                    |
// |----------|------------------|----------------------------|
// | `? :`    | Ternary operator | `condition ? val1 : val2`  |

// 8. Type Operators

// | Operator    | Description                  | Example         |
// |-------------|------------------------------|-----------------|
// | `typeof`    | Returns type as string       | `typeof a`      |
// | `instanceof`| Checks object type           | `a instanceof B`|

// 9. Spread and Rest Operators

// | Operator | Description             | Example        |
// |----------|-------------------------|----------------|
// | `...`    | Spread / Rest syntax    | `...array`     |

// 10. Comma Operator

// | Operator | Description                       | Example             |
// |----------|-----------------------------------|---------------------|
// | `,`      | Evaluates multiple expressions    | `(x = 1, y = 2)`    |

// 11. Other Special Operators

// | Operator | Description                 | Example           |
// |----------|-----------------------------|-------------------|
// | `delete` | Deletes a property          | `delete obj.prop` |
// | `in`     | Checks if property exists   | `"x" in obj`      |
// | `void`   | Returns `undefined`         | `void expression` |
// | `new`    | Creates a new instance      | `new Object()`    |