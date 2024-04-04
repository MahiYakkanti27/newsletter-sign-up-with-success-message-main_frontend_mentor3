function myfun() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    if (!validateEmail(email)) {
        document.getElementById("errormessage").innerHTML="Valid email required";
        emailInput.classList.add('invalid-email');
        return False;
    }
    else {
        emailInput.classList.remove('invalid-email');
        document.getElementById('submitLink').click();
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
