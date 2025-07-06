// # Conditional statements : 
// --------------------------

// It lets us take the control of the follow of the execution of a program
// on the bases of conditions to execute a specific set of instructions (block).


// 1. if-else construct :
// ---------------------

// Flow of execution :

//        |
//  [instructions]
//        |
//        |
//   -------------   
//   | condition |--? false----[set1 of instructions]--|
//   -------------                                     |
//        |                                            |
//    ?  true                                          |
//        |                                            | 
//        |                                            |
// [set2 of instructions]                              |
//        |                                            |
//        |-------------------------------------[instructions]
//                                                     |
//                                                     |

// # Examples : 
let age = 18;

if (age >= 18) 
{
    console.log("you can play game");    
}
else
{
    console.log("you cannot play the game");
}

let num = 2;

if (num % 2 === 0) 
{
    console.log("Even number!");
}
else
{
    console.log("Odd Number!");
}

// Nested if-esle : 
//-----------------

// if-else inside other if-else

let num1 = 4;
let num2 = 5;
let num3 = 6;

if (num1 > num2)
{
    if (num1 > num3)
    {
        console.log("num1 is greatest");
    }
    else
    {
        console.log("num3 is greatest");
    }
}
else 
{
    if (num2 > num3)
    {
        console.log("Num2 is greatest");
    }
    else
    {
        console.log("num3 is greatest");
    }
}

// if-else ladder (else if) : 
//---------------------------

let number1 = +prompt("Enter number1 : ");
let number2 = +prompt("Enter number2 : ");
let choice = prompt("Enter operator (*,+,-,/) : ");

if (choice === '+') {
    console.log(number1 + number2);
} else if (choice === '-') {
    console.log(number1 - number2);
} else if (choice === '*') {
    console.log(number1 * number2);
} else if (choice === '/') {
    if (number2 !== 0) {
        console.log(number1 / number2);
    } else {
        console.log("Can't divide by zero");
    }
} else {
    console.log("Invalid choice");
}


// 2. Ternary operator '?' :
//-------------------------

// It is short form for the if-else, if there is single pair of if-else.
// # Syntax :
// condition ? expression1 : expression2;

// It returns expression1 when if condition becames true else expression2

let number = 5;
let isEven = number % 2 === 0 ? true : false;
isEven ? console.log("even") : console.log("odd");


// 3. Switch-case Construct:
//---------------------

// It is a better silution for the if-else ladder.
// It checks all the cases defined if a specific case matches
// it will run that case else if no case matches it default will run

let day = +prompt("Enter number of day:");

switch (day) 
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("inavlid day");
        break;
}

// Remember to put the break in every case. 
// if not it will run all the case untill it find the break keyword
// if any of case match with expression.