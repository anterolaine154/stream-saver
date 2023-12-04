FILENAME: sophisticated_code.js

/*
* This code is a complex simulation of a shopping cart system with advanced features such as user authentication, product categorization, and order processing.
*/

// Global variables
const products = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    category: "Electronics",
    price: 999.99,
    quantity: 10
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 Ultra",
    category: "Electronics",
    price: 1199.99,
    quantity: 5
  },
  // More products...
];

let currentUser = null;
let shoppingCart = [];
let orders = [];

// Utility functions
function getProductById(productID) {
  return products.find(product => product.id === productID);
}

function getUserByUsername(username) {
  // Perform user lookup logic here
  // ...
  // Return the user object
  return user;
}

function authenticateUser(username, password) {
  const user = getUserByUsername(username);
  if (user && user.password === password) {
    currentUser = user;
    return true;
  }
  return false;
}

function addToCart(productID, quantity) {
  const product = getProductById(productID);
  if (!product) {
    console.log("Product not found.");
    return;
  }
  if (quantity > product.quantity) {
    console.log("Insufficient stock.");
    return;
  }

  const existingCartItem = shoppingCart.find(item => item.product.id === product.id);
  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    shoppingCart.push({ product, quantity });
  }

  product.quantity -= quantity;
}

function removeItemFromCart(productID) {
  const index = shoppingCart.findIndex(item => item.product.id === productID);
  if (index !== -1) {
    const { product, quantity } = shoppingCart[index];
    shoppingCart.splice(index, 1);
    product.quantity += quantity;
  }
}

function placeOrder() {
  if (currentUser) {
    const order = { user: currentUser, items: shoppingCart };
    orders.push(order);
    shoppingCart = [];
    console.log("Order placed successfully.");
  } else {
    console.log("User not authenticated. Please login first.");
  }
}

// Usage example:

// Authentication
authenticateUser("john_doe", "password123");

// Shopping
addToCart(1, 2);
addToCart(2, 1);
removeItemFromCart(1);

// Placing the order
placeOrder();

console.log(orders);
console.log(currentUser);
console.log(shoppingCart);
console.log(products);
console.log(getProductById(2));