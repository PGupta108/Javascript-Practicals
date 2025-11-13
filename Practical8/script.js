function validateForm() {
    let valid = true;
    // Required Field Validation
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("errorUsername").innerText = "Username is required.";
        valid = false;
    } else {
        document.getElementById("errorUsername").innerText = "";
    }
    //Data Type Validation
    const age = document.getElementById("age").value;
    if (isNaN(age) || age === "") {
        document.getElementById("errorAge").innerText = "Age must be a number.";
        valid = false;
    } else {
        document.getElementById("errorAge").innerText = "";
    }
    //Length Validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("errorPassword").innerText = "Password must be at least 6 characters.";
        valid = false;
    } else {
        document.getElementById("errorPassword").innerText = "";
    }
    //Range Validation
    if (age < 18 || age > 60) {
        document.getElementById("errorAge").innerText = "Age must be between 18 and 60.";
        valid = false;
    }
    //Regex Validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("errorEmail").innerText = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("errorEmail").innerText = "";
    }
    //Compare Fields Validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("errorConfirm").innerText = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("errorConfirm").innerText = "";
    }
    //Password Strength Validation
    const strongPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/;
    if (!password.match(strongPass)) {
        document.getElementById("errorPassword").innerText = "Weak password. Use A-Z, a-z, 0-9, and @#$%.";
        valid = false;
    }
    //Checkbox, Radio Validation
    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById("errorGender").innerText = "Select your gender.";
        valid = false;
    } else {
        document.getElementById("errorGender").innerText = "";
    }
    //Dropdown Validation
    if (document.getElementById("city").value === "") {
        document.getElementById("errorCity").innerText = "Please select a city.";
        valid = false;
    } else {
        document.getElementById("errorCity").innerText = "";
    }
    //Date Validation
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    if (dob > today) {
        document.getElementById("errorDOB").innerText = "DOB cannot be in the future.";
        valid = false;
    } else {
        document.getElementById("errorDOB").innerText = "";
    }
    //File Upload Validation
    const file = document.getElementById("resume").files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            document.getElementById("errorFile").innerText = "File too large (max 2MB).";
            valid = false;
        } else if (!file.name.endsWith(".pdf")) {
            document.getElementById("errorFile").innerText = "Only PDF files allowed.";
            valid = false;
        } else {
            document.getElementById("errorFile").innerText = "";
        }
    }
    return valid;
}
//Real-time Validation
document.getElementById("username").oninput = function() {
    if (this.value.length < 3) {
        document.getElementById("errorUsername").innerText = "Must be at least 3 characters.";
    } else {
        document.getElementById("errorUsername").innerText = "";
    }
}