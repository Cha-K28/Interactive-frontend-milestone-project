function sendMail(contactForm) {
    emailjs.init("user_6Y2hjvcpCc1tYU6kho6TA");
    emailjs.send("gmail", "EVinfo", {
        "full_name": contactForm.full_name.value,
        "from_email": contactForm.from_email.value,
        "car": contactForm.car.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert('Message Sent!');
            window.location.replace("/");
        },
        function(error) {
            alert('Error: Please try again!');
        }
    );
    return false;
}