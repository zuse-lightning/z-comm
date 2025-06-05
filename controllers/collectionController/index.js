const db = require("../../config");
const { getAllCollections, getCollectionById, getCollectionsByStore } = require("../../models/collections");

module.exports = {
    getCollections: (req, res) => {
        const { collectionId, store } = req.query;
        if (!collectionId || !store) {
            db.query(getAllCollections, (err, data) => {
                if (err) return res.json(err);
                console.log("Getting all collections");
                console.log(collectionId, store);
                return res.status(200).json(data);
            });
        } else if (!collectionId && store) {
            db.query(getCollectionsByStore, [store], (err, data) => {
                if (err) return res.json(err);
                console.log("Getting collections for store:", store);
                return res.status(200).json(data);
            });
        } else {
            db.query(getCollectionById, [collectionId, store], (err, data) => {
                if (err) return res.json(err);
                console.log("Getting collection by ID:", collectionId, "for store:", store);
                return res.status(200).json(data);
            });
        }
    },
    // getCollection: (req, res) => {
    //     db.query(getCollectionById, [req.params.collectionId, req.params.store], (err, data) => {
    //         if (err) return res.json(err);
    //         return res.status(200).json(data);
    //     });
    // }
}