let productList = [];
let cart = [];
let total = 0;

function add(productId, price) {
    const product = productList.find(p => p.id === productId);
    product.stock--;


    console.log(productId, price);
    cart.push(productId);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pay $${total}`
    displayProducts();
}

async function pay() {
    try{
        const productList = await (await fetch("/api/pay",{
            method: "post",
            body: JSON.stringify(cart),
            headers: {
                "Content-Type": "application/json"
            }
        })).json();
    }
    catch {
        window.alert("Out of stock");
    }

    cart = [];
    total = 0;
    await fetchProducts();
    document.getElementById("checkout").innerHTML = `Pay $${total}`
}

//-----
function displayProducts() {
    let productsHTML = '';
    productList.forEach(p => {
        let buttonHTML = `<button class="button-add" onclick="add(${p.id}, ${p.price})">Pay</button>`;

        if (p.stock <= 0) {
            buttonHTML = `<button disabled class="button-add disabled" onclick="add(${p.id}, ${p.price})">Sin stock</button>`;
        }

        productsHTML +=
        `<div class="product-container">
            <h3>${p.name}</h3>
            <img src="${p.image}" />
            <h1>$${p.price}</h1>
            ${buttonHTML}
        </div>`
    });
    document.getElementById('page-content').innerHTML = productsHTML;
}

async function fetchProducts(){
    productList = await (await fetch("/api/products")).json();
    displayProducts();
}

window.onload = async() => {
    await fetchProducts();
}