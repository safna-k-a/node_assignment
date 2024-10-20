const express = require("express");
const router = express.Router();
const items = require("./items");
const products = require("./products");
const users = require("./users");
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/item_list", (req, res) => {
    res.render("item", { items });
});
router.get("/item_table", (req, res) => {
    res.render("table", { users });
});
router.get("/item_card", (req, res) => {
    res.render("card", { products });
});
module.exports = router;
