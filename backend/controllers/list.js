const List = require('../models/list');

async function editList(listID, itemID, operation, res) {
    const myList = await List.findById(listID).catch(() => null);
    // TODO Check item exists

    // If list and item exist
    if (myList && itemID) {
        if (operation === "add") {
            await List.findByIdAndUpdate(listID, {
                $push: { items: itemID }
            });
        }
        else { // We infer "delete"
            await List.findByIdAndUpdate(listID, {
                $pull: { items: itemID }
            });
        }
        return true;
    }
    else {
        res.status(400).send({ "message": "List or item doesn't exist" })
        return false;
    }
}

module.exports = {
    getLists: (req, res) => {
        console.log("Here is a list placeholder!");
        res.status(200).send({ "message": "Good" });
    },

    createList: async (req, res) => {
        let newList = {
            name: req.body.name,
            creator: req.body.id, // TODO, get creator from token
            items: [],
            complete: false,
        }

        try {
            await List.create(newList);
            res.status(201).send(newList);
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },

    addToList: async (req, res) => {
        try {
            if (editList(req.params.id, req.body.id, "add", res)) {
                const myList = await List.findById(req.params.id)
                res.status(200).send(myList);
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },

    removeFromList: async (req, res) => {
        try {
            if (editList(req.params.id, req.body.id, "delete", res)) {
                res.status(200).send();
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },

    // TODO, delete every item in list, then delete the list
    deleteList: async (req, res) => {
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(200).send();
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },
}