const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    minPrice: {
        type: Number,
        required: true,
    },
    maxPrice: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Item', Item);