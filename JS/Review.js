// customer review
document.addEventListener("DOMContentLoaded", displayCart);

document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let rating = document.querySelector('input[name="rating"]:checked');

    let message = document.getElementById("message");

    if (!rating) {
        message.style.color = "red";
        message.innerText = "Please select a rating!";
        return;
    }

    message.style.color = "#00A86B";
    message.innerText = "Thank you " + name + "! Your review has been submitted.";

    this.reset();
});

function changeLocation(location) {

    const mapFrame = document.getElementById("mapFrame");
    const storeText = document.getElementById("storeText");

    if (location === "rosebank") {
        storeText.innerText = "Current Location: Rosebank College, Johannesburg";

        mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.7591!2d28.0400!3d-26.2049!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95b1c5c8c1c1c1%3A0x0!2sRosebank%20College%20Johannesburg!5e0!3m2!1sen!2sza!4v0000000000";
    }

    else if (location === "sandton") {
        storeText.innerText = "Current Location: Sandton City, Johannesburg";

        mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1234!2d28.0567!3d-26.1076!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95b1c123456789%3A0x0!2sSandton%20City!5e0!3m2!1sen!2sza!4v0000000000";
    }
}

const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");
const loader = document.getElementById("loader");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // VALIDATION
    if (name === ""){
        messageBox.textContent = "Please enter your name.";
        return;
    }

    if (email === ""){
        messageBox.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")){
        messageBox.textContent = "Please enter a valid email.";
        return;
    }

    if (message === ""){
        messageBox.textContent = "Please state your enquiry.";
        return;
    }

    // SHOW LOADER
    loader.classList.remove("hidden");
    messageBox.textContent = "";

    setTimeout(() => {

        const myEmail = "xolanikhambule07@gmail.com";

        const subject = "New enquiry from " + name;
        const body =
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message;

        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        // HIDE LOADER
        loader.classList.add("hidden");

        // SUCCESS MESSAGE
        messageBox.textContent =
            "Thank you " + name + ", your enquiry has been sent!";

        // RESET FORM
        form.reset();

    }, 1500);
});