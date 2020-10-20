// Sending to emailjs
function sendMail(contactForm) {
    emailjs.init("user_6Y2hjvcpCc1tYU6kho6TA"); // sourced from emailJS
    emailjs.send("gmail", "EVinfo", {
        "full_name": contactForm.full_name.value,
        "from_email": contactForm.from_email.value,
        "car": contactForm.car.value,
        "message": contactForm.message.value
    })
   
    // After sending message
    .then(
        function(response) {
            alert('Message Sent!');
            window.location.replace("cha-k28.github.io/Interactive-frontend-milestone-project/"); // Return to home page
        },
        function(error) {
            alert('Error: Please try again!');
        }
    );
    return false;
}