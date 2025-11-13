document.addEventListener("DOMContentLoaded", function () {
    const name = prompt("Please enter your name:");
  
    if (name) {
      alert("Welcome, " + name + "!");
      console.log("Student Name:", name);

      const greeting = document.getElementById("studentGreeting");
      greeting.textContent = `Welcome to the CSE Department, ${name}!`;
    } else {
      console.log("No name entered.");
    }
  });