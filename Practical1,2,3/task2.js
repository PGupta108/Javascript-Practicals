const validateUser = (user) => {
    const { name, age, email } = user;
    if (!name.trim()) {
        return "Name cannot be empty.";
    }
    if (isNaN(age) || age < 13 || age > 120) {
        return "Age must be a number between 13 and 120.";
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }
    return null;
};

document.getElementById("registrationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
        name: document.getElementById("name").value,
        age: parseInt(document.getElementById("age").value),
        email: document.getElementById("email").value
    };
    const error = validateUser(user);
    const messageDiv = document.getElementById("message");

    if (error) {
        messageDiv.textContent = error;
        messageDiv.className = "error";
    } else {
        const { name, age, email } = user;
        messageDiv.textContent = `✅ Welcome, ${name} (Age: ${age}). Your email ${email} has been registered successfully!`;
        messageDiv.className = "success";
    }
});