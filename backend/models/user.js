const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    groups: {
        type: Array,
    },
    lists: {
        type: Array,
    },
    friends: {
        type: Array,
    },
    key: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', User);