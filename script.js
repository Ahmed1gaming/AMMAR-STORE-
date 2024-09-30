// إضافة المنتجات إلى سلة التسوق
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى سلة التسوق!');
    });
});
function addToCart(product) {
    // Store product in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    // Redirect to cart page
    window.location.href = 'cart page.html';
    alert( "add to cart" )
}
document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const resetButton = document.getElementById('reset-cart');

    // Function to display cart items
    function displayCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = ''; // Clear existing items
        
        cart.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }

    // Function to clear cart
    function clearCart() {
        localStorage.removeItem('cart');
        displayCart();
    }

    // Display cart items on page load
    displayCart();

    // Add event listener to reset button
    resetButton.addEventListener('click', clearCart);
});

