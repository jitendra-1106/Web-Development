console.log("strings")

// 1. String Indexing:
// A string is a sequence of characters.
// Each character has an index starting from 0.
// We can access individual characters using square brackets [].
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// Index 5 does not exist in this string, so it returns undefined.
// console.log(a[5]);

// 2. String Length:
// The length property returns the total number of characters in a string.
// It counts spaces and special characters as well.
console.log(a.length)


// 3. String Concatenation:
// Concatenation means joining two or more strings together.
let real_name = "Harry"
let friend = "Rohan"
// let name = "Harry"
// console.log("His name is " + name + " and his friends name is " + friend)
// "name" is a deprecated global property associated with the browser's Window object.
// VS Code shows it with a strikethrough to indicate that it is deprecated.

// We can join strings using the + operator.
console.log("His name is " + real_name + " and his friends name is " + friend)

// 4. Template Literals:
// Template literals use backticks (` `) instead of single or double quotes.
// They allow us to insert variables directly using ${}.
// This makes string creation easier and more readable.
console.log(`His name is ${real_name} and his friends name is ${friend}`)

// 5. String Methods:
// String methods do not modify the original string.
// Instead, they return a new string with the applied changes.
let b = "Shivam"
console.log(b.length) 
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 
console.log(b.concat(a))
console.log(b.concat(a, "Aishwariya"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))


let c = "Shivamsh"
// replace() replaces the first matching occurrence of a value
console.log(c.replace("Sh", "77"))

// Displaying the original string.
// String methods return a new string without modifying the original string.
// This behavior is called immutability.
console.log(b)