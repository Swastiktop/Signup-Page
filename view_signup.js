window.addEventListener("DOMContentLoaded", function() {
    var signupData = JSON.parse(localStorage.getItem('signupData'));

    if (signupData) {
        var tableBody = document.querySelector("#signupTable tbody");

        signupData.forEach(function(data) {
            var row = document.createElement("tr");

            var firstNameCell = document.createElement("td");
            firstNameCell.textContent = data.firstName;
            row.appendChild(firstNameCell);

            var lastNameCell = document.createElement("td");
            lastNameCell.textContent = data.lastName;
            row.appendChild(lastNameCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = data.email;
            row.appendChild(emailCell);

            var passwordCell = document.createElement("td");
            passwordCell.textContent = data.password;
            row.appendChild(passwordCell);

            tableBody.appendChild(row);
        });
    }
});
