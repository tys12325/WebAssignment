document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("logindetails");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const registerData = localStorage.getItem("registerData");

    if (registerData) {
      const parsedData = JSON.parse(registerData);

      if (username === parsedData.username && password === parsedData.password) {
        // Show loading effect
        const loadingContainer = document.querySelector(".loading-container");
        loadingContainer.style.display = "flex";

        setTimeout(function() {
          loadingContainer.style.display = "none";
          window.location.href = "home.html";
         
        }, 2000); // 2 second delay before redirecting
        // alert("Login successful!");
        // Perform any additional actions or redirect to the home page
        

      } else {
        alert("Invalid username or password! Please try again.");
      }
    } else {
      alert("No registered user found. Please register first.");
    }
  });
});
