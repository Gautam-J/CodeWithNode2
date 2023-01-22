// print statement
console.log("Hello World!");

// ----------------------------------------------------------------------------

// this is an inline comment

/*
This is
a multi line
comment.
*/

// ----------------------------------------------------------------------------

// declaring variables
var a;
console.log(a); // undefined

var b = 12; // declaring and initializing with assignment operator (=)
console.log(b);

var c = 10;
var c = "Ten";
console.log(c);

let d = 14; // respects scope of declaration
// let d = "Fourteen"; // Will give error
d = "Fourteen";
console.log(d);

const pi = 3.14;
// pi = 3; // Will give error
console.log(pi);

// ----------------------------------------------------------------------------

// arithmetic operators
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(10 % 2);

// relational operators
console.log(20 > 10);
console.log(20 < 10);
console.log(10 == 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 === 10);

// Logical Operators
console.log(true && false); // logical AND operator
console.log(true || false); // logical OR operator
console.log(!true); // logical NOT operator
console.log(!false);

// ----------------------------------------------------------------------------

// if else statement
if (10 > 20) {
  console.log("10 is greater than 20");
} else if (20 === 10) {
  console.log("20 is greater than 10");
} else {
  console.log("both statements are false");
}

// ----------------------------------------------------------------------------

// for loop
console.log("For Loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
console.log("While Loop");
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while loop
console.log("Do while Loop");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// ----------------------------------------------------------------------------

// switch case
let action = "READ";
switch (action) {
  case "READ":
    console.log("reading the file");
    break;
  case "WRITE":
    console.log("writing the file");
    break;
  default:
    console.log("unsupported operation");
}

// ----------------------------------------------------------------------------

// ternary operation
let p = 9;
let q = 4;
let result = p > q ? "p is greater than q" : "p is not greater than q";
console.log(result);

// ----------------------------------------------------------------------------

// template literal
let username = "Gautam";
console.log(`My name is ${username}`);

// ----------------------------------------------------------------------------

// functions
function addNumbers(a, b) {
  return a + b;
}

let ans = addNumbers(1, 2);
console.log(ans);

// arrow functions
const addNum = (a, b) => {
  return a + b;
};

ans = addNum(1, 2);
console.log(ans);

// ----------------------------------------------------------------------------

// arrays
var ourArray = ["Gautam", 20];

console.log(ourArray);
ourArray[1] = 21;
console.log(ourArray);

var nestedArrays = [
  ["A", 1],
  ["B", 2],
];

console.log(nestedArrays[1][0]);

ourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
ourArray.forEach((element) => {
  newArray.push(element * 2);
});
console.log(newArray);

newArray = ourArray.map((num) => num * 2);
console.log(newArray);

let evenNum = ourArray.filter((num) => num % 2 == 0);
console.log(evenNum);

// ----------------------------------------------------------------------------

// objects
let student = {
  name: "Gautam",
  regno: "3",
  dept: "CINTEL",
};

console.log(student["name"]);
console.log(student.regno);
student.dept = "CTECH";
console.log(student.dept);

// ----------------------------------------------------------------------------
