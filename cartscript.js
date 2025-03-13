// Call the displayCart function to display cart items when the cart page loads
window.onload = function() {
	updateCart();
	displayCart();	
};

function addToCart(productName, price, quantity, imageSrc,size ) {
	var item = {
		productName: productName,
		price: price,
		size: size,
		imageSrc: imageSrc, // add image source to the product object
		quantity: quantity

	};
	// Get the cart from the database 
	var cart = JSON.parse(localStorage.getItem("cart")) || [];

	if (cart == null) {
        cart = [];
    }
	// Add the item to the cart
	var exist = -1;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].productName == productName && cart[i].size == size) {
			exist = i;
			break;
		}
	}
  if (exist != -1) {
		// If item already exists in the cart, update the quantity
		cart[exist].quantity += quantity;
	} else {
		// If item doesn't exist in the cart, add it
		cart.push(item);
	}
	// Store the updated cart back to local storage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Update the cart count in local storage
  

	// Show a confirmation message
	alert("Item added to cart!");

	// Optional: Update the cart count in the UI
	updateCart();
}

// Function to update the cart count in the UI
function updateCart() {
	var cart = JSON.parse(localStorage.getItem("cart")) || [];
	var totalQuantity = 0;

  // Calculate the total quantity of items in the cart
  	for (var i = 0; i < cart.length; i++) {
    	totalQuantity += cart[i].quantity;
  	}

 	var cartCountElement = document.getElementsByClassName("cart-count")[0];
	if (cartCountElement) {
		cartCountElement.innerHTML = totalQuantity;
		if (totalQuantity == 0) {
			cartCountElement.style.display = "none";
		} else {
		  	cartCountElement.style.display = "block";
		}
	}

	localStorage.setItem("cart-count", totalQuantity);

}

document.addEventListener("DOMContentLoaded", function() {
	var cartCountElement = document.getElementsByClassName("cart-count")[0];
	var cartCount = localStorage.getItem("cart-count");
  
	if (cartCountElement && cartCount && cartCount > 0) {
	  cartCountElement.innerHTML = cartCount;
	  cartCountElement.style.display = "block";
	}
});


// Function to display cart items on the cart page
function displayCart() {

    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartItemsElement = document.getElementById("cart-items");
    var totalElement = document.getElementById("total");
    var total = 0;
    // Check if cartItemsElement exists before proceeding
    if (cartItemsElement) {
        // Clear the cart items element before displaying items
        cartItemsElement.innerHTML = "";

        // Loop through the cart items and display them in the UI
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            var itemElement = document.createElement("div");
            itemElement.className = "cart-item";
            itemElement.innerHTML = `
                <div class="item-image">
                    <img src="${item.imageSrc}" alt="${item.productName}">
                </div>
                <div class="item-details">
                    <p class="item-name">${item.productName}</p>
                    ${item.size ? `<p class="item-size">Size: ${item.size}</p>` : ''}
                    <p class="item-quantity">Quantity: ${item.quantity}</p>
                    <p class="item-price">$${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${i})">Remove</button>
	
            `;
            cartItemsElement.appendChild(itemElement);

            // Add item price multiplied by quantity to the total
            total += item.price * item.quantity;
        }
    }

    // Check if totalElement exists before updating innerHTML
    if (totalElement) {
        // Update the total element with the calculated total
        totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    }
}


// Function to remove an item from the cart
function removeFromCart(index) {
	var cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Remove the item from the cart array
	cart.splice(index, 1);

	// Store the updated cart back to local storage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Display updated cart items
	displayCart();

	// Update cart
	updateCart();
}

// Clear the cart
function clearCart() {
	// Remove cart items
	localStorage.removeItem("cart");

	// Display empty cart 
	displayCart();

	// Update the cart count 
	updateCart();
}