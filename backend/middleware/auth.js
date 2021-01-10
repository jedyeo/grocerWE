const User = require('../models/user');

module.exports = {
    checkCredentials: async (req, res) => {
        const email = req.headers.email;
        const authKey = req.headers.key;
        
        // Check if user exists
        const myUser = await User.findOne({ email: email }).catch(() => null);

        if (!myUser) {
            res.status(401).send({"message": `No user exists with email: ${email}`});
        }
        else {
            if (myUser.key === authKey) {
                next();
            }
            else {
                res.status(401).send({"message": "Invalid credentials"});
            }
        }
    }
}