const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/", (req, res) => {
  const q = req.query.q;
  console.log("search is : ", q);

  // You can get same results without using filter by using SQL query WHERE clause
  let mysql = `SELECT * FROM products WHERE name='q'`;
  let query = pool.query(mysql, (err, results) => {
    if (err) throw err;
    console.log("searchQueryBasedProducts :", results);
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

module.exports = router;
