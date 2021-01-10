// const Group = require('../models/group');

module.exports = {
    getGroups: (req, res) => {
        console.log("Here is a group placeholder!");
        res.status(200).send({"message": "Good"});
    }
}