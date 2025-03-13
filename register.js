document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerdetails");

    registerForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      const dob = document.getElementById("date").value;

      if (username && password && email && dob) {
        const registerData = {
          username: username,
          password: password,
          email: email,
          dob: dob
        };

        localStorage.setItem("registerData", JSON.stringify(registerData));

        console.log("Registration data saved in localStorage:", registerData);

        alert("Register Successful! Redirecting to Log In Page.")

        window.location.href = "login.html";
      } else {
        alert("Please fill in all fields before submitting.");
      }
    });
  });