// let obb={
//     name:"VED",
//     age:233,
//     kahan:"panner"
// }
// console.log(obb.name)
// console.log(obb["age"])

const user={
    name:"Ved",
    address:{
        city:"Bhopal",
        pin:462001,
        location:{
            latitude:233.221,
            longitude:878.221
        },
    },
}
// console.log(user.address.location.latitude)

// for(key in user){
//     console.log(key , "-" , user[key])
// }

const keys=Object.keys(user)
console.log(keys)

console.log(Object.entries(user))