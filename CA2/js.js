function signIn() {
    validateForm();

    var password = document.getElementById("password").value.length;

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
    // same functionality as show, but hides the content instead
    for (let e of document.querySelectorAll('.hide'))
        e.style.visibility = 'hidden';
}

// used this function from the previous years example of CA2 
function validateForm() {
    var x = document.forms["order_form"]["username"].value;
    if (x == null || x == "") {
        alert("Username can not be blank.");
        return false;
    }
}

function order(){
    var burgerPrice = 0;
    var total = 0;
    var discountCode = 'tacotopping'; 

    var burgers = document.getElementById("burgers").value;

    if (burgers == '6oz - Large - €7') {
        burgerPrice = 7;
    } else if (burgers == '10oz - Extra Large - €9') {
        burgerPrice = 9;
    } else if (burgers == '16oz - Supersize - €17.50') {
        burgerPrice = 17.5;
    }

    var quantity = document.getElementById("quantity").value;

    total = quantity * burgerPrice;

    var discount = document.getElementById("discount").value;

    // found this method on w3schools.com when researching the best way to compare strings 
    var x = discount.localeCompare(discountCode);

    if (x == 0) {
        total = total - (total*0.1);
    }

    document.getElementById("total").innerHTML = 'Total: €' + total;
}




