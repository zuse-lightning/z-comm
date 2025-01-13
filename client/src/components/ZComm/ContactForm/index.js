import React from "react";
import { Header, Button } from "semantic-ui-react";

import "./style.css";

const ContactForm = () => {
    return (
        <div id="zcomm-contact-form-container">
            <form id="zcomm-contact-form">
                <div id="zcomm-form-field-container">
                    <div className="zcomm-form-field-col">
                        <input id="zcomm-name-input" type="text" placeholder="Name" name="name" required />
                    </div>
                    <div className="zcomm-form-field-col">
                        <input id="zcomm-email-input" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="zcomm-form-field-col">
                        <input id="zcomm-phone-input" type="text" placeholder="Phone Number" name="phone-number" />
                    </div>
                    <div className="zcomm-form-field-col">
                        <select name="service" id="zcomm-service-select" required>
                            <option value="" disabled selected>Select a Service</option>
                            <option value="web-development">Web Development</option>
                            <option value="e-commerce">E-Commerce</option>
                            <option value="product-fulfillment">Product Fulfillment</option>
                        </select>
                    </div>
                    <div className="zcomm-form-field-col">
                        <textarea id="zcomm-message-input" placeholder="Message" name="message" required />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;