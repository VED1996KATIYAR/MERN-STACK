const services = [
    {
        name: "Dry Cleaning",
        price: 200,
        image: "https://embassycleaners.com/wp-content/uploads/2019/04/dry-cleaning-vs-laundry.jpeg"
    },

    {
        name: "Leather & Suede Cleaning",
        price: 999,
        image: "https://door2doordrycleaning.ca/wp-content/uploads/2022/11/cold-weather-wear-black-leather-jackets.jpg"
    },

    {
        name: "Wash And Fold",
        price: 140,
        image: "https://greenercleaner.net/wp-content/uploads/2021/09/image-asset-1200x780.jpeg"
    },

    {
        name: "Ironing",
        price: 30,
        image: "https://www.crompton.co.in/cdn/shop/articles/importance-of-ironning.png?v=1785142897"
    }
];


let currentIndex = 0;

let cart = [];

let totalAmount = 0;




const serviceContainer =
    document.getElementById("serviceContainer");

const addBtn =
    document.getElementById("addBtn");

const skipBtn =
    document.getElementById("skipBtn");

const cartBody =
    document.getElementById("cartBody");

const total =
    document.getElementById("total");

const emptyMessage =
    document.getElementById("emptyMessage");



function showService() {

    if (currentIndex >= services.length) {

        serviceContainer.innerHTML = `
            <div style="text-align:center;padding:50px">
                <h3>No More Services</h3>
                <p>All services have been viewed.</p>
            </div>
        `;

        addBtn.disabled = true;
        skipBtn.disabled = true;

        return;
    }


    const service = services[currentIndex];

    serviceContainer.innerHTML = `
        
        <div class="service-card">

            <img 
                src="${service.image}"
                alt="${service.name}"
            >

            <div class="service-info">

                <div class="service-name">
                    ${service.name}
                </div>

                <div class="service-price">
                    ₹${service.price}.00
                </div>

            </div>

        </div>
    `;
}




addBtn.addEventListener("click", function () {

    const service = services[currentIndex];

    cart.push(service);

    totalAmount += service.price;

    updateCart();

    currentIndex++;

    showService();
});




skipBtn.addEventListener("click", function () {

    currentIndex++;

    showService();
});




function updateCart() {

    cartBody.innerHTML = "";

    cart.forEach(function(service, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${service.name}</td>
            <td>₹${service.price}.00</td>
        `;

        cartBody.appendChild(row);
    });


    total.innerText = `₹ ${totalAmount}.00`;


    if (cart.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";
    }
}



document
    .getElementById("bookBtn")
    .addEventListener("click", function () {

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();


        if (cart.length === 0) {
            alert("Please add at least one service.");
            return;
        }


        if (name === "" || email === "" || phone === "") {
            alert("Please fill all details.");
            return;
        }


        if (phone.length !== 10 || isNaN(phone)) {
            alert("Please enter a valid 10 digit phone number.");
            return;
        }


        alert(
            `Booking Successful!\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Total: ₹${totalAmount}`
        );

    });




showService();