const db = require("../../config");
const { setContactData } = require ("../../models/contact");
const sendEmail = require("../../utils/sendEmail");

module.exports = {
    submitContactForm: (req, res) => {

        const values = [
            req.body.name,
            req.body.email,
            req.body.phone_number,
            req.body.service,
            req.body.message,
            req.body.date
        ];

        console.log("Contact form values:", values);

        db.query(setContactData, [values], (err, data) => {
            if (err) {
                console.error("Error inserting contact form data:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
            sendEmail("contact", req.body.email, "Contact Form Submission", values);
            res.status(200).json({ message: "Contact form submitted successfully" });
        });
    }
};