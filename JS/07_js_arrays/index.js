// JavaScript arrays are mutable, which means their elements can be modified.
// Most array methods like push(), pop(), shift(), unshift(), sort(), reverse()
// and splice() modify the original array.

// However, concat(), toString() and join() do not modify the original array.
// They return a new array (concat) or a new string (toString and join).

let arr = [1, 2, 3, 4, 5, 6]
//  Index- 0, 1, 2, 3, 4, 5

// arr[0] = 8
// typeof returns "object" because JavaScript arrays are a type of object
// console.log(arr, typeof arr)
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[5])


// toString() converts array elements into a comma-separated string
// It returns a new string and does not modify the original array
// console.log(arr.toString())
// join() converts array elements into a string using the specified separator
// console.log(arr.join(" and "))


// pop() removes and returns the last element of the array
// It modifies the original array
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.length)


// push() adds a new element at the end of the array
// It returns the new length of the array
// It modifies the original array
// console.log(arr.push("JK"))
// console.log(arr)
// console.log(arr.length)


// shift() removes and returns the first element of the array
// Remaining elements shift one position to the left
// It modifies the original array
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.length)


// unshift() adds a new element at the beginning of the array
// Existing elements shift one position to the right
// It returns the new length of the array
// console.log(arr.unshift("web"))
// console.log(arr)
// console.log(arr.length)


// delete removes an element from the array but does not change its length
// It leaves an empty slot at that index
// console.log(delete(arr[5]))
// console.log(arr)
// console.log(arr.length)


// let a1 = [1, 2]
// let a2 = [3, 4]
// concat() joins two or more arrays and returns a new array
// It does not modify the original arrays
// console.log(a1.concat(a2))


// sort() sorts array elements and modifies the original array
// By default, it sorts elements as strings (lexicographical order)
// console.log(arr.sort())
// console.log(arr)
// console.log(arr.length)


// reverse() reverses the order of elements in the original array
// It modifies the original array
// console.log(arr.reverse())


// splice() can add, remove or replace elements in the original array
// Syntax: splice(startIndex, deleteCount, newElements...)
// let num = [1, 2, 3, 4, 5]
// console.log(num)
// Removes 2 elements starting from index 1 and returns the removed elements
// console.log(num.splice(1, 2))
// num.splice(1, 2)
// console.log(num)

// Removes 2 elements from index 1 and inserts 77 and 88 at that position
// console.log(num.splice(1, 2, 77, 88))
// console.log(num)
// console.log(num.length)

// slice() returns a portion of an array without modifying the original array
// Syntax: slice(startIndex, endIndex)
// The endIndex is excluded from the returned array
// let num = [1, 2, 3, 4, 5]
// console.log(num)
// console.log(num.slice(2))
// console.log(num)
// console.log(num.slice(2, 4))
// console.log(num)
