//array methods
//map,filter,find,reduce

const ourArray=[1,2,3,4,5,6,]
console.log(ourArray) 

//map method
// ourArray.map(function(){})

const newmap=ourArray.map((data)=>{
    return data+50
});

console.log(newmap)

//2:Filter ::

const newfilter=ourArray.filter((data)=>data<4)
console.log(newfilter)

//3:Find
const ors=ourArray.find((data)=>
   data==2
)
console.log(`find result ${ors}`)


//4.Reduce
//accumulator current value is 0 it is written
//current value is the no of iteration
//
const ir=ourArray.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},0)
console.log(ir)

const cartitems=[
    {
        itemname:"iPhone 16",
        price:100,
        quantity:1
    },{
        itemname:"Water Bottle",
        price:10,
        quantity:2
    },{
        itemname:"Laptop bag",
        price:100,
        quantity:4
    }
]
const totalp=cartitems.reduce((acc,curr)=>{
    return acc+(curr.price)
},0)
console.log("Flipkart total pricw :",totalp)