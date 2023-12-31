function loginValidation() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    if (usernameInput === 'galib' && passwordInput === '123456') {
        alert('Login successful! Redirecting to the home page.');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
