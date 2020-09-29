const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/", (req, res) => {
  let mysql = "SELECT * FROM products";
  let query = pool.query(mysql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

router.get("/:id", (req, res) => {
  let mysql = "SELECT * FROM products WHERE id=" + req.params.id;
  let query = pool.query(mysql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

module.exports = router;
