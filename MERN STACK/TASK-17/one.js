// console.log("One")
// console.log("Two")

// setTimeout(function(){
//     console.log("This will be executed after 3 seconds")
// },3000)
// console.log("Three")


//call back functions

// function getCandidates(callback1){
//     setTimeout(()=>{
//         const candies="🍬"
//         console.log("In our get Candies method",candies)
//         callback1(candies)
//     },3000);
// }

// function handoverKeys(candies,callback2){
//     setTimeout(()=>{
//         const keys=candies+"🔑"
//         console.log("In our handoverkeys methods",keys)
//         callback2(keys)
//     },3000);
// }

// getCandidates((candies)=>{
//     handoverKeys(candies,(keys)=>{
//         console.log("Here is your key and candies ",keys)
//     })
// })


//promises::find out asynchronus operation is successfully completed or not

// const ticket=new Promise(function(resolve,reject){
//     const isBoarded=false;
//     if(isBoarded){
//         resolve("You are eligible to on board")
//     }else{
//         resolve("You are not elegibile to on board")
//     }
// })

// ticket.then((data)=>{
//     console.log("whooo",data)
// }).catch((data)=>{
//     console.log("Oh no ",data)
// }).finally(()=>{
//     console.log("This will be executed all time")
// })

//in a synchronus way

// function getCandies(){
//     return new Promise((resolve,reject)=>{
//         //reject(candies)
//         setTimeout(()=>{
//             const candies="🍫"
//             console.log("In our getCandies method",candies)
            
//         },2000)
//         // resolve(candies)
//     })
// }
// console.log(getCandies())


//Error handling


// try{
//     console.log(age)
// }catch(error){
//     console.log(error)
//     console.log(error.name)
//     console.log(error.message)
// }


try {
  const ans = prompt("Are you a robot?");
  if (ans === "Y") {
    throw new Error("Robots are not allowed");
  }
  const one = document.getElementById("con");
  one.innerHTML = "Welcome! You are a human.";
} catch (err) {
  console.log(err.message);
  const one = document.getElementById("con");
  one.innerHTML = err.message;
}


