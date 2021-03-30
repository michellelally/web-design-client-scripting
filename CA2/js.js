$(document).ready(function(){
    $("select.burgers").change(function(){
        var selectedBurger = $(this).children("option:selected").val();
      //  alert("You have selected the burger - " + selectedBurger);


        if (selectedBurger == 3){
            alert("Due to health and safey reasons, we must warn you that you've chosen the Supersize Burger");
        }

    });
});

function signIn() {
    validateForm();

    var password = document.getElementById("password").value.length;

    if (password < 9) {
        document.getElementById("error").innerHTML = "Error:"
        document.getElementById("login_error").innerHTML = "Password must be 9 characters in length"
    } else {
        // show the hidden elements so the user can complete the order
        show();
        // hide the login 
        hide();
        // removing the error messages
        document.getElementById("error").innerHTML = ""
        document.getElementById("login_error").innerHTML = ""
    }
}

function show() {
    // using a for loop to set the visbility of each element in the hide class 
    // querySelectorAll() returns a collection of objects, so you have to iterate over each of them to change them individually
    for (let e of document.querySelectorAll('.order'))
        e.style.visibility = 'visible';
}

function hide() {
    // same functionality as show, but hides the content instead
    for (let e of document.querySelectorAll('.login'))
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

    if (burgers == 1) {
        burgerPrice = 7;
    } else if (burgers == 2) {
        burgerPrice = 9;
    } else if (burgers == 3) {
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
