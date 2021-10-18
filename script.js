let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pay $${total}`
}

function pay() {
    window.alert("You will buy : \n" + products.join(", \n"));
}