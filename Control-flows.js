/*
  Control-flows:
    Conditional Statements
    Loop
*/
/*
  2 types of Conditional Statements
    1.If - else
    2.Switch - case
*/
//If-else
let hour = 20;

if (hour >= 6 && hour <= 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour <= 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
//switch-case
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator user");
    break;

  default:
    console.log("Unknown User");
}

//Loops - for , while , do-while ,Infinite loop,for-in,for-of

//for
for (let i = 1; i <= 5; i++) {
  //console.log('hello world', i);
  if (i % 2 == 0) {
    console.log("even", i);
  }
}
//while
let i = 1;
while (i <= 5) {
  if (i % 2 == 1) {
    console.log("Odd", i);
  }
  i++;
}
//Do-while
i = 9;
do {
  if (i % 2 == 1) {
    console.log("Odd", i);
    i++;
  }
} while (i <= 5);
//Infinite while loop
// i = 0;
// while (i < 5) {
//   console.log(i);
//   //i++
// }
// //infinite while loop
// while (true) {

// }
// //infinte for loop
// for (let i = 0; i < 10;) {

// }

//For-in : used in objects
const person = {
  name: "Arefin",
  age: 25
};
for (let key in person) {
  console.log(key, person[key]);
}

//for-of : used in arrays
const colors = ["red", "blue", "green"];

//es5
// for (let i in colors) {
//   console.log(i, colors[i]);

// }
//Es6
for (let color of colors) {
  console.log(color);
}

//Break and continue For loops
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
    //continue;
  }
  console.log(i);
}

//exercise-Max of two numbers
function MaxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let result = MaxNumber(3, 2);
console.log(result);

//exercise-Landscape or Portrait
function isLandscape(width, height) {
  if (width > height) {
    return true;
  } else {
    return false;
  }
}
let flag = isLandscape(300, 200);

if (flag == true) {
  console.log("Image is Land scape");
}
if (flag == false) {
  console.log("Image is Portrait");
}

//exercise-FizzBuzz
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return NaN;
  }
  if (input % 3 == 0 && input % 5 == 0) {
    return "FizzBuzz";
  }

  if (input % 3 == 0) {
    return "Fizz";
  }

  if (input % 5 == 0) {
    return "Buzz";
  } else {
    return input;
  }
}
//Exercise - demerit Points

function checkSpeed(speed) {
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  } else {
    point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point > 12) {
      console.log("License Suspended");
    } else {
      console.log("points", point);
    }
  }
}
let speedLimit = 70;
let kmPerPoint = 5;
let point;
console.log(checkSpeed(75));

//Exercise-Even or Odd
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(i, "Even");
    } else {
      console.log(i, "Odd");
    }
  }
}
console.log(showNumbers(10));

//Exercise-Count truthy
let array = [1, 2, 3];
let count = 0;
function countTruthy(array) {
  for (value of array) {
    if (value) {
      count++;
    }
  }
  console.log(count);
}
console.log(countTruthy(array));

//Exercise-String Properties
const movie = {
  title: "a",
  releaseYear: 2006,
  rating: 4.5,
  director: "b"
};
showProperties(movie);
function showProperties(obj) {
  for (key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

//exercise-Sum of multiples of 3 and 5
let sum = 0;
const limit = 10;
for (let i = 0; i <= limit; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i;
  }
}
console.log(sum);

//exercise-Grade
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let avg = sum / marks.length;

  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}
//Exercise-stars
const rows = 5;
showStars(rows);
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
//Exercise - Prime Numbers
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number < limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
}
