const mongoose = require('mongoose')

const clothSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    new: {
        type: Boolean,
        required: true
    },
    sale: {
        begin: Boolean,
        discount: Number
    }
       
    
})

module.exports = mongoose.model('Clothes', clothSchema) 