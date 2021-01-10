const { findByIdAndDelete } = require('../models/item');
const Item = require('../models/item');

module.exports = {
    getItems: async (req, res) => {
        console.log("Here is a item placeholder!");
        res.status(200).send({"message": "Good"});
    },
    createItem: async (req, res) => {
        const itemName = req.body.name;
        const minPrice = req.body.minPrice;
        const maxPrice = req.body.maxPrice;
        const currency = req.body.currency;
        const notes = req.body.notes;

        const newItem = {
            name: itemName,
            status: "pending",
            minPrice,
            maxPrice,
            currency,
            notes,
        }

        try {
            await Item.create(newItem, (err, item) => {
                res.status(201).send(item);
            });         
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ "message": "Invalid parameters."});
        }
    },
    getItem: async (req, res) => {
        try {
            let myItem = await Item.findById(req.params.id).catch(() => null);
            if (myItem) {
                res.status(200).send(myItem);
            }
            else {
                res.status(404).send({ "message": "Item not found."});
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    },
    deleteItem: async (req, res) => {
        try {
            await Item.findByIdAndDelete(req.params.id);
            res.status(200).send();
        }
        catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }
}