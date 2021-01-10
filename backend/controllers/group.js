const Group = require('../models/group');
const User = require('../models/user');

module.exports = {
    getGroup: (req, res) => {
        try {
            const myGroup = Group.findById(req.params.id).catch(() => null)

            if (myGroup) {
                res.status(200).send(myGroup);
            }
            else {
                res.status(404).send({"message": "No groups exist with that id"});
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
        res.status(200).send({"message": "Good"});
    },
    createGroup: async (req, res) => {
        const name = req.body.name;
        const creator = req.headers.email;
        const participants = [];
        const lists = [];
        const transactions = [];

        const newGroup = {
            name,
            creator,
            participants,
            lists,
            transactions
        }

        try {
            await Group.create(newGroup, (err, result) => {
              res.status(201).send(result);  
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },
    addUserToGroup: async (req, res) => {
        const myUser = User.findById(req.body.id).catch(() => null);

        if (myUser) {
            const myGroup = Group.findById(req.params.id).catch(() => null);
            if (myGroup) {
                await Group.findByIdAndUpdate(req.params.id, {
                    $push: { participants: req.body.id }
                });
                res.status(200).send();
            }
            else {
                res.status(404).send({"message": "Group with that id does not exist"});
            }
        }
        else {
            res.status(404).send({"message": "User with that id does not exist"});
        }

    },
    removeUserFromGroup: async (req, res) => {
        const myUser = User.findById(req.body.id).catch(() => null);

        if (myUser) {
            const myGroup = Group.findById(req.params.id).catch(() => null);
            if (myGroup) {
                await Group.findByIdAndUpdate(req.params.id, {
                    $pull: { participants: req.body.id }
                });
                res.status(200).send();
            }
            else {
                res.status(404).send({"message": "Group with that id does not exist"});
            }
        }
        else {
            res.status(404).send({"message": "User with that id does not exist"});
        }
    },
    deleteGroup: async (req, res) => {
        try {
            await Group.findByIdAndDelete(req.params.id);
            res.status(200).send();
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }
}