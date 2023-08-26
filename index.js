require("./db/database");
const mainRoutes = require("./routes/main");
const signingRoutes = require("./routes/signing");
const productRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");

const express = require("express");
const app = express();


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// /home
// /main - feed - mainpage
// /about
// /faq FAQ
app.use(mainRoutes);

// /signup
// /login
// /logout
app.use(signingRoutes);

// /profile
// /profile/edit
app.use(userRoutes);

// /categories
// /categories/:category
// (/categories/:category)?/:product
// /:product
// /cart
app.use(productRoutes);
app.use(cartRoutes);

// /search

// payments

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))