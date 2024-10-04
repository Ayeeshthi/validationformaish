function validateName() {
    const fullName = document.getElementById("fullName").value;
    if (fullName.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters long.";
        return false;
    } else {
        document.getElementById("nameError").innerText = "";
        return true;
    }
}

// Function to validate Email
function validateEmail() {
    const email = document.getElementById("email").value;
    if (!email.includes('@')) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
        return true;
    }
}

// Function to validate Phone Number
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{10}$/; // Pattern to match 10 digits
    if (phone === "1234567890" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Please enter a valid 10-digit phone number.";
        return false;
    } else {
        document.getElementById("phoneError").innerText = "";
        return true;
    }
}

// Function to validate Password
function validatePassword() {
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value.toLowerCase();

    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
        return false;
    } else if (password.toLowerCase() === "password" || password.toLowerCase() === fullName) {
        document.getElementById("passwordError").innerText = "Password cannot be 'password' or your name.";
        return false;
    } else {
        document.getElementById("passwordError").innerText = "";
        return true;
    }
}

// Function to validate Confirm Password
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
        return true;
    }
}

// Function to validate the entire form on submission
function validateForm() {
    // Validate each field on submit
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Check if all fields are valid
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please fix the errors in the form.");
        return false; // Prevent form submission if there are errors
    }
}