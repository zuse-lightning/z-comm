import React from "react";
import { Header, Image } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const ServiceBanner = () => {
    return (
        <div id="zcomm-service-banner-container">
            <div id="zcomm-service-banner">
                <Image
                    id="zcomm-service-banner-image"
                    src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/IMG_6116.jpg?v=1744036814"
                    fluid
                    alt="Z-Comm Service Banner"
                />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <Header as="h1" id="zcomm-service-banner-header">Web Development & Product Fulfillment</Header>
                    <Header as="h4" id="zcomm-service-banner-subheader">
                        At Z-Comm, we offer a comprehensive suite of services that encompass both web development and product fulfillment.
                        Our team is dedicated to providing end-to-end solutions that empower your e-commerce business to thrive in the digital landscape.
                        Whether you need a stunning website or efficient fulfillment strategies, we have you covered.
                    </Header>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceBanner;