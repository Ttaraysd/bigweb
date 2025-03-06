document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  errorMessage.textContent = ''; // Clear previous error messages

  // Validation for email and password
  if (!validateEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address (e.g., example@gmail.com)';
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long';
    return;
  }

  // If the validation passes, redirect to Google
  alert('Login Successful!');
  window.location.href = 'https://www.google.com'; // Redirect to Google
});

// Function to validate email format
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com|yahoo\.com)$/;
  return regex.test(email);
}

