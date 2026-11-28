// JavaScript DOM Selecting Methods:
// Used to select HTML elements from the DOM using IDs, classes, tag names and CSS selectors.

console.log("JK")

// Selecting all elements with the class "box" and storing them in a collection
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// Changing the background color of the third box to red
// boxes[2].style.backgroundColor = "red"


// Selecting an element by its ID and changing its background color to red
// document.getElementById("redbox").style.backgroundColor = "red"


// Adds inline CSS to the first element matching the given CSS selector
// document.querySelector(".box").style.backgroundColor = "green";


// querySelectorAll() returns a NodeList of all matching elements
// Using forEach() to change the background color of every selected box
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})

// getElementsByTagName() returns a live HTMLCollection, whereas querySelectorAll() returns a static NodeList.
// Selecting all div elements and storing them in a collection
e = document.getElementsByTagName("div")

// Checks whether the fourth div matches the given CSS selector
e[3].matches("#redbox")

// Checks whether the fifth div matches the given CSS selector
e[4].matches("#redbox")

// Finds the closest ancestor (or itself) matching the given CSS selector
e[3].closest("#redbox")

// Finds the closest ancestor (or itself) with the class "container"
e[3].closest(".container")

// Finds the closest ancestor (or itself) matching the html element
e[3].closest("html")


// Checks whether the container contains the third div
document.querySelector(".container").contains(e[2])

// Checks whether the container contains the first div
document.querySelector(".container").contains(e[0])

// Checks whether the container contains the body element
document.querySelector(".container").contains(document.querySelector("body"))

// Checks whether the body contains the container element
document.querySelector("body").contains(document.querySelector(".container"))