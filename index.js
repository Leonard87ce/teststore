const express = require('express')
const app = express()
const port = 3000

const products = [
    {
        id: 1,
        name: "MacBook",
        price: 1999.00,
        image: "images/macbook.jpg",
        stock: 20
    },
    {
        id: 2,
        name: "iPhone 13",
        price: 899.00,
        image: "images/iphone13.jpg",
        stock: 80
    },
    {
        id: 3,
        name: "iPhone 12 Pro",
        price: 699.00,
        image: "images/iphone12pro.jpg",
        stock: 80
    },
    {
        id: 4,
        name: "Airpods Pro",
        price: 299.00,
        image: "images/airpods.jpg",
        stock: 200
    },
    {
        id: 5,
        name: "iPad Pro",
        price: 1299.00,
        image: "images/ipad.jpg",
        stock: 85
    },
    {
        id: 6,
        name: "Lightning charger (Fast charge)",
        price: 199.00,
        image: "images/charger.jpg",
        stock: 200
    },
]

app.get("/api/products", (req, res) => {
  res.send(products)
});

app.use("/", express.static("FE"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})