document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var errorMessages = [];

    if (firstName.trim() === '') {
        errorMessages.push('First name is required');
    }

    if (lastName.trim() === '') {
        errorMessages.push('Last name is required');
    }

    if (email.trim() === '') {
        errorMessages.push('Email is required');
    }

    // Additional validation logic can be added here

    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
        return;
    }

    var signupData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Store signupData in browser's local storage
    var allSignupData = JSON.parse(localStorage.getItem('signupData')) || [];
    allSignupData.push(signupData);
    localStorage.setItem('signupData', JSON.stringify(allSignupData));

    // Clear form fields
    document.getElementById("signupForm").reset();

    alert('Sign up successful!');
});
