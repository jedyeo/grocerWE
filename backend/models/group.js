const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Group = new Schema({
    name: {
        type: String,
    },
    creator: {
        type: ObjectId,
    },
    participants: {
        type: Array,
    },
    lists: {
        type: Array,
    },
    transactions: {
        type: Array,
    },
});

module.exports = mongoose.model('Group', Group);
