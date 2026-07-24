// Initialize EmailJS
emailjs.init({
    publicKey: "LpWC4kNWoROPY3vJt"
});

// Get form and button
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

// Submit Event
contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.innerHTML = "Sending...";

    const templateParams = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        title: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    emailjs.send(
        "service_byq9wks",
        "template_pn2onah",
        templateParams
    )
    .then(function () {

        alert("✅ Message sent successfully!");

        contactForm.reset();

        sendBtn.disabled = false;
        sendBtn.innerHTML = "Send Message";

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        alert("❌ Failed to send message.\n\n" +
              (error.text || JSON.stringify(error)));

        sendBtn.disabled = false;
        sendBtn.innerHTML = "Send Message";

    });

});