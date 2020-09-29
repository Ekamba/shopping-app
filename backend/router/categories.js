const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/", (req, res) => {
  const category = req.query.category;
  console.log("category is : ", category);

  // You can get same results without using filter by using SQL query WHERE clause
  let mysql = `SELECT * FROM products WHERE category='${category}' ;`;
  let query = pool.query(mysql, (err, results) => {
    if (err) throw err;
    console.log("categoryBasedProducts :", results);
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

module.exports = router;
