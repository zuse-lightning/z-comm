import React from "react";
import { Image, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const AboutBanner = () => {
    return (
        <div id="zcomm-about-container">
            <div id="zcomm-about-banner-container">
                <Image id="zcomm-about-banner" fluid src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zuse_inside_balcony.png?v=1732648664" />
                <Header as="h1" id="zcomm-about-banner-header">Empowering E-Commerce Success</Header>
                <Header as="h4" id="zcomm-about-banner-subheader">
                    At Z-Comm, we believe that every entrepreneur and e-commerce brand deserves the tools 
                    and expertise to thrive in the digital marketplace. Our mission is to simplify the 
                    complexities of web development and product fulfillment, allowing you to focus on what 
                    matters most: growing your business and delighting your customers.
                </Header>
                <Button as={Link} to="/contact" id="zcomm-about-contact-btn">Contact Us</Button>
            </div>
        </div>
    );
};

export default AboutBanner;