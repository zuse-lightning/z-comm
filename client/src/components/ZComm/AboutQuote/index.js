import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const AboutQuote = () => {
    return (
        <div id="zcomm-about-quote-container">
            <div id="zcomm-about-quote">
                <Header as="h1" id="zcomm-about-quote-header">Think We Can Help?</Header>
                <Header as="h4" id="zcomm-about-quote-subheader">
                    Whether you're looking to launch a new e-commerce store, optimize your existing website, or 
                    streamline your product fulfillment process, Z-Comm is here to help. Get in touch with us today 
                    to learn more about our services and how we can empower your e-commerce success.
                </Header>
                <Button id="zcomm-about-quote-btn" as={Link} to="/quote">Get A Quote</Button>
            </div>
        </div>
    );
};

export default AboutQuote;