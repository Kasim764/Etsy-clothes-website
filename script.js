// Shopping Cart Simulation
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    document.getElementById('view-cart').addEventListener('click', viewCart);
    document.getElementById('checkout').addEventListener('click', checkout);
});

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').innerText;
    const productPrice = product.querySelector('p').innerText;

    cart.push({ name: productName, price: productPrice });
    alert(`${productName} added to cart!`);
    updateCartCount();
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

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Proceeding to checkout...');
        // Redirect to checkout page or payment gateway
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
