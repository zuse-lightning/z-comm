const db = require("../../config");
const { setContactData } = require ("../../models/contact");

module.exports = {
    submitContactForm: (req, res) => {

        const values = [
            req.body.name,
            req.body.email,
            req.body.phone_number,
            req.body.service,
            req.body.message
        ];

        console.log("Contact form values:", values);

        db.query(setContactData, [values], (err, data) => {
            if (err) {
                console.error("Error inserting contact form data:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
            res.status(200).json({ message: "Contact form submitted successfully" });
        });
    }
};