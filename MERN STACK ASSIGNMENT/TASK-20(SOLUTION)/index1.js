// let cart = [];

// let total = 0;


// function addService(name, price) {

//     cart.push({
//         name: name,
//         price: price
//     });

//     total = total + price;

//     displayCart();
// }


// function displayCart() {

//     let cartItems = document.getElementById("cartItems");

//     cartItems.innerHTML = "";


//     cart.forEach(function(item, index) {

//         let div = document.createElement("div");

//         div.className = "cart-item";

//         div.innerHTML = `
//             <span>${index + 1}. ${item.name}</span>
//             <span>₹${item.price}.00</span>
//         `;

//         cartItems.appendChild(div);
//     });


//     document.getElementById("total").innerText = total;
// }


// function bookNow() {

//     let name = document.getElementById("name").value;

//     let email = document.getElementById("email").value;

//     let phone = document.getElementById("phone").value;


//     if (name === "" || email === "" || phone === "") {

//         alert("Please fill all details");

//         return;
//     }


//     if (cart.length === 0) {

//         alert("Please select at least one service");

//         return;
//     }


//     alert("Booking Successful!");

// }


let cart=[]
let total=0;
function addservice(name,price){
    cart.push({
        name:name,
        price:price
    });
    total+=price;
    displayCart()
}
function displayCart(){
    let cartItems=document.getElementById("cartItems");
    cartItems.innerHTML=" ";
    cart.forEach(function(item,index){
        let div=document.createElement("div")
        
        div.innerHTML=`<span>${index + 1}. ${item.name}</span>
            <span>₹${item.price}.00</span>`;
        cartItems.appendChild(div)
    })
    document.getElementById("total").innerText=total
}
function bookNow(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    if(name.trim()==" "||email.trim()==" "||phone.trim()==" "){
        alert("Please fill al details")
        return;
    }
    if(cart.length==0){
        alert("Pls fill the cart")
        return;
    }
    alert("Booking Successfull")

}