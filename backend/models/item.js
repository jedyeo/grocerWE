const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
    },
    minPrice: {
        type: Number,
    },
    maxPrice: {
        type: Number,
    },
    currency: {
        type: String,
    },
    notes: {
        type: String,
    }
});

module.exports = mongoose.model('Item', Item);