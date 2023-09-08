// DOM elements
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('logusername');
const passwordInput = document.getElementById('logpassword');

// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the entered username and password
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Send the login request to the server
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Login successful, redirect to dashboard or perform any other action
        window.location.href = '#';
      } else {
        // Login failed, display an error message
        const errorContainer = document.getElementById('error-container');
        errorContainer.textContent = data.message;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});