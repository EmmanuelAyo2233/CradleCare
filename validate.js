function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
      alert("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email format.");
      return;}