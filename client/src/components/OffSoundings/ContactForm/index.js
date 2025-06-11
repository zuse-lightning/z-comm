import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";


import "./style.css";

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const FORM_ENDPOINT = "https://www.formbackend.com/f/1ff3b1b967ef8484";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const offSoundingsContactForm = document.getElementById("off-sound-contact-form");
        const formData = new FormData(offSoundingsContactForm);
        // const formEntries = Object.fromEntries(formData.entries());
        // formEntries.date = moment().format("YYYY-MM-DD HH:mm:ss");

        const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            },
            body: formData
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Form response was not ok");
            }
            setSubmitted(true);
        }).catch((err) => {
            e.target.submit();
        });
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                navigate("/");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [submitted, navigate]);
    
    if (submitted) {
        return (
            <>
                <div id="off-sound-thank-you-container">
                    <h2>Thank you!</h2>
                    <div>We'll be in touch soon.</div>
                </div>
            </>
        );
    };

    return (
        <div id="off-sound-contact-form-container">
            <Header as="h1" id="off-sound-contact-form-header">Contact</Header>
            <Header as="h4" id="off-sound-contact-form-subheader">Fill out the form below to get in touch with us!</Header>
            <form
                id="off-sound-contact-form"
                onSubmit={handleSubmit}
                action={FORM_ENDPOINT}
                method="POST"
            >
                <div id="off-sound-form-field-container">
                    <div className="off-sound-form-field-col">
                        <input id="off-sound-name-input" type="text" placeholder="Name" name="name" required />
                    </div>
                    <div className="off-sound-form-field-col">
                        <input id="off-sound-email-input" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="off-sound-form-field-col">
                        <input id="off-sound-phone-input" type="text" placeholder="Phone Number" name="phone_number" />
                    </div>
                    <div className="off-sound-form-field-col">
                        <textarea id="off-sound-message-input" placeholder="Message" name="message" required />
                    </div>
                </div>
                <button id="off-sound-submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;