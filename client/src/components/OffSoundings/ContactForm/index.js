import React from "react";
import { Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const ContactForm = () => {

    return (
        <div id="off-sound-contact-form-container">
            <Header as="h1" id="off-sound-contact-form-header">Contact</Header>
            <Header as="h4" id="off-sound-contact-form-subheader">Fill out the form below to get in touch with us!</Header>
            <form
                id="off-sound-contact-form"
                // onSubmit={handleSubmit}
                action="http://localhost:3001/api/contact"
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