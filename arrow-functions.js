/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b){
//     return a + b;
// }
// let sum = addTwoNumbers(2,7);
// console.log(sum);
// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     return a + b;
// }
// let sum = addTwoNumbers(2,7);
// console.log(sum);
// Single Line Arrow Function With Parameters
const addTwoNumbers = (a,b) => a + b;
console.log(addTwoNumbers(2,7));

// Implicit Returns
const saySomething = message => console.log(message); //with only a single parameter passed
saySomething('Hi Peter!');

const sayGoodbye = () => console.log('Goodbye!'); //youmjust use empty parenthesis when no parameters are to be passed.
sayGoodbye();
// Returning Multiple Lines
const returnMutlipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
) //multiple line returns must be wrapped in parentheses
console.log(returnMutlipleLines());