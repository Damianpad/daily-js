// Write a JavaScript function that takes an array as input and returns the length of the array

function arrLength(arr) {
  return arr.length;
}

let fruits = ["apple", "orange", "banana", "grape"];

console.log(`solution #1: ${arrLength(fruits)}`);

// Write a JavaScript function that takes a string as input and returns the length of the string

function strLength(str) {
  return str.length;
}

let myStr = "Hello";

console.log(`solution #2: ${strLength(myStr)}`);

//  Write a JavaScript function that calculates the length of a string without using the built-in .length property or any iteration (loops)

function newStrLength(str, count = 0) {
  if (str === "") {
    return count;
  } else {
    return newStrLength(str.slice(1), count + 1);
  }
}

console.log(`solution #3: ${newStrLength(myStr)}`);
