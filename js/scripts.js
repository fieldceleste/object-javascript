// Backend Logic------------------------------------------------------>

// object-Pizza
function Pizza(toppings, size) {
  this.size = size,
    this.toppings = toppings
  this.name = "";
  // this.cost = 0.00;
}
// // Makes sure toppings and name is inputted
// var orderName = function (pizza) {
//   if (pizza.name.length === 0) {
//     alert("Please enter a name for this order!");
//     return false;
//   };

//   if (pizza.toppings.length === 0) {
//     var reply = confirm("You havent picked any toppings, your pizza will be gross!");
//     if (reply === false) {
//       return false;
//     }
//   };
//   if (pizza.size.length === 0) {
//     var reply = confirm("Please choose a pizza size");
//     if (reply === false) {
//       return false;
//     }
//   };
//   return true;
// };

//Price for size
Pizza.prototype.pizzaPrice = function (size, toppings) {
  var price = 0;
  if (this.size === "Small") {
    price += 5;
  } else if (this.size === "Medium") {
    price += 10;
  } else if (this.size === "Large") {
    price += 15;
  } else if (this.size === "X-large") {
    price += 20;
  }

  //Price for Toppings
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings.length === 1) {
      price += 0.25;
    } else if (this.toppings.length === 2) {
      price += 0.25;
    } else if (this.toppings.length === 3) {
      price += 0.25;
    } else if (this.toppings.length === 4) {
      price += 0.25;
    } else if (this.toppings.length === 5) {
      price += 0.25;
    } else if (this.toppings.length === 6) {
      price += 0.25;
    } else if (this.toppings.length === 7) {
      price += 0.25;
    } else if (this.toppings.length === 8) {
      price += 0.25;
    } else if (this.toppings.length === 9) {
      price += 0.25;
    } else if (this.toppings.length === 10) {
      price += 0.25;

    }
  }
  return this.cost = price;
};





//-Front End------------------------------------------------------------>

$(document).ready(function () {
  $("#inputtedOrder").submit(function (event) {
    event.preventDefult();

    // To display pizza toppings and size inputted
    var sizeChoice = $("input:radio[name=size]:checked").val();
    var selectedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function () {
      selectedToppings.push($(this).val());
    });
    var pizza = new Pizza(sizeChoice, selectedToppings);
    pizza.pizzaPrice();
    // //When order submitted
    // if (orderName(pizza)) {
    //   alert("Your pizza order has been submitted");
    //   $("#btn-place-order").attr("disabled", true);
    // };


    // Outputted order results 
    $("#inputtedOrder").text(pizza.name + "your" + pizza.size, + "pizza with" + "<li>" + pizza.toppings + "</li>" + "will be" + "<u>" + pizza.cost + "</u>" + "- Thank you for your order");

    // To make a new order
    $("#reload").click(function () {
      location.reload();
    });
  });
});





    // var toppingHTML = "";
  //   pizza.toppings.forEach(function (topping) {
  //     toppingHTML += "<li>" + topping.slice(2) + "</li>";
  //   });
  //   $("#toppings-amount").html(toppingHTML);

  //   $("#size-output").text(pizza.size);
  //   $(".total").text(pizza.price.toFixed(2));
  // });
