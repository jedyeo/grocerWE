const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let List = new Schema({
    name: {
        type: String,
    },
    creator: {
        type: ObjectId,
    },
    items: {
        type: Array,
    },
    status: {
        type: Array,
    },
});

module.exports = mongoose.model('List', List);
