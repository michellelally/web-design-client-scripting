

function signIn() {
    var password = document.getElementById("password").value.length;
    alert(password);

    if (password < 9) {
        // elements already hidden in css, but if the user enters another password that isn't >9 characters, it will hide elements again
        hide();
        // display error message 
        document.getElementById("error").innerHTML = "Error:"
        document.getElementById("login_error").innerHTML = "Password must be 9 characters in length"
    } else {
        // show the hidden elements so the user can complete the order
        show();
        // removing the error messages
        document.getElementById("error").innerHTML = ""
        document.getElementById("login_error").innerHTML = ""
    }
}

function show() {
    // using a for loop to set the visbility of each element in the hide class 
    // querySelectorAll() returns a collection of objects, so you have to iterate over each of them to change them individually
    for (let e of document.querySelectorAll('.hide'))
        e.style.visibility = 'visible';
}

function hide() {
    for (let e of document.querySelectorAll('.hide'))
        e.style.visibility = 'hidden';
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

