let a = [1, 93, 5, 6, 88]

// for(let i = 0; i < a.length; i++){
//     // const element = a[i];
//     // console.log(element)
//     //OR
//     console.log(a[i])
// }


// forEach() executes a callback function for every array element
// It does not return a new array

// forEach() can provide three arguments:
// value = current element
// index = current element's index
// array = original array

// a.forEach(value=>{})
// a.forEach((value, i, array)=>{})
// a.forEach((value, index, arr)=>{
//     // console.log(value, index, arr)
//     // console.log(value)
//     // console.log(index)
//     // console.log(arr)
// })


// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

//for...in loop iterates over the enumerable property keys of an object
// Object.hasOwnProperty.call() checks whether the property belongs directly to the object
// rather than being inherited from its prototype

// for(const key in obj){
//     if(Object.hasOwnProperty.call(obj, key)){
//         const element = obj[key]
//         console.log(key, element)
//         console.log(element)
//         console.log(key)
//     }
//OR
// for(const i in obj){
//         const ele = obj[i]
//         console.log(i, ele)
//         console.log(ele)
//         console.log(i)
// }

// for...of loop directly accesses the values of an iterable
// It does not provide indexes directly
// for(const i of a){
//     console.log(i)
// }