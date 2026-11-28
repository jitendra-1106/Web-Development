// DOM Traversal Properties:
// These properties help us navigate between parent, child and sibling nodes/elements in the DOM tre
console.log("DOM")

console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.firstChild)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[2].nextElementSibling)
console.log(document.body.firstElementChild.children[2].previousElementSibling)
console.log(document.body.firstElementChild.children[2].nextSibling)
console.log(document.body.firstElementChild.children[3].parentElement)
console.log(document.body.children)
console.log(document.body.children[1])
console.log(document.body.children[1].rows)


// Accessing the container element using childNodes
let cont = document.body.childNodes[1]

// Displaying the container element
console.log(cont)

// Accessing all child nodes (text, comments and elements)
console.log(cont.childNodes)

// Accessing the first child node
console.log(cont.firstChild)

// Accessing the last child node
console.log(cont.lastChild)

// Accessing the first HTML element child
console.log(cont.firstElementChild)

// Accessing the last HTML element child
console.log(cont.lastElementChild)

// Changing the text color of the last box to red
cont.lastElementChild.style.color = "red"

// Accessing the parent element of the last box
console.log(cont.lastElementChild.parentElement)


// childNodes: Returns all child nodes, including text nodes, comment nodes and element nodes.
// children: Returns only child element nodes.
// firstChild: Returns the first child node, including text and comment nodes.
// firstElementChild: Returns the first child element.
// lastChild: Returns the last child node, including text and comment nodes.
// lastElementChild: Returns the last child element.
// nextSibling: Returns the next sibling node, including text and comment nodes.
// nextElementSibling: Returns the next sibling element.
// parentElement: Returns the parent HTML element.