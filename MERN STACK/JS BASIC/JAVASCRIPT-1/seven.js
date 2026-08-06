// let arr=[11,62,34,23,25]
// arr.forEach(function(val){
//     console.log(val+5)
// })

let arr=[11,62,34,24,23,25]




// let newarr=arr.map(function(val){
//     return 12;
// })
// console.log(newarr)


let arr1=[1,2,3,4,5,6,7,8,9,10]
// let newarr=arr1.filter(function (val){
//     if(val>4){
//         return true;
//     }
// })
// console.log(newarr)

// let neww=arr.reduce(function(accumulator,val){
//     return accumulator+val
// },0);
// console.log(neww)


let neww=arr1.some(function(val){
    return val>5
})
console.log(neww)

let neww1=arr1.every(function(val){
    return val>5
})
console.log(neww1)