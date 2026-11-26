console.log("conditional Statements")

let age = 1;
// let grace = 2;

// Add grace to the existing value of age
// age += grace

// Perform different arithmetic operations
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age % grace)

// Exponentiation operator (raises age to the power of grace)
// console.log(age ** grace)

/*
I am a 
multiline 
comment
*/

// if-else if-else Conditional Statements:
if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


// Ternary operator:
a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c);
/*
Equivalent if-else statement:

let c;

if (a > b) {
    c = a - b;
}
else {
    c = b - a;
}
*/

// We can type "node" in PowerShell and press Enter to start the Node.js REPL.
// REPL (Read-Evaluate-Print Loop) allows us to execute JavaScript code directly.
// We can test JavaScript operations, conditions, variables and expressions.
// Node.js uses the V8 JavaScript engine to execute JavaScript code.