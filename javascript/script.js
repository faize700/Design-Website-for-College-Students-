// Sample food items (replace with your own data)
const foodData = [
  { name: "Pizza", price: 10 },
  { name: "Burger", price: 8 },
  { name: "Salad", price: 6 },
];

// Function to display food items in the menu
function displayMenu() {
  const foodItemsContainer = document.getElementById("foodItems");

  foodData.forEach((item, index) => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    foodItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
    foodItemsContainer.appendChild(foodItem);
  });
}

// Function to add items to the cart
let cart = [];
function addToCart(index) {
  const selectedItem = foodData[index];
  cart.push(selectedItem);
  displayCart();
}

// Function to display cart items
function displayCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerText = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(cartItem);
  });
}

// Function to simulate checkout (clears the cart)
function checkout() {
  cart = [];
  displayCart();
  alert("Thank you for your order!");
}

// Display initial menu and cart
displayMenu();
displayCart();
