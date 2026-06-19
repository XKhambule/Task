// =========================
// CART SYSTEM (FULL UPGRADE)
// =========================

const CART_KEY = "cartItems";

// GET CART
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// SAVE CART
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// =========================
// ADD TO CART (WITH QUANTITY)
// =========================
function addToCart(name, price) {
    const cart = getCart();

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    saveCart(cart);
    updateCartCount();

    alert(name + " added to cart!");
}

// =========================
// DISPLAY CART PAGE
// =========================
function displayCart() {
    const container = document.getElementById("cart-items");
    if (!container) return;

    const cart = getCart();
    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        let subtotal = item.price * item.qty;
        total += subtotal;

        container.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: R${item.price}</p>
                <p>Quantity: ${item.qty}</p>
                <p><b>Subtotal: R${subtotal}</b></p>

                <button onclick="increaseQty(${index})">+</button>
                <button onclick="decreaseQty(${index})">-</button>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
            <hr>
        `;
    });

    container.innerHTML += `
        <h2>Total: R${total}</h2>
        <a href="checkout.html">
            <button>Checkout</button>
        </a>
    `;
}

// =========================
// QUANTITY CONTROLS
// =========================
function increaseQty(index) {
    const cart = getCart();
    cart[index].qty++;
    saveCart(cart);
    displayCart();
    updateCartCount();
}

function decreaseQty(index) {
    const cart = getCart();

    cart[index].qty--;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    displayCart();
    updateCartCount();
}

// =========================
// REMOVE ITEM
// =========================
function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
    updateCartCount();
}

// =========================
// CART ICON COUNTER
// =========================
function updateCartCount() {
    const cart = getCart();

    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    const el = document.getElementById("cart-count");
    if (el) el.innerText = totalItems;
}

// =========================
// INIT ON PAGE LOAD
// =========================
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
    updateCartCount();
});
