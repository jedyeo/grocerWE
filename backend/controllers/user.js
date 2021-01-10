// const User = require('../models/user');

module.exports = {
    getUsers: (req, res) => {
        console.log("Here is a user placeholder!");
        res.status(200).send({"message": "Good"});
    }
}