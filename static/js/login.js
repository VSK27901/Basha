document.addEventListener("DOMContentLoaded", function () {
    // Get all password input fields
    const passwordFields = document.querySelectorAll('.password');

    // Get all show/hide password icons
    const showHideIcons = document.querySelectorAll('.showHidePw');

    // Add click event listener to each show/hide password icon
    showHideIcons.forEach(function (icon, index) {
        icon.addEventListener('click', function () {
            // Toggle the password field between "password" and "text" type
            if (passwordFields[index].type === "password") {
                passwordFields[index].type = "text";
                icon.classList.remove("uil-eye-slash");
                icon.classList.add("uil-eye");
            } else {
                passwordFields[index].type = "password";
                icon.classList.remove("uil-eye");
                icon.classList.add("uil-eye-slash");
            }
        });
    });
});


function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Please complete the reCAPTCHA before submitting.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
