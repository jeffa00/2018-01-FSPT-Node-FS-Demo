// In the beginning there was "var".
// As of ES 6 we get new options: "const" and "let".
// "let" replaces "var" with some improvements.
// "const" is an addition. It means you can't change the variable once you create it.

// If we try to change myNumber later it will make an error.
const myNumber = 3;

let myFunction = function myFunction(){
    let myOtherNumber = 5;
    console.log(myNumber);
    console.log(myOtherNumber);
    // myNumber = 7;
}

myFunction();

console.log(myOtherNumber);