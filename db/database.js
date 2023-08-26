const mongoose = require("mongoose");
const databaseURI = "mongodb://127.0.0.1:27017/toffee";

mongoose.connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Failed"));
db.once("open", () => { console.log("Database Connected") });