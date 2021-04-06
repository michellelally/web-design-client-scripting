// used this function from the jQuery samples we were provided 
$(document).ready(function(){
    // getting the burgers element from the HTML and assigning a function call for when it changes
    $("select.burgers").change(function(){
        // assigning this variable to the value of the selected option from the drop down list
        var selectedBurger = $(this).children("option:selected").val();

        // checking if the user selected option number 3
        if (selectedBurger == 3){

            // output this alert to the user
            alert("Due to health and safey reasons, we must warn you that you've chosen the Supersize Burger");
        }
    });
});

// used this function from the previous years example of CA2 
function validateForm() {

    //setting x to the value of username in the login form
    var x = document.forms["login_form"]["username"].value;

    // Storing username in local storage
    localStorage.setItem("username", x);

    //checking if the variable x is left blank 
    if (x == null || x == "") {

        // alert the user
        alert("Username can not be blank.");
        return false;
    }
}

function signIn() {

    //calling the validateForm() function
    validateForm();

    // getting the length of the value of the element with an id of password from the HTML 
    var password = document.getElementById("password").value.length;

    // checking if the length is < 9
    if (password < 9) {

        // update the html of the elements with id of error and login_error
        document.getElementById("error").innerHTML = "Error:"
        document.getElementById("login_error").innerHTML = "Password must be 9 characters in length"
    
    } else {

        // hide the login form
        hide();

        // show the hidden order form so the user can complete the order
        show();

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
    for (let e of document.querySelectorAll('#login_form'))
        e.style.visibility = 'hidden';
}

function order(){

    // declaring variables
    var burgerPrice = 0;
    var total = 0;
    var discountCode = 'tacotopping'; 

    // getting the value of the element with an id of burgers from the HTML
    var burgers = document.getElementById("burgers").value;

    // if the user selected burger number 1
    if (burgers == 1) {

        // set the price of the burger to 7
        burgerPrice = 7;

    // if the user selected burger number 1    
    } else if (burgers == 2) {

        // set the price of the burger to 7
        burgerPrice = 9;

    // if the user selected burger number 1        
    } else if (burgers == 3) {

        // set the price of the burger to 7
        burgerPrice = 17.5;
    }

    // getting the value of the element with an id of quantity from the HTML
    var quantity = document.getElementById("quantity").value;

    // set the total to quantity * burgerPrice
    total = quantity * burgerPrice;

    // getting the value of the element with an id of discount from the HTML
    var discount = document.getElementById("discount").value;

    // found this method on w3schools.com when researching the best way to compare strings 
    var x = discount.localeCompare(discountCode);

    // locale compare returns 0 or 1, 0 if the strings are the same or 1 if they are incorrect
    // checking if x = 0
    if (x == 0) {

        // reduce the cost of the burgers by 10%
        total = total - (total*0.1);
    }

    // update the html of the elements with id total
    document.getElementById("total").innerHTML = 'Total: €' + total;
}
