// JavaScript function to handle the click event
function addToCart() {
    // Get the cart icon element by its ID
    var cartIcon = document.getElementById("cart-el");
    
    // Add the 'bi-cart2-fill' class to change the cart icon to a filled cart
    cartIcon.classList.add("bi-cart2-fill");
    
    // Optional: You can also update the title attribute to display a tooltip
    cartIcon.setAttribute('title', 'Item added to cart');
  }
  