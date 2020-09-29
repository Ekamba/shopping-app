const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/", (req, res) => {
  const brand = req.query.brand;
  console.log("brand is : ", brand);

  // You can get same results without using filter by using SQL query WHERE clause
  let mysql = `SELECT id,brand FROM products`;
  let query = pool.query(mysql, (err, results) => {
    if (err) throw err;
    console.log("brandBasedProducts :", results);
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

module.exports = router;
