// Simple Cart System
const cart = [];
const addToCartButtons = document.querySelectorAll(".btn");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.parentElement.querySelector("h2").textContent;
        const price = button.parentElement.querySelector("p").textContent;
        cart.push({ product, price });
        alert(`${product} has been added to your cart!`);
        console.log(cart); // Check the cart in the console
    });
});
