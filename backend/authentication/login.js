const User = require('../models/user');

module.exports = {
    loginUser: async (req, res) => {
        const email = req.headers.email;
        const authKey = req.headers.key;
        
        // Check if user exists
        const myUser = await User.findOne({ email: email }).catch(() => null);

        if (!myUser) {
            res.status(401).send({"message": `No user exists with email: ${email}`});
        }
        else {
            if (myUser.key === authKey) {
                res.status(200).send()
            }
            else {
                res.status(401).send({"message": "Invalid credentials"});
            }
        }
    },

    signUpUser: async (req, res) => {
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const key = req.body.key;

        // Check if user exists
        const myUser = await User.findOne({ email: email }).catch(() => null);

        if (myUser) {
            res.status(401).send({"message": "User already exists."});
        }
        else {
            const newUser = {
                "email": email,
                "firstName": firstName,
                "lastName": lastName,
                "key": key
            }
            try {
                await User.create(newUser);
                res.status(201).send();
            }
            catch (err) {
                console.log(err);
                res.status(400).send({"message": "Invalid parameters"});
            }
            
        }
    }
}