let arr = [1, 13, 5 ,7, 11];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }


// map() creates and returns a new array by applying a callback function
// to every element of the original array
// The original array remains unchanged
let newArr = arr.map(e=>{
    return e**2
})

// map() can also provide three callback arguments:
// e = current element
// index = current element's index
// array = original array

// let newArr = arr.map((e, index, array)=>{
//     return e**2
// })
console.log(newArr)


// filter() creates a new array containing only the elements
// that satisfy the given condition
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

//OR: Using an arrow function directly inside filter()
// console.log(arr.filter((e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }))

let arr2 = [1, 2, 3, 4, 5, 6]

// reduce() processes array elements and combines them into a single result
// It takes an accumulator and the current element as arguments
// const red = (a, b)=>{
//     // return a+b
//     return a*b
// }
// console.log(arr2.reduce(red))

//OR: Using an arrow function directly inside reduce()
console.log(arr2.reduce( (a, b)=>{
    // return a+b
    return a*b
}))