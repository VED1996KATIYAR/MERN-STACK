// Available services. Change names, prices, or image URLs as needed.
const services = [
  {
    name: "Stain Removal",
    price: 500,
    description: "Careful treatment for tough stains.",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Dry Cleaning",
    price: 200,
    description: "Professional care for your special clothes.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Ironing",
    price: 30,
    description: "Neatly pressed clothes, ready to wear.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebra?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Wash and Fold",
    price: 140,
    description: "Freshly washed and neatly folded laundry.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Home Cleaning",
    price: 999,
    description: "A cleaner, fresher home with expert care.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85"
  }
];

// The cart contains the selected services.
const cart = [];
let currentServiceIndex = 0;

const serviceImage = document.querySelector("#serviceImage");
const serviceName = document.querySelector("#serviceName");
const serviceDescription = document.querySelector("#serviceDescription");
const servicePrice = document.querySelector("#servicePrice");
const serviceCounter = document.querySelector("#serviceCounter");
const cartItems = document.querySelector("#cartItems");
const totalAmount = document.querySelector("#totalAmount");
const cartNote = document.querySelector("#cartNote");
const formMessage = document.querySelector("#formMessage");

function formatPrice(price) {
  return `₹${price.toFixed(2)}`;
}

// Show the current service in the right-side card.
function renderService() {
  const service = services[currentServiceIndex];

  serviceImage.src = service.image;
  serviceImage.alt = service.name;
  serviceName.textContent = service.name;
  serviceDescription.textContent = service.description;
  servicePrice.textContent = formatPrice(service.price);
  serviceCounter.textContent = `Service ${currentServiceIndex + 1} of ${services.length}`;
}

// Render cart rows and recalculate the total every time the cart changes.
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<tr class="empty-row"><td colspan="4">No items added yet.</td></tr>';
    cartNote.textContent = "Add services from the right to get started.";
  } else {
    cart.forEach((service, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${service.name}</td>
        <td>${formatPrice(service.price)}</td>
        <td><button class="remove-btn" type="button" data-index="${index}" aria-label="Remove ${service.name}">×</button></td>
      `;
      cartItems.appendChild(row);
    });
    cartNote.textContent = `${cart.length} service${cart.length === 1 ? "" : "s"} in your cart.`;
  }

  const total = cart.reduce((sum, service) => sum + service.price, 0);
  totalAmount.textContent = formatPrice(total);
}

// Add the currently displayed service to the cart.
function addCurrentService() {
  const service = services[currentServiceIndex];
  cart.push({ ...service });
  renderCart();
  formMessage.textContent = "";
}

// Move to the next service, looping back to the first one.
function showNextService() {
  currentServiceIndex = (currentServiceIndex + 1) % services.length;
  renderService();
}

document.querySelector("#addBtn").addEventListener("click", () => {
  addCurrentService();
  showNextService();
});

document.querySelector("#skipBtn").addEventListener("click", showNextService);

// The bottom Add to Cart button adds the currently displayed service.
document.querySelector("#addToCartBtn").addEventListener("click", () => {
  addCurrentService();
  showNextService();
});

// Remove an individual item using event delegation.
cartItems.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-btn");
  if (!button) return;

  const index = Number(button.dataset.index);
  cart.splice(index, 1);
  renderCart();
});

// Both Book Now buttons take the user to the booking form.
function focusBookingForm() {
  document.querySelector("#bookingForm").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
  document.querySelector("#fullName").focus({ preventScroll: true });
}

document.querySelector("#bookNowBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    cartNote.textContent = "Please add at least one service before booking.";
    return;
  }
  focusBookingForm();
});

document.querySelector("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (cart.length === 0) {
    formMessage.style.color = "#c34b5b";
    formMessage.textContent = "Please add at least one service to your cart first.";
    return;
  }

  const fullName = document.querySelector("#fullName").value.trim();
  formMessage.style.color = "#31824a";
  formMessage.textContent =
    `Thank you, ${fullName}! Your demo booking request for ${cart.length} service(s), total ${totalAmount.textContent}, has been confirmed.`;

  // Demo only: no data is sent to a server.
  cart.length = 0;
  renderCart();
  event.target.reset();
});

document.querySelector("#logoutBtn").addEventListener("click", () => {
  const confirmed = window.confirm("Do you want to log out?");
  if (confirmed) {
    document.querySelector("#username").textContent = "Logged out";
    document.querySelector("#logoutBtn").disabled = true;
    document.querySelector("#logoutBtn").style.opacity = "0.5";
  }
});

// Initial page render.
renderService();
renderCart();
