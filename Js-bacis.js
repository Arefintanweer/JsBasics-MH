//Variables
let name = 'Tanweer';
console.log(name);

let firstname = 'Arefin',
  lastname = 'Tanweer';

/*
variable naming rules:
  cannot be a reserved keyword
  should be meaningful
  cannot start with number
  cannot contain space and hyphen(-)
  case-sensitive
*/

//Constants -value cannot be re-assigned
const PI = 3.1416;
console.log(PI);

//Primite-Types/Value-Types
/*
  String
  Numbers
  Boolean
  undefined
  null
*/
//String
let Name = 'Tanweer';
//Numbers
let age = 30;
//Boolean
let isApproved = true;
//undefined
let value;
//null
let color = null;

//Dynamic Language : variable type can be chnged during runtime.In static language variable type cannot be changed during runtime.
console.log(typeof (age));
age = 30.5;
console.log(typeof (age));

//Refrence-Type
/* 
  Object
  Array
  function
*/
//object
let person = {
  name: 'Arefin Tanweer',
  age: 25
};
console.log(person);

person.name = 'Ahmed';
person['age'] = 50;
console.log(person);
console.log(person.name);
console.log(person.age);

//Array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[3] = 'green';
console.log(selectedColors);
selectedColors.push(5);
console.log(selectedColors);
console.log(selectedColors.length);

//function
function greet(name, lastname) {
  console.log("Hi" + lastname + name);

}
name = 'Arefin'; //parameter = name,argument = 'Arefin'
lastname = " ";
console.log(greet(name, lastname));

//Types of function
/*
  perfoming a task
  calculating a value
*/
function square(number) {
  return number * number;
}
console.log(square(2));