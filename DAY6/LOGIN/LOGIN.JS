function validateForm(e) {
    e.preventDefault();

    const username = e.target.username;
    const password = e.target.password;

    const usernameError = username.nextElementSibling;
    const passwordError = password.nextElementSibling;

    let isValid = true;

    if (username.value.trim() === "") {
        username.style.borderColor = "red";
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        username.style.borderColor = "#ccc";
        usernameError.textContent = "";
    }

    if (password.value.trim() === "") {
        password.style.borderColor = "red";
        passwordError.textContent = "Password is required";
        isValid = false;
    } else {
        password.style.borderColor = "#ccc";
        passwordError.textContent = "";
    }

    if (isValid) {
        alert("Login Successful");
    }
}