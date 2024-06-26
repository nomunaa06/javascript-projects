const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0, 3);
console.log(newStr)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`
    Original string: ${str}
    Modified string: ${newStr}
    `);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numLetters= Number(input.question("How many letter will be location?"));
newStr = str.slice(numLetters) + str.slice(0, numLetters);
console.log(newStr)
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numLetters>str.length) {
    console.log("Input exceed length of the word.")
    let defaultStr = str.slice(3) + str.slice(0, 3);
    console.log(`we change ${str} into ${defaultStr} using string method`);

}else{
    console.log(`we change ${str} into ${newStr} using string method`);

}