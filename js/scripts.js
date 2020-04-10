// Backend Logic------------------------------------------------------>

// object-Pizza
function Pizza (toppings, size) {
this.toppings= toppings,
this.size= size
this.name ="";
this.cost= 0.00;
}
// makes sure toppings and name is inputted
var orderNameinput = function(pizza) {
  if (pizza.orderName.length === 0) {
    alert("Please enter a name for this order!");
    return false;
  };

  if (pizza.toppings.length === 0) {
    var reply = confirm("You havent picked any toppings, your pizza will be gross!");
    if ( reply === false) {
      return false;
    }
  };

  return true;
};

//Price for size
Pizza.prototype.pizzaPrice = function(size,toppings){
  var price = 0;
  if (this.size === "small") {
  price += 5;
} else if (this.size === "medium" ) {
  price += 10;
} else if (this.size === "large" ) {
  price += 15;
 } else if (this.size === "x-large" ) {
  price += 20;
 }
}
//Price for Toppings
for (var i =0; i < this.toppings.length; i++){
  if(this.toppings.length === 1) {
    price += 1;
  } else if (this.toppings.length === 2) {
    price += 1;
  } else if (this.toppings.length === 3) {
    price += 1;
  }else if (this.toppings.length === 4) {
    price += 1;
  }else if (this.toppings.length === 5) {
    price += 1;
  }else if (this.toppings.length === 6) {
    price += 1;
  }else if (this.toppings.length === 7) {
  price += 1;
  }else if (this.toppings.length === 8) {
  price += 1;
  } else if (this.toppings.length === 9) {
  price += 1;
}
 return this.cost = price;
};
