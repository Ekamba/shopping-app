const express = require("express");
const app = express();
const products = require("./api/products");
const brand = require("./router/brand");
const category = require("./router/categories");
const gender = require("./router/genders");
const query = require("./router/search");
const cors = require("cors");

//why is there both a router and an api folder??

//since there is not too much logic going on, it is okay to have either a Controller or a Router, (you can use both, but in this case, it is okay, just to have one)
//When more logic is implemented it is better to have all logic (for example SQL queries in a controller)

//

const port = process.env.PORT || 3000;

//== Set static folder
app.use("/static", express.static(__dirname + "/assets"));

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)

app.use(cors());

//Below part is nice. Nice use of routers, not keeping everything in one file.

// create a route for the app
app.use("/api/products", products);
app.use("/router/brand", brand);
app.use("/router/category", category);
app.use("/router/gender", gender);
app.use("/api/products", query);

// make the server listen to requests
app.listen(port, () =>
  console.log(`Server started at port ${port} for Clothing Shop App!`)
);
