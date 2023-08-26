const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    qty: {
        type: String,
        required: true,
        min: 0
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    merchant: {
        type: ObjectId,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;