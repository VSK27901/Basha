document.addEventListener("DOMContentLoaded", () => {
const passwordInputs = document.querySelectorAll(".password");
const showHideButtons = document.querySelectorAll(".showHidePw");

// Show or hide password
showHideButtons.forEach(button => {
    button.addEventListener("click", () => {
    const inputField = button.parentElement.querySelector(".password");
    if (inputField.type === "password") {
        inputField.type = "text";
        button.classList.replace("uil-eye-slash", "uil-eye");
    } else {
        inputField.type = "password";
        button.classList.replace("uil-eye", "uil-eye-slash");
    }
    });
});

// // Validate password
// function validatePassword(password, confirmPassword) {
//     // Define regular expressions for password validation
//     var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

//     // Check if the password meets the criteria
//     if (!passwordPattern.test(password)) {
//         return "Password must contain at least 8 characters, 1 uppercase letter, and 1 special character.";
//     }

//     // Check if the password and confirmation password match
//     if (password !== confirmPassword) {
//         return "Passwords do not match.";
//     }

//     // Password is valid
//     return "Password reset successfull.";
// }
});
