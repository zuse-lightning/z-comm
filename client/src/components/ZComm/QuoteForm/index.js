import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const QuoteForm = () => {

    const QUOTE_ENDPOINT = "https://www.formbackend.com/f/1ff3b1b967ef8484";
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const quoteForm = document.getElementById("zcomm-quote-form");
        const formData = new FormData(quoteForm);

        const response = await fetch(QUOTE_ENDPOINT, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            },
            body: formData
        }).then(response => {
            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    navigate("/zcomm");
                }, 3000);
            } else {
                throw new Error("Network response was not ok.");
            }
        }).catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            alert("There was an error submitting your quote request. Please try again later.");
        });
    };

    return (
        <div id="zcomm-quote-form-container">
            <Header as="h1" id="zcomm-quote-form-header">Request a Quote</Header>
            <p>To request a quote, please fill out the form below with your details and requirements. We will get back to you as soon as possible.</p>
            <form 
                id="zcomm-quote-form" 
                onSubmit={handleSubmit}
                action={QUOTE_ENDPOINT}
                method="POST"    
            >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QuoteForm;