const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let List = new Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: ObjectId,
        required: true,
    },
    items: {
        type: [ ObjectId ],
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('List', List);
