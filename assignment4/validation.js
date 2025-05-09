document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
  
    if (!name || !email || !password || !confirmPassword) {
      errorMessage.textContent = "All fields are required.";
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Invalid email format.";
      return;
    }
  
    const passwordPattern = /^(?=.[A-Z])(?=.\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      errorMessage.textContent = "Password must be at least 8 characters long, include a number and an uppercase letter.";
      return;
    }
  
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }
  
    errorMessage.style.color = "green";
    errorMessage.textContent = "Registration successful!";
  });