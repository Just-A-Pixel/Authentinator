const mongoose = require('mongoose')
const clothSchema = require("./clothes")
const cartSchema = new mongoose.Schema({
    _id:  String,

    items: [{
        name: String
    }]
})

module.exports = mongoose.model('cart', cartSchema) 