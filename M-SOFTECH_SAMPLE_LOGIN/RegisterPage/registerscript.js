
function regform(registerform) {
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    sessionStorage.setItem("userName", firstname)
    var lastname = document.getElementById("lastname").value;
    var image = document.getElementById("output").src;
    if (email != "" && firstname != "" && lastname != "" && image != "") {
        alert("Registered Successfully")
        var x = {};
        x.avatar = image;
        x.email = email;
        x.firstname = firstname;
        x.lastname = lastname;
        var xdata = Object.entries(x);
        sessionStorage.setItem("formdatas", JSON.stringify(xdata));
        document.getElementById("fillform").style.display = "none";
        window.location.href = "/WelcomePage/target.html";
    } else if (email == "" && firstname == "" && lastname == "" && image == "") {
        document.getElementById("fillform").style.display = "block";
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailerror = document.getElementById("emailError");
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    emailerror.innerHTML = "";

    if (!emailregex.test(email)) {
        emailerror.innerHTML = "Invalid Email";
        return false;
    }

    return true;
}

function validateFirstname() {
    var firstname = document.getElementById("firstname").value;
    var frstnamerror = document.getElementById("fnameError");
    var nameregex = /^[a-zA-Z]+$/;

    frstnamerror.innerHTML = "";

    if (!nameregex.test(firstname)) {
        frstnamerror.innerHTML = "Inavlid First Name";
        return false;
    }

    return true;

}

function validateLastname() {
    var lastname = document.getElementById("lastname").value;
    var lstnameerror = document.getElementById("lnameError");
    var nameregex = /^[a-zA-Z]+$/;

    lstnameerror.innerHTML = "";

    if (!nameregex.test(lastname)) {
        lstnameerror.innerHTML = "Invalid Last Name";
        return false;
    }

    return true;
}

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
}
