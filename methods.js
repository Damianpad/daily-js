// Write a JavaScript function that takes a string and an index as parameters and returns the character at the specific index:

function specificIndex(str, i){
    return str.charAt(i);
}

let myStr = "Hello";

console.log(specificIndex(myStr, 0));

// Write a JavaScript function that takes a string and an index as parameters and returns the unicode value of the character at the specified index

function myUnicode(str, i){
    return str.charCodeAt(i)
}

console.log(myUnicode(myStr, 1));
