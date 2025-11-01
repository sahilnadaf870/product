document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  // Get stored credentials
  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  // If no credentials stored yet → save new one and login
  if (!storedUser && !storedPass) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("usedOnce", "true");
    window.location.href = "product.html";
  } 
  // If already used once → force new credentials
  else if (localStorage.getItem("usedOnce") === "true") {
    // Clear old credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("usedOnce");

    // Save new credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("usedOnce", "true");

    window.location.href = "product.html";
  } 
  else {
    error.textContent = "Something went wrong!";
  }
});
