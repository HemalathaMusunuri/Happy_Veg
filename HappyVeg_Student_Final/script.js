var cart = [];
var cartCount = 0;
var total = 0;


/* Show Pages */
function showPage(page) {

    var pages = document.getElementsByClassName("page");

    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(page).style.display = "block";

    window.scrollTo(0, 0);

    if (page == "vegetables") {
        displayVegetables();
        displayCart();
    }
}


/* Display Vegetables */
function displayVegetables() {

    var output = "";

    output += `
    <div class="product">
        <img src="https://b2129550.assetcdn.net/2.0/2129550/wp-content/uploads/2012/02/Napa-Cabbage-scaled.jpg?lossy=1&strip=1&webp=1&size=750x0">
        <h3>Korean Cabbage</h3>
        <p>₹45 / kg</p>
        <button onclick="addCart('Korean Cabbage',45,'https://b2129550.assetcdn.net/2.0/2129550/wp-content/uploads/2012/02/Napa-Cabbage-scaled.jpg?lossy=1&strip=1&webp=1&size=750x0')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=500&q=80">
        <h3>Tomato</h3>
        <p>₹40 / kg</p>
        <button onclick="addCart('Tomato',40,'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=500&q=80')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://bloomica.in/cdn/shop/files/biggreenchilliseeds.jpg?v=1752689927&width=823">
        <h3>Green Chilly</h3>
        <p>₹35 / kg</p>
        <button onclick="addCart('Green Chilly',35,'https://bloomica.in/cdn/shop/files/biggreenchilliseeds.jpg?v=1752689927&width=823')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80">
        <h3>Onion</h3>
        <p>₹50 / kg</p>
        <button onclick="addCart('Onion',50,'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80">
        <h3>Potato</h3>
        <p>₹45 / kg</p>
        <button onclick="addCart('Potato',45,'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://bloomica.in/cdn/shop/files/carrotseeds.jpg?v=1752689970&width=823">
        <h3>Carrot</h3>
        <p>₹40 / kg</p>
        <button onclick="addCart('Carrot',40,'https://bloomica.in/cdn/shop/files/carrotseeds.jpg?v=1752689970&width=823')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80">
        <h3>Lemon</h3>
        <p>₹30 / kg</p>
        <button onclick="addCart('Lemon',30,'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80')">
        Add To Cart
        </button>
    </div>`;

    output += `
    <div class="product">
        <img src="https://bhoomifresh.com/image/cache/catalog/fruits_vegetables/beetroot-1100x1100.jpg">
        <h3>Beetroot</h3>
        <p>₹55 / kg</p>
        <button onclick="addCart('Beetroot',55,'https://bhoomifresh.com/image/cache/catalog/fruits_vegetables/beetroot-1100x1100.jpg')">
        Add To Cart
        </button>
    </div>`;

    document.getElementById("products").innerHTML = output;
}


/* Add To Cart */
function addCart(name, price, image) {

    cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
    });

    displayCart();
}


/* Display Cart */
function displayCart() {

    var output = "";
    var total = 0;
    var count = 0;

    if (cart.length == 0) {
        output = "<p>Your cart is empty.</p>";
    }

    for (var i = 0; i < cart.length; i++) {

        var item = cart[i];

        var amount = item.price * item.quantity;

        total = total + amount;
        count = count + item.quantity;

        output += `
        <div class="cartItem">

            <img src="${item.image}">

            <div class="cartDetails">

                <h4>${item.name}</h4>

                <p>₹${item.price} × ${item.quantity}</p>

                <div class="quantity">

                    <button onclick="decrease(${i})">-</button>

                    <button onclick="increase(${i})">+</button>

                    <button class="remove"
                    onclick="removeCart(${i})">
                    Remove
                    </button>

                </div>

            </div>

        </div>`;
    }

    document.getElementById("cartItems").innerHTML = output;

    document.getElementById("total").innerHTML = total;

    document.getElementById("cartCount").innerHTML = count;
}


/* Increase Quantity */
function increase(index) {

    cart[index].quantity++;

    displayCart();
}


/* Decrease Quantity */
function decrease(index) {

    cart[index].quantity--;

    if (cart[index].quantity == 0) {
        cart.splice(index, 1);
    }

    displayCart();
}


/* Remove Item */
function removeCart(index) {

    cart.splice(index, 1);

    displayCart();
}


/* Open Cart */
function openCart() {

    showPage("vegetables");
}


/* Checkout */
function checkout() {

    if (cart.length == 0) {

        alert("Your cart is empty.");

    } else {

        alert("Order placed successfully!");

        cart = [];

        displayCart();
    }
}


/* Signup */
function signup(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;

    var phone = document.getElementById("phone").value;

    localStorage.setItem("name", name);

    localStorage.setItem("phone", phone);

    alert("Account created successfully!");

    showPage("login");
}


/* Login */
function login() {

    var email = document.getElementById("loginEmail").value;

    var password = document.getElementById("loginPassword").value;

    if (email != "" && password != "") {

        alert("Login successful!");

        showPage("home");

    } else {

        alert("Please enter email and password.");
    }
}


/* Search */
function search() {

    var text = document.getElementById("search").value.toLowerCase();

    if (text == "tomato") {

        alert("Tomato found!");

    } else if (text == "potato") {

        alert("Potato found!");

    } else if (text == "onion") {

        alert("Onion found!");

    } else if (text == "cauliflower") {

        alert("Cauliflower found!");

    } else if (text == "green chilly") {

        alert("Green Chilly found!");

    } else if (text == "cucumber") {

        alert("Cucumber found!");

    } else if (text == "lemon") {

        alert("Lemon found!");

    } else if (text == "beans") {

        alert("Beans found!");

    } else {

        alert("Vegetable not found.");
    }

    showPage("vegetables");
}


/* Start Website */
displayVegetables();

displayCart();