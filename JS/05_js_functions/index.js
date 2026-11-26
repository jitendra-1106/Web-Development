console.log("Functions");

// A function is a reusable block of code
// that performs a specific task.
// We can call a function whenever we need to execute it.


// 1. Function Declaration with Parameters:
// name is a parameter that receives a value when the function is called.
function nice(name){
    console.log("Hey" + name + " you are nice!")
    console.log("Hey" + name + " you are good!")
    console.log("Hey" + name + " your tshirt is nice!")
}

// Calling the function and passing an argument
nice("Jitendra");


// 2. Function with Multiple Parameters and Default Parameter:
// a and b are parameters.
// c = 3 is a default parameter.
// If no value is passed for c, JavaScript uses 3.
function sum(a, b, c = 3){
    //console.log(a+b+c)
    console.log(a, b, c)
    return a + b + c
}

// Only one argument is passed to the function.
// a receives 2, b becomes undefined, and c uses its default value 3.
// Since undefined is involved in addition, the result becomes NaN (Not a Number).
result = sum(2)
result1 = sum(3, 2)
result2 = sum(7, 5)
// The default value of c is replaced by 1.
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// 3. Arrow Function:
// An arrow function is a shorter way to write a function.
// It uses the => (arrow) syntax.
const func1 = (x)=>{
    // x receives the argument passed during the function call
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);