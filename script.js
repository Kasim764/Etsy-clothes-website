document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
// Shopping Cart Simulation
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    document.getElementById('view-cart').addEventListener('click', viewCart);
});

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').innerText;
    const productPrice = product.querySelector('p').innerText;

    cart.push({ name: productName, price: productPrice });
    alert(`${productName} added to cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartContent = 'Your Cart:\n';
        cart.forEach((item, index) => {
            cartContent += `${index + 1}. ${item.name} - ${item.price}\n`;
        });
        alert(cartContent);
    }
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
