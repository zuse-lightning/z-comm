let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const getAllCollections = `SELECT * FROM ${database}.zcomm_collections`;
const getCollectionById = `SELECT * FROM ${database}.zcomm_collections WHERE collection_id = ? AND collection_store = ?`;

module.exports = {
    getAllCollections,
    getCollectionById
}