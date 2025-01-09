import React from "react";
import { Image, Header } from "semantic-ui-react";

import "./style.css";

const AboutSection = () => {
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
            </div>
            <div id="zcomm-about-mission-container">
                <Header as="h1" id="zcomm-about-mission-header">Our Mission</Header>
                <Header as="h4" id="zcomm-about-mission-subheader">
                    Z-Comm is a forward-thinking e-commerce solutions company dedicated to helping online 
                    businesses scale efficiently and effectively. We specialize in creating cutting-edge 
                    websites and seamless product fulfillment strategies tailored to your unique needs. 
                    Whether you're a budding entrepreneur launching your first store or an established 
                    brand looking to enhance your digital presence, Z-Comm is here to help.
                </Header>
            </div>
            <div id="zcomm-about-qualities-container">

            </div>
        </div>
    );
};

export default AboutSection;