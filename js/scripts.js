// Backend Logic------------------------------------------------------>

// object-Pizza
function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
  this.name = "";
  this.cost = 0.00;
}
// Makes sure toppings and name is inputted
var orderName = function (pizza) {
  if (pizza.name.length === 0) {
    alert("Please enter a name for this order!");
    return false;
  };

  if (pizza.toppings.length === 0) {
    var reply = confirm("You havent picked any toppings, your pizza will be gross!");
    if (reply === false) {
      return false;
    }
  };
  if (pizza.size.length === 0) {
    var reply = confirm("Please choose a pizza size");
    if (reply === false) {
      return false;
    }
  };
  return true;
};

//Price for size
Pizza.prototype.pizzaPrice = function (size, toppings) {
  var price = 0;
  if (this.size === "small") {
    price += 5;
  } else if (this.size === "medium") {
    price += 10;
  } else if (this.size === "large") {
    price += 15;
  } else if (this.size === "x-large") {
    price += 20;
  }
}
//Price for Toppings
for (var i = 0; i < this.toppings.length; i++) {
  if (this.toppings.length === .25) {
    price += .25;
  } else if (this.toppings.length === 2) {
    price += .25;
  } else if (this.toppings.length === 3) {
    price += .25;
  } else if (this.toppings.length === 4) {
    price += .25;
  } else if (this.toppings.length === 5) {
    price += .25;
  } else if (this.toppings.length === 6) {
    price += .25;
  } else if (this.toppings.length === 7) {
    price += .25;
  } else if (this.toppings.length === 8) {
    price += .25;
  } else if (this.toppings.length === 9) {
    price += .25;
  } else if (this.toppings.length === 10) {
    price += .25;
  }
  // Total Price
  return this.cost = price;
};

//-Front End------------------------------------------------------------>

var pizza;

$(document).ready(function () {
  $("form#inputOrder").submit(function (event) {
    event.preventDefult();

    // To display pizza toppings and size inputted
    var sizeChoice = $("input:radio[name=size]:checked").val();
    var selectedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function () {
      pizza.selectedToppings.push($(this).val());  //-----------------------?
    });

    var pizza = new Pizza(sizeChoice, selectedToppings);
    pizza.pizzaPrice();
    //When order submitted
    if (orderName(pizza)) {
      alert("Your pizza order has been submitted");
      $(".confirmed").css("background-color", "green");
      $("#btn-place-order").attr("disabled", true);
    };
    // Outputted order results 
    $("#placeOrder").text("Details about your order:" + pizza.name + "your" + pizza.size, + "pizza with" + "<li>" + pizza.toppings + "</li>" + "will be" + "<u>" + pizza.cost + "</u>" + "- Thank you for your order");

    // To make a new order
    $("#reload").click(function () {
      location.reload();
    });
  });
});
