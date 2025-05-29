import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <div id="awhv-footer-container">
            <p>&copy; {new Date().getFullYear()} All Weather High Viz</p>
            <div id="awhv-footer">
                <div className="awhv-footer-col">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                </div>
                <div className="awhv-footer-col">
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
