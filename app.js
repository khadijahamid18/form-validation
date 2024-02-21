const form = document.getElementById("myForm");

function validation() {
    // Reset error messages
    document.getElementById("username").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("confirm-Password").innerHTML = "";
    document.getElementById("mob").innerHTML = "";
    document.getElementById("mail").innerHTML = "";

    var user = document.getElementById("inputName").value;
    var pass = document.getElementById("inputPass").value;
    var conPass = document.getElementById("inputConPass").value;
    var mobile = document.getElementById("inputMob").value;
    var email = document.getElementById("inputEmail").value;


    if (user == "") {
        document.getElementById("username").innerHTML = "Please enter the username";
        return false;
    }
    if (user.length <= 2 || user.length > 20) {
        document.getElementById("username").innerHTML =
            "Please enter the username with min 2 and max 20 characters";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById("username").innerHTML =
            "Only characters are allowed";
        return false;
    }



    if (pass == "") {
        document.getElementById("password").innerHTML = "Please enter the password";
        return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
        document.getElementById("password").innerHTML =
            "Please enter the password with min 5 and max 20 words";
        return false;
    }



    if (conPass == "") {
        document.getElementById("confirm-Password").innerHTML =
            "Please confirm the password";
        return false;
    }
    if (pass != conPass) {
        document.getElementById("confirm-Password").innerHTML =
            "Both passwords are not same";
        return false;
    }



    if (mobile == "") {
        document.getElementById("mob").innerHTML = "Please enter the mobile number";
        return false;
    }
    if (mobile.length != 11) {
        document.getElementById("mob").innerHTML =
            "Numbers must be equal to 11 digits";
        return false;
    }



    if (email == "") {
        document.getElementById("mail").innerHTML = "Please enter the email id";
        return false;
    }
    if (email.indexOf("@") <= 0) {
        document.getElementById("mail").innerHTML = "@ Invalid position";
        return false;
    }
    if (
        email.charAt(email.length - 4) != "." &&
        email.charAt(email.length - 3) != "."
    ) {
        document.getElementById("mail").innerHTML = ". Invalid position";
        return false;
    }

    return true; // If all validations pass
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validation()) {
        form.submit(); // If all validations pass, submit the form
    }
});
