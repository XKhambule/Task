const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const enquiryType = document.getElementById("enquiryType").value;
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === "") {
        messageBox.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        messageBox.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        messageBox.textContent = "Please enter a valid email address.";
        return;
    }

    if (enquiryType === "") {
        messageBox.textContent = "Please select an enquiry type.";
        return;
    }

    if (message === "") {
        messageBox.textContent = "Please enter your enquiry.";
        return;
    }

    // Show loading spinner
    loader.classList.remove("hidden");
    messageBox.textContent = "";

    setTimeout(() => {

        let responseMessage = "";

        switch (enquiryType) {
            case "product":
                responseMessage =
                    "The product you are enquiring about is currently available. Prices start from R299.";
                break;

            case "service":
                responseMessage =
                    "Our services are currently available. Service packages start from R500.";
                break;

            case "volunteer":
                responseMessage =
                    "Thank you for your interest in becoming a volunteer. Our team will contact you within 3 business days.";
                break;

            case "sponsor":
                responseMessage =
                    "Thank you for your sponsorship enquiry. Sponsorship packages start from R1 000.";
                break;

            default:
                responseMessage =
                    "Thank you for your enquiry. We will contact you soon.";
        }

        // Email details
        const myEmail = "xolanikhambule07@gmail.com";

        const subject = "New " + enquiryType + " enquiry from " + name;

        const body =
            "Name: " + name +
            "\nEmail: " + email +
            "\nEnquiry Type: " + enquiryType +
            "\n\nMessage:\n" + message;

        // Hide loader
        loader.classList.add("hidden");

        // Display response
        messageBox.innerHTML =
            "<strong>Thank you, " + name + "!</strong><br><br>" +
            responseMessage;

        // Open email client
        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        // Reset form
        form.reset();

    }, 1500);
});