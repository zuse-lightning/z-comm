import React from "react";
import { Header, Button } from "semantic-ui-react";

import "./style.css";

const Footer = () => {
    return (
        <div id="zcomm-footer-container">
            <div id="zcomm-footer">
                <Header as="h1" id="zcomm-footer-header">Ready to Get Started?</Header>
                <Header as="h4" id="zcomm-footer-subheader">
                    Whether you're looking to launch a new e-commerce store, optimize your existing website, or
                    streamline your product fulfillment process, Z-Comm is here to help. Get in touch with us today
                    to learn more about our services and how we can empower your e-commerce success.
                </Header>
                <Button id="zcomm-footer-btn" as="a" href="/contact">Get In Touch</Button>
            </div>
        </div>
    );
};

export default Footer;