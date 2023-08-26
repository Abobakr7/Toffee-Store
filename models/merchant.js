const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const merchantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please Enter a valid email"],
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        match: /^(01)(0|1|2|5)[0-9]{8}$/
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "Password cannot be less than 6 characters"]
    },
    company: {
        type: String,
        trim: true
    },
    address: {
        type: String
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

const Merchant = mongoose.model("Merchant", merchantSchema);
module.exports = Merchant;