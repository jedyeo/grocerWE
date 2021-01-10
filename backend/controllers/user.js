const User = require('../models/user');

module.exports = {
    getUser: async (req, res) => {
        try {
            let myUser = await User.findOne({ email: req.body.email }).catch(() => null);

            if (myUser) {
                res.status(200).send(myUser);
            }
            else {
                res.status(404).send({ "message": "User does not exist" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ "message": "Invalid parameters" });
        }
    }
}