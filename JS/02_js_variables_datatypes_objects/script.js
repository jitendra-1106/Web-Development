// Display a message in the console
console.log("Hey I am Jitendra")

// var is used to declare a variable
var a = 5;

// We can change the value of a variable
// a = a + 7;

// String variable
var b = "Jitendra Kumar";

// Variable names cannot start with a number
// var 55a = "Rohan"; // Not Allowed

console.log(a, b)

// typeof is used to check the data type of a value
console.log(typeof a, typeof b)

// JavaScript allows combining strings and numbers
// console.log(a +  b + 8)

// const is used to declare a constant
const c = 2;

// We cannot reassign a new value to a constant
// c = c + 6;

console.log(c)

// let is block-scoped
let a1 = 7;
let Jitendrak = 29;
let Jitendraj = 30;

console.log(a1, Jitendrak, Jitendraj)

// Block scope example
{
    // var is function-scoped, not block-scoped
    var a = 65;
    var d = 6;

    // let is block-scoped
    let a2 = 66;

    // Allowed because a1 is declared outside this block
    console.log(a1)

    // Allowed because a2 is accessed inside its block
    console.log(a2)

    // Allowed because var is not restricted to this block
    console.log(a)
}

// The updated value of a is accessible outside the block
console.log(a)

// var declared inside a block is accessible outside it
console.log(d) 

// let declared inside a block cannot be accessed outside it
// console.log(a2) // ReferenceError

//Primitive data types
let x = "Jitendra bhai"; // String
let y = 22;              // Number (integer)
let z = 3.55;            // Number (decimal)
const p = true;          // Boolean
let q = undefined;       // Undefined
let r = null;            // Null (intentional absence of value)

// null is a primitive data type, but typeof null returns "object".
// This is a historical JavaScript bug from its early implementation.
// It is kept for backward compatibility so that old JavaScript code does not break.

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


// Non-Primitive Data Type: Object
// An object stores data in key-value pairs
let o = {
    //name: "Jitendra",
    "name": "Jitendra",
    "job code": 5600,
    "is_handsome": true
};

// Display the complete object
console.log(o);

// Add a new property to the object
o.salary = "100crores";
console.log(o);

// Update the existing salary property
o.salary = "500crores";
console.log(o);

// A semicolon (;) is used to mark the end of a statement.
// JavaScript automatically inserts semicolons in many cases (Automatic Semicolon Insertion - ASI).
// Therefore, semicolons are often optional.
// However, using semicolons consistently is a good practice to avoid unexpected errors.