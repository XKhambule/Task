function generateReceipt() {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const receipt = document.getElementById("receipt");

    let total = 0;

    receipt.innerHTML = "<h2>Thank you for your purchase!</h2>";

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;

        receipt.innerHTML += `
            <p>${item.name} x ${item.qty} = R${itemTotal}</p>
        `;
    });

    receipt.innerHTML += `<h2>Total Paid: R${total}</h2>`;
    receipt.innerHTML += `<button onclick="clearCart()">Finish</button>`;
}

function clearCart() {
    localStorage.removeItem("cartItems");
    alert("Thank you!");
    window.location.href = "Homepage.html";
}

document.addEventListener("DOMContentLoaded", generateReceipt);