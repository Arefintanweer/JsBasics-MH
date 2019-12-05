/*
Operators : To create expression,with expression we implement codes(algos).

Operators Types:
  arithmetic
  assignment
  comparison
  ternary operator
  logical
  bitwise
*/

//Arithmetic-Operators: + , - , * , / , % , **, ++ , --
console.log(5 % 2);
console.log(4 % 2);
console.log(5 ** 2);

let x = 10;
//console.log(++x);
console.log(x++);
console.log(x);

//Assignment-Operators: = , += , -= , *= , /= , %=

//Comparison-Operator: always return booleans

/*
  Realtional: >, >= , <, <=
  Equality : == ,!= , === 
*/

//Difference between == and ===
//Strict equality operator(===) : checks value + datatype,if datatype and value both are same it gives true
console.log(1 === 1);
console.log('1' === 1);
//lose quality operator(==) : it only checks the value.if types dont match then it checks left side operand type and change the right side operand type automitaclly to that type. 
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
console.log(true == 2);

//Ternary-Operator/Conditional Operator:
let points = 100;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

//Logical-Operator : && , || , !

//&&
console.log(true && true);
console.log(true && false);
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//||
console.log(true || true);
console.log(true || false);
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

//Not (!)
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

//The result of logical operator is not only boolean but can be other types.Its called Truthy or Falsy.

//Falsy -Not a boolean false.
/*
  Falsy values can be :
    undefined
    null
    0
    false
    ''
    NaN
*/
//Truthy : Anything that is not Falsy is Truthy.
console.log(false || 'Tanweer');
console.log(false || 1);
console.log(false || 1 || 2);

//short-circuiting
let userColor = 'red';
//userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

//Bitwise-Operator : | , &
/*
  1 = 00000001
  2 = 00000010
  bitwise -or :  00000011 = 3
  bitwise -and : 00000000 = 0
*/
console.log(1 | 2);
console.log(1 & 2);

//Read,write,execute
//00000100 - read permission
//00000110 - write permission
//00000001 - all of these permission

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message =
  (myPermission & readPermission) ? 'Yes' : 'No';

console.log(message);

//Operator - Precedence : (2+3) * 4 = 20

//exercise-swap variables value
let a = 'red';
let b = 'blue';
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);