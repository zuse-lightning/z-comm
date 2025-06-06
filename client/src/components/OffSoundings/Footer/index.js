import React from "react";
import { Header, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <div id="off-sound-footer-container">
            <div id="off-sound-footer">
                <div className="off-sound-footer-col">
                    <Link className="off-sound-footer-link" to="/privacy-policy">Privacy Policy</Link>
                </div>
                <div className="off-sound-footer-col">
                    <Link className="off-sound-footer-link" to="/terms-of-service">Terms of Service</Link>
                </div>
                <div className="off-sound-footer-col">
                    <Link className="off-sound-footer-link" to="/contact">Contact Us</Link>
                </div>
            </div>
            <div id="off-sound-footer-logo">
                <Link to="/">
                    <Image size="large" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-logo.png?v=1732219354" alt="Off Soundings Logo" />
                </Link>
            </div>
            <Header as="h4" textAlign="center" id="off-sound-footer-copyright">
                &copy; {new Date().getFullYear()} Off Soundings
            </Header>
        </div>
    );
};

export default Footer;