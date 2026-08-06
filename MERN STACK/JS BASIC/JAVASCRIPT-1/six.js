//array
// let arr=[1,2,3,4,5,6]
// arr[0]=8;
// console.log(arr)

// arr.push(7000)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)

let arr=[11,62,34,23,25,1,56,74,742,8]
let ascending=arr.sort(function(a,b){
    return a-b
})
console.log(ascending)

let descending=arr.sort(function(a,b){
    return b-a;
})
console.log(descending)