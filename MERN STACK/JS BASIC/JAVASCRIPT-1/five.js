// //important function:: of closures

// function counter(){
//     let counter=0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }
// let cc=counter();
// console.log(cc());
// console.log(cc());
// console.log(cc());
// console.log(cc());
// console.log(cc());
// console.log(cc());

// let ccc=counter()
// console.log(ccc())
// console.log(ccc())
// console.log(ccc())
// console.log(ccc())
// console.log(ccc())



// function getdiscount(discount){
//     return function(price){
//         return price-((price*discount)/100)
//     }
// }
// let a=getdiscount(10)
// console.log(a(1000))

// let b=getdiscount(20)
// console.log(b(2000))

// let c=getdiscount(30)
// console.log(c(3000))


// function gstcalculator(val){
//     return function(price){
//         return price+((price * val)/100)
//     }
// }
// let a=gstcalculator(10)
// console.log(a(1000))


function si(r=5,t=24){
    return function(p){
        return (p*r*t)/100
    }
}
let b=si(5,12)
console.log(b(2000))