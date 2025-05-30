import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <div id="awhv-footer-container">
            <p>&copy; {new Date().getFullYear()} All Weather High Viz</p>
            <div id="awhv-footer">
                <div className="awhv-footer-col">
                    <Link className="awhv-footer-link" to="/privacy-policy">Privacy Policy</Link>
                </div>
                <div className="awhv-footer-col">
                    <Link className="awhv-footer-link" to="/terms-of-service">Terms of Service</Link>
                </div>
                <div className="awhv-footer-col">
                    <Link className="awhv-footer-link" to="/contact">Contact Us</Link>
                </div>
            </div>
            <div id="awhv-footer-logo">
                <Link to="/">
                    <Image size="large" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-white-logo.png?v=1748613475" alt="All Weather High Viz Logo" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
