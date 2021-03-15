function validateForm(){
    var x = document.forms["order_form"]["username"].value;
    if (x == null || x == "") {
        alert("First name mustbefilledout");
        return false;
    }
}


$(document).ready(function(){
    $("select.menu").change(function(){
        var selectedBurger = $(this).children("option:selected").val();
        alert("You have selected the " + selectedBurger + " burger.");
    });
});