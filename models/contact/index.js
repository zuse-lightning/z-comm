let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const setContactData = `INSERT INTO ${database}.zcomm_contact (name, email, phone_number, service, message) VALUES (?)`;

module.exports = {
    setContactData
};