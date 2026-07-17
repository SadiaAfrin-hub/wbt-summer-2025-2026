const form = document.getElementById("myForm");

let wrongAttempts = 0;
let isLocked = false;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

form.addEventListener("submit", function (event) {

    event.preventDefault();
    clearErrors();

    if (isLocked) {
        document.getElementById("passwordError").innerHTML =
            "Password is locked. Please try again after 30 seconds.";
        return;
    }

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let category = document.getElementById("category");
    let reason = document.getElementById("reason");

    let gender = document.querySelector('input[name="gender"]:checked');
    let clubs = document.querySelectorAll('input[name="club"]:checked');

    let valid = true;
    if (firstName.value.trim() == "") {

        showError(firstName, "firstNameError", "First name is required.");
        valid = false;

    }
    else if (!/^[A-Za-z ]+$/.test(firstName.value.trim())) {

        showError(firstName, "firstNameError", "Only letters are allowed.");
        valid = false;

    }
    else {

        showSuccess(firstName);

    }
    if (lastName.value.trim() == "") {

        showError(lastName, "lastNameError", "Last name is required.");
        valid = false;

    }
    else if (!/^[A-Za-z ]+$/.test(lastName.value.trim())) {

        showError(lastName, "lastNameError", "Only letters are allowed.");
        valid = false;

    }
    else {

        showSuccess(lastName);

    }

    if (email.value.trim() == "") {

        showError(email, "emailError", "Email is required.");
        valid = false;

    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {

        showError(email, "emailError", "Invalid email address.");
        valid = false;

    }
    else {

        showSuccess(email);

    }
    if (password.value == "") {

        showError(password, "passwordError", "Password is required.");
        valid = false;

    }
    else if (!passwordPattern.test(password.value)) {

        wrongAttempts++;

        showError(
            password,
            "passwordError",
            "Weak password! Must be 8+ chars with upper, lower, number & symbol. Attempt " +
            wrongAttempts + " of 3."
        );

        valid = false;

        if (wrongAttempts >= 3) {

            isLocked = true;

            document.getElementById("passwordError").innerHTML =
                "Too many wrong attempts. Password locked for 30 seconds.";

            password.disabled = true;

            setTimeout(function () {

                isLocked = false;
                wrongAttempts = 0;
                password.disabled = false;

                document.getElementById("passwordError").innerHTML =
                    "Password unlocked. Please try again.";

            }, 30000);

        }

    }
    else {
   wrongAttempts = 0;
    showSuccess(password);

    }
    if (gender == null) {

        document.getElementById("genderError").innerHTML =
            "Please select your gender.";

        valid = false;

    }
    if (clubs.length == 0) {

        document.getElementById("clubError").innerHTML =
            "Select at least one club.";

        valid = false;

    }
    if (category.value == "") {

        showError(category, "categoryError", "Please select a valid category.");
        valid = false;

    }
    else {

        showSuccess(category);

    }
    if (reason.value.trim() == "") {

        showError(reason, "reasonError", "This field is required.");
        valid = false;

    }
    else if (reason.value.trim().length < 20) {

        showError(
            reason,
            "reasonError",
            "Please write at least 20 characters."
        );

        valid = false;

    }
    else {

        showSuccess(reason);

    }

    if (valid) {

        alert("Club Membership Registration Submitted Successfully!");

        form.reset();

        clearErrors();

    }

});
// Functions

function showError(input, errorId, message) {

    input.classList.add("errorBorder");
    input.classList.remove("successBorder");

    document.getElementById(errorId).innerHTML = message;

}
function showSuccess(input) {

    input.classList.remove("errorBorder");
    input.classList.add("successBorder");

}

function clearErrors() {

    let errors = document.querySelectorAll(".error");

    errors.forEach(function (item) {

        item.innerHTML = "";

    });

    let fields = document.querySelectorAll("input, select, textarea");

    fields.forEach(function (field) {

        field.classList.remove("errorBorder");
        field.classList.remove("successBorder");

    });

}
