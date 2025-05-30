import React from "react";
import { Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const ContactForm = () => {

    return (
        <div id="awhv-contact-form-container">
            <Header as="h1" id="awhv-contact-form-header">Contact</Header>
            <Header as="h4" id="awhv-contact-form-subheader">Fill out the form below to get in touch with us!</Header>
            <form
                id="awhv-contact-form"
                // onSubmit={handleSubmit}
                action="http://localhost:3001/api/contact"
            >
                <div id="awhv-form-field-container">
                    <div className="awhv-form-field-col">
                        <input id="awhv-name-input" type="text" placeholder="Name" name="name" required />
                    </div>
                    <div className="awhv-form-field-col">
                        <input id="awhv-email-input" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="awhv-form-field-col">
                        <input id="awhv-phone-input" type="text" placeholder="Phone Number" name="phone_number" />
                    </div>
                    <div className="awhv-form-field-col">
                        <textarea id="awhv-message-input" placeholder="Message" name="message" required />
                    </div>
                </div>
                <button id="awhv-submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;