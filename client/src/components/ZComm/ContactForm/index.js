import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";

import "./style.css";
import { set } from "mongoose";

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const { register } = useForm();
    const navigate = useNavigate();
    const FORM_ENDPOINT = "https://www.formbackend.com/f/1ff3b1b967ef8484";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const zcommContactForm = document.getElementById("zcomm-contact-form");
        const formData = new FormData(zcommContactForm);

        console.log("Form data:", Object.fromEntries(formData.entries()));

        try {
            console.log("Form data:", Object.fromEntries(formData.entries()));
            const res = await axiosInstance.post("/contact", Object.fromEntries(formData.entries()), {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            });
            console.log(res.data);
            if (res.status === 200) {
                setSubmitted(true);
            } else {
                console.error("Error submitting form:", res.data);
            }
        } catch (err) {
            console.log(err);
            // e.target.submit();
        }

        // const response = await fetch("http://localhost:3001/api/contact", {
        //     method: "POST",
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Credentials": true,
        //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        //         "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        //     },
        //     body: formData
        // }).then((response) => {
        //     if (!response.ok) {
        //         throw new Error("Form response was not ok");
        //     }
        //     setSubmitted(true);
        // }).catch((err) => {
        //     e.target.submit();
        // });
    };

    // if (submitted) {
    //     return (
    //         <>
    //             <div id="thank-you-container">
    //                 <h2>Thank you!</h2>
    //                 <div>We'll be in touch soon.</div>
    //             </div>
    //         </>
    //     );
    // };

    return (
        <div id="zcomm-contact-form-container">
            <Header as="h1" id="zcomm-contact-form-header">Contact</Header>
            <Header as="h4" id="zcomm-contact-form-subheader">Fill out the form below to get in touch with us!</Header>
            <form
                id="zcomm-contact-form"
                onSubmit={handleSubmit}
                action="http://localhost:3001/api/contact"
            >
                <div id="zcomm-form-field-container">
                    <div className="zcomm-form-field-col">
                        <input id="zcomm-name-input" type="text" placeholder="Name" name="name" required />
                    </div>
                    <div className="zcomm-form-field-col">
                        <input id="zcomm-email-input" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="zcomm-form-field-col">
                        <input id="zcomm-phone-input" type="text" placeholder="Phone Number" name="phone_number" />
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
                <button id="zcomm-submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;