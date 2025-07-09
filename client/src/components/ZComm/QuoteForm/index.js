import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const QuoteForm = () => {

    const QUOTE_ENDPOINT = "https://www.formbackend.com/f/1ff3b1b967ef8484";
    const [submitted, setSubmitted] = useState(false);
    const [service, setService] = useState("");
    const navigate = useNavigate();

    const handleServiceChange = (e) => {
        const { value } = e.target;
        console.log("Service selected:", value);
        setService(value);
    };

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
                    navigate("/");
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
            <Header as="h5" id="zcomm-quote-form-subheader">To request a quote, please fill out the form below with your details and requirements. We will get back to you as soon as possible.</Header>
            <form
                id="zcomm-quote-form"
                onSubmit={handleSubmit}
                action={QUOTE_ENDPOINT}
                method="POST"
            >
                <div className="zcomm-quote-form-col">
                    <Header as="h3" className="zcomm-quote-form-title">Contact Information</Header>
                </div>
                <div className="zcomm-quote-form-col">
                    <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="zcomm-quote-form-col">
                    <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="zcomm-quote-form-col">
                    <input type="text" id="company" name="company" placeholder="Company" required />
                </div>
                <div className="zcomm-quote-form-col">
                    <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                </div>
                <div className="zcomm-quote-form-col">
                    <Header as="h3" className="zcomm-quote-form-title">Services</Header>
                </div>
                <div className="zcomm-quote-form-col">
                    <select value={service} onChange={handleServiceChange} id="zcomm-quote-service-dropdown" name="service" required>
                        <option selected disabled value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="fulfillment">Fulfillment</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                <div className="zcomm-quote-form-col">
                    <Header as="h3" className="zcomm-quote-form-title">Project Details</Header>
                </div>
                <div className="zcomm-quote-form-col">
                    <textarea id="zcomm-quote-project-details" name="project-details" placeholder="Please provide details about your project, including any specific requirements or features you need." required></textarea>
                </div>
                <div className="zcomm-quote-form-col">
                    <select id="zcomm-quote-platform-dropdown" name="platform" required>
                        <option selected disabled value="">Current Platform (if any)</option>
                        <option value="none">None / Just Getting Started</option>
                        <option value="shopify">Shopify</option>
                        <option value="woocommerce">WooCommerce</option>
                        <option value="squarespace">Squarespace</option>
                        <option value="wix">Wix</option>
                        <option value="bigcommerce">BigCommerce</option>
                        <option value="custom">Custom (React, Node, etc.)</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="zcomm-quote-form-col">
                    <input id="website" name="website" placeholder="Website (if any)" />
                </div>
                {service === "fulfillment" || service === "both" ? (
                    <>
                        <div className="zcomm-quote-form-col">
                            <Header as="h3" className="zcomm-quote-form-title" id="zcomm-quote-fulfillment-details">Fulfillment Details</Header>
                        </div>
                        <div className="zcomm-quote-form-col">
                            <input id="zcomm-quote-sku-count" name="sku-count" type="number" placeholder="Estimated number of SKUs" className="input" />
                        </div>
                        <div className="zcomm-quote-form-col">
                            <select id="zcomm-quote-order-volume" name="order-volume" className="input">
                                <option selected disabled value="">Monthly Order Volume</option>
                                <option value="0-50">0–50</option>
                                <option value="51-200">51–200</option>
                                <option value="201-1000">201–1000</option>
                                <option value="1000+">1000+</option>
                            </select>
                        </div>
                        <div className="zcomm-quote-form-col">
                            <select id="zcomm-quote-storage" name="storage" className="input">
                                <option selected disabled value="">Need Storage for Inventory?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="unsure">Not Sure Yet</option>
                            </select>
                        </div>
                    </>
                ) : null}
                <div className="zcomm-quote-form-col">
                    <Header as="h3" className="zcomm-quote-form-title">Timeline & Budget</Header>
                </div>
                <div className="zcomm-quote-form-col">
                    <select id="zcomm-quote-timeline" name="timeline" className="input">
                        <option selected disabled value="">When Do You Want to Get Started?</option>
                        <option value="now">Immediately</option>
                        <option value="1-2 weeks">1–2 Weeks</option>
                        <option value="1-2 months">1–2 Months</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>
                <div className="zcomm-quote-form-col">
                    <select id="zcomm-quote-budget" name="budget" className="input">
                        <option selected disabled value="">Estimated Budget</option>
                        <option value="<2000">Under $2,000</option>
                        <option value="2000-5000">$2,000–$5,000</option>
                        <option value="5000-10000">$5,000–$10,000</option>
                        <option value="10000+">$10,000+</option>
                    </select>
                </div>
                <div className="zcomm-quote-form-col">
                    <Header as="h3" className="zcomm-quote-form-title">Additional Details</Header>
                </div>
                <div className="zcomm-quote-form-col">
                    <textarea id="message" name="message" placeholder="Please let us know if there's anything else we should know" required></textarea>
                </div>
                <div className="zcomm-quote-form-col">
                    <input name="referral" placeholder="How did you hear about us?" className="input" />
                </div>
                <div className="zcomm-quote-form-col">
                    <button id="zcomm-quote-submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;