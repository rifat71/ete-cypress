function appearToast(message, type = 'error') {
    const toastContainer = document.getElementById('toast-container');

    // Create a toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    // Append the toast to the container
    toastContainer.appendChild(toast);

    // Remove the toast
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

function loginValidation() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    if (usernameInput === 'galib' && passwordInput === '123456') {
        appearToast('Login successful! Redirecting to the home page.', 'success');
        window.location.href = 'home.html';
    } else {
        appearToast('Invalid username or password. Please try again.');
    }
}
