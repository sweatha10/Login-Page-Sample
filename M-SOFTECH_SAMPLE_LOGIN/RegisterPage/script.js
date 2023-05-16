function submit() {
    console.log("xzc");
    var form = document.getElementById("registerform");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formdata = new FormData(form);
        var formobject = Object.fromEntries(formdata.entries());

        sessionStorage.setItem("formdata", JSON.stringify(formobject));


    })
}

function regform(registerform) {
    console.log("inside here");
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("frstname").value;
    var lastname = document.getElementById("lstname").value;
    var image = document.getElementById("output").value;
    if (email != "" && firstname != "" && lastname != "" && image != "") {
        alert("Registered Successfully")
        document.getElementById("fillform").style.display = "none";
        // window.location.href = "/WelcomePage/target.html";
    } else if (email == "" && firstname == "" && lastname == "" && image == "") {
        document.getElementById("fillform").style.display = "block";
    }
}




// function formvalidation() {
//     var valid = true;

//     if (!validateEmail()) {
//         valid = false;
//     }

//     if (!validateFirstname()) {
//         valid = false;
//     }

//     if (!validateLastname()) {
//         valid = false;
//     }

//     if (valid) {
//         alert("Registered Successfully")
//     }

//     return valid;

// }

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
    var firstname = document.getElementById("frstname").value;
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
    var lastname = document.getElementById("lstname").value;
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


