/*
 var,let ,const
 var a=12;
 let a=12;
 const a=12;
 */
/*declaration and initialization */
// var a;//declare krna
// a=12//initial krna
//var window mai add krta hai
//var is function scoped hota hai
//app firse declare kr skte hai but error nhi aaye ga
// var a=12;
// var a=122;
// console.log(a)
 
//scope::(global,functional,block)
// var a=12 //functional scope
// {
//   let a=12;//block scoped
// }
// function abcd(){
//     if(true){
//         var c=12
//         console.log(c)
//     }
// }
//
//reassignment , redeclaration
// var a=12
// a=32
// var a=3333
//redeclaration and reassignment is possible in var
// let b=33
// b=333
// let b=133
// console.log(b)
//redeclaration and reassignment is not possible in let

//temporal dead zone::can not access a before initialization
// console.log(a)
// let a=12


//Hoisting::ek variable ko jab js mein banate hai to wo variable
//do hisso mein toot jaata hai and uska declare part upar chala 
//jaata hai aur uska intialization part neecha reh jata hai
// var a=22

// var a=undefined
// a=22

//var -> hoist -> undefined
//let -> hoist ->reference error
//const ->hoist->reference error