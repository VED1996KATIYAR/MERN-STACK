function search() {
    const value = document.getElementById("greet").value.trim();
    const header = document.getElementById("one");
    header.textContent = "Hello, " + value;
}

const greetButton = document.querySelector("button");
greetButton.addEventListener("click", search);

const colorBoxes = [
    { element: document.querySelector(".two2"), color: "red" },
    { element: document.querySelector(".two3"), color: "blue" },
    { element: document.querySelector(".two4"), color: "green" },
    { element: document.querySelector(".two5"), color: "yellow" }
];

colorBoxes.forEach(({ element, color }) => {
    element.addEventListener("click", () => {
        element.style.backgroundColor = color;
    });
});