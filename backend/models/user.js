const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    groups: {
        type: Array,
    },
    lists: {
        type: Array,
    },
    friends: {
        type: Array,
    }
});

module.exports = mongoose.model('User', user);