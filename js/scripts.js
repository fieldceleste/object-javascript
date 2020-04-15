// Backend Logic------------------------------------------------------>
function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.itemPrice = function() {
  var price = 0;
  if (this.size === "Small") {
  price += 5;
} else if (this.size === "Medium" ) {
  price += 10;
}  else if (this.size === "Large" ) {
  price += 15;
 } else if (this.size === "X-Large" ) {
  price += 20;
 }
for (var i = 0; i < this.toppings.length; i++){
  if(this.toppings.length === 1) {
    price +=0.25;
  } else if (this.toppings.length === 2) {
    price +=0.25;
  } else if (this.toppings.length === 3) {
    price +=0.25;
  }else if (this.toppings.length === 4) {
    price +=0,25;
  }else if (this.toppings.length === 5) {
    price +=0.25;
  }
}
 return this.cost = price;
};


// user interface
$(document).ready(function(){
  $("form#inputtedOrder").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input:radio[name=size]:checked").val();
    var toppingsSelected = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      toppingsSelected.push($(this).val());
    });
    var pizza = new Pizza(pizzaSize, toppingsSelected);
    pizza.itemPrice();

    $("#inputtedOrder").append("You have ordered a " + pizza.size + " pizza with " + pizza.toppings + " for a total of " + pizza.cost + " dollars.");

    console.log(pizzaSize);
    console.log(pizza.cost);
    console.log(pizza.toppings);




  });
});

















































// // Constructor-Pizza
// function Pizza() {
//   this.size = "";
//   this.toppings = [];
//   this.name = "";
//   this.price = 0;
// };
// // // Makes sure toppings and name is inputted
// // var orderName = function (pizza) {
// //   if (pizza.name.length === 0) {
// //     alert("Please enter a name for this order!");
// //     return false;
// //   };

// //   if (pizza.toppings.length === 0) {
// //     var reply = confirm("You havent picked any toppings, your pizza will be gross!");
// //     if (reply === false) {
// //       return false;
// //     }
// //   };
// //   if (pizza.size.length === 0) {
// //     var reply = confirm("Please choose a pizza size");
// //     if (reply === false) {
// //       return false;
// //     }
// //   };
// //   return true;
// // };

// //Price for size
// Pizza.prototype.pizzaPrice = function() {
//   // var price = 0;
//   if (this.size === "Small") {
//     this.price += 25
//   } else if (this.size === "Medium") {
//     this.price += 10
//   } else if (this.size === "Large") {
//     this.price += 125
//   } else if (this.size === "X-large") {
//     this.price += 20
//   }
// }

 





// //-Front End------------------------------------------------------------>

// $(document).ready(function () {
//   $("#inputtedOrder").submit(function (event) {
//     event.preventDefult();

//     // To display pizza toppings and size inputted
//     var sizeChoice = $("input:radio[name=size]:checked").val();
//     var selectedToppings = [];
//     $("input:checkbox[name=topping]:checked").each(function () {
//       selectedToppings.push($(this).val());
//     });
//     var pizza = new Pizza(sizeChoice, selectedToppings);
//     pizza.pizzaPrice();
//     // //When order submitted
//     // if (orderName(pizza)) {
//     //   alert("Your pizza order has been submitted");
//     //   $("#btn-place-order").attr("disabled", true);
//     // };


//     // Outputted order results 
//     $("#inputtedOrder").text(pizza.name + "your" + pizza.size, + "pizza with" + "<li>" + pizza.toppings + "</li>" + "will be" + "<u>" + pizza.cost + "</u>" + "- Thank you for your order");

//     // To make a new order
//     $("#reload").click(function () {
//       location.reload();
//     });
//   });
// });





//     // var toppingHTML = "";
//   //   pizza.toppings.forEach(function (topping) {
//   //     toppingHTML += "<li>" + topping.slice(2) + "</li>";
//   //   });
//   //   $("#toppings-amount").html(toppingHTML);

//   //   $("#size-output").text(pizza.size);
//   //   $(".total").text(pizza.price.toFixed(2));
//   // });
