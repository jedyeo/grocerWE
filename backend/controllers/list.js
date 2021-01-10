// const List = require('../models/list');

module.exports = {
    getLists: (req, res) => {
        console.log("Here is a list placeholder!");
        res.status(200).send({"message": "Good"});
    }
}