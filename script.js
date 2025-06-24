// Form validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("confirmError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").textContent = "Min 6 characters";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords don't match";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});