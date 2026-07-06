// Name Validation
function checkName() {

    let name = document.getElementById("name").value.trim();
    let regex = /^[A-Za-z ]+$/;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Name is required";
    }
    else if (!regex.test(name)) {
        document.getElementById("nameError").innerHTML = "Only Alphabets Allowed";
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }
}


// Email Validation
function checkEmail() {

    let email = document.getElementById("email").value.trim();

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|in)$/;

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
    }
    else if (!regex.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }

}


// Password Validation + Strength
function checkPassword() {

    let password = document.getElementById("password").value;

    let strength = document.getElementById("strength");

    let strong = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let medium = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (password == "") {

        strength.innerHTML = "";
        document.getElementById("passError").innerHTML = "Password is required";

    }

    else if (strong.test(password)) {

        strength.innerHTML = "Strong Password";
        strength.style.color = "green";
        document.getElementById("passError").innerHTML = "";

    }

    else if (medium.test(password)) {

        strength.innerHTML = "Medium Password";
        strength.style.color = "orange";
        document.getElementById("passError").innerHTML = "Add Special Character";

    }

    else {

        strength.innerHTML = "Weak Password";
        strength.style.color = "red";
        document.getElementById("passError").innerHTML = "Minimum 8 Characters, 1 Capital, 1 Number & 1 Special Character";

    }

    checkConfirm();

}


// Confirm Password
function checkConfirm() {

    let password = document.getElementById("password").value;

    let confirm = document.getElementById("confirm").value;

    if (confirm == "") {

        document.getElementById("confirmError").innerHTML = "Confirm Password Required";
        document.getElementById("confirmError").style.color = "red";

    }

    else if (password != confirm) {

        document.getElementById("confirmError").innerHTML = "Password Not Matched";
        document.getElementById("confirmError").style.color = "red";

    }

    else {

        document.getElementById("confirmError").innerHTML = "Password Matched";
        document.getElementById("confirmError").style.color = "green";

    }

}


// Phone Validation
function checkPhone() {

    let phone = document.getElementById("phone").value;

    let regex = /^[0-9]{10}$/;

    if (phone == "") {

        document.getElementById("phoneError").innerHTML = "Phone Number Required";

    }

    else if (!regex.test(phone)) {

        document.getElementById("phoneError").innerHTML = "Phone Number Must Be 10 Digits";

    }

    else {

        document.getElementById("phoneError").innerHTML = "";

    }

}


// Gender Validation
function checkGender() {

    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {

        document.getElementById("genderError").innerHTML = "Select Gender";

    }

    else {

        document.getElementById("genderError").innerHTML = "";

    }

}


// City Validation
function checkCity() {

    let city = document.getElementById("city").value;

    if (city == "") {

        document.getElementById("cityError").innerHTML = "Select City";

    }

    else {

        document.getElementById("cityError").innerHTML = "";

    }

}


// Show / Hide Password
function togglePassword(id, btn) {

    let input = document.getElementById(id);

    if (input.type == "password") {

        input.type = "text";
        btn.innerHTML = "🙈";

    }

    else {

        input.type = "password";
        btn.innerHTML = "👁";

    }

}


// Submit Validation
function validate() {

    checkName();
    checkEmail();
    checkPassword();
    checkConfirm();
    checkPhone();
    checkGender();
    checkCity();

    let gender = document.querySelector('input[name="gender"]:checked');

    if (

        document.getElementById("nameError").innerHTML == "" &&
        document.getElementById("emailError").innerHTML == "" &&
        document.getElementById("passError").innerHTML == "" &&
        document.getElementById("confirmError").innerHTML == "Password Matched" &&
        document.getElementById("phoneError").innerHTML == "" &&
        document.getElementById("cityError").innerHTML == "" &&
        gender != null

    ) {

        alert("Registration Successful!");

        document.getElementById("form").reset();

        document.getElementById("strength").innerHTML = "";

    }

}