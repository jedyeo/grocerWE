// const Item = require('../models/item');

module.exports = {
    getItems: (req, res) => {
        console.log("Here is a item placeholder!");
        res.status(200).send({"message": "Good"});
    }
}