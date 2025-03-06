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

  // If the validation passes, show a success message or simulate login
  alert('Login Successful!');
});

// Function to validate email format
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com|yahoo\.com)$/;
  return regex.test(email);
}
SEARCH

// Initialize a simple grid of blocks
for (let x = -5; x < 5; x++) {
  for (let z = -5; z < 5; z++) {
    createBlock(x, 0, z);  // Create a floor grid of blocks
  }
}

// Initialize a simple grid of blocks
for (let x = -5; x < 5; x++) {
  for (let z = -5; z < 5; z++) {
    createBlock(x, 0, z);  // Create a floor grid of blocks
  }
}
REPLACE
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // هنا يمكنك إضافة منطق التحقق من صحة بيانات الدخول
    // (مثلاً، مقارنة اسم المستخدم وكلمة المرور بقاعدة بيانات)

    if (username && password) { //  تحقق بسيط مؤقت
        document.getElementById("login-form").style.display = "none";
        document.getElementById("welcome-message").style.display = "block";
        document.getElementById("user-name").textContent = username;
    } else {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور.");
    }
}
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
