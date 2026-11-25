// Displays a popup message on the webpage
alert("Hello World");

// Prints messages in the browser console (Developer Tools)
console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like a wow...")

// Takes input from the user through a popup and stores it in variable 'a'
var a = prompt("Enter your number")

// Displays a confirmation popup with OK and Cancel buttons
// OK returns true, while Cancel returns false
var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")

if(isTrue){
    console.log("Computer is blasting")
}

else{
    console.log("Computer is not blasting")

}

// Displays the value entered by the user in the console
console.log("Your number is " + a)

// Changes the title of the webpage (browser tab) using JavaScript
document.title = "Hey I am good"

// Changes the background color of the entire webpage to red
// document.body.style.backgroundColor = "red"