const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "hat_store",
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
    const sqlSelect = "SELECT * FROM products INNER JOIN gender ON products.idgenders = gender.idgenders INNER JOIN product_image ON products.idproducts = product_image.idproducts INNER JOIN seasons ON products.idseasons = seasons.idseasons;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/genders", (req, res) => {
    const sqlSelect = "SELECT * FROM gender"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/gender", (req, res) => {
    const sqlSelect = "SELECT gender FROM gender"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/seasons", (req, res) => {
    const sqlSelect = "SELECT * FROM seasons"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})