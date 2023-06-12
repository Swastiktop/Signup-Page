document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Get existing data from localStorage
    var signupData = JSON.parse(localStorage.getItem("signupData")) || [];

    // Add new form data to the signupData array
    signupData.push(formData);

    // Store the updated signupData in localStorage
    localStorage.setItem("signupData", JSON.stringify(signupData));

    // Redirect to view_signup.html
    window.location.href = "view_signup.html";
});
