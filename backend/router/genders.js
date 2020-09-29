const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/", (req, res) => {
  const gender = req.query.gender;
  console.log("gender is : ", gender);

  // You can get same results without using filter by using SQL query WHERE clause
  let mysql = `SELECT * FROM products WHERE gender='${gender}' ;`;
  let query = pool.query(mysql, (err, results) => {
    if (err) throw err;
    console.log("genderBasedProducts :", results);
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

module.exports = router;
