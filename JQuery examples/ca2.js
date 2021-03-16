function allnumeric(pizzano, pizzasize) {
	var numbers = /^[0-9]+$/;
	if (pizzano.value.match(numbers)) {

		var tot_price = 0;
		if (pizzasize.value == "LA") {
			tot_price = 5 * pizzano.value
		}
		if (pizzasize.value == "XL") {
			tot_price = 7 * pizzano.value
		}
		if (pizzasize.value == "SU") {
			tot_price = 17 * pizzano.value;
			alert("Warning : Supersize selected")
		}
		var divobj = document.getElementById('tot_amount');
		divobj.value = tot_price;
		alert('Your number of pizzas has been accepted....');

		return true;
	}
	else {
		alert('Please input numeric characters only');
		return false;
	}
}


function calculateTotal(pizzasize, pizzano) {
	var tot_price = 0;
	if (pizzasize == "LA") {
		tot_price = 5 * pizzano
	}
	if (pizzasize == "XL") {
		tot_price = 7 * pizzano
	}
	if (pizzasize == "SU") {
		tot_price = 17 * pizzano;
		alert("Warning : Supersize selected")
	}
	var divobj = document.getElementById('tot_amount');
	divobj.value = tot_price;

}






