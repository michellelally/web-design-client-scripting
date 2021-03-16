function hide() {
    for (let el of document.querySelectorAll('.hide')) el.style.visibility = 'hidden';
}

function signIn() {
    var password = document.getElementById("password").value.length;
    alert(password);

    if (password < 9) {
        document.getElementById("error").innerHTML = "Error:"
        document.getElementById("login_error").innerHTML = "Password must be 9 characters in length"
    }

}

function show() {
    for (let el of document.querySelectorAll('.hide')) el.style.visibility = 'show';
}

function validateForm() {
    var x = document.forms["order_form"]["username"].value;
    if (x == null || x == "") {
        alert("Username can not be blank.");
        return false;
    }
}

$(document).ready(function () {
    $("select.menu").change(function () {
        var selectedBurger = $(this).children("option:selected").val();
        alert("You have selected the " + selectedBurger + " burger.");
    });
});

