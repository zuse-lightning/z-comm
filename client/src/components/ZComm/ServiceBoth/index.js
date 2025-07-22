import React from "react";
import { Image, Header } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const ServiceBoth = () => {
    return (
        <div id="zcomm-service-both-container">
            <div id="zcomm-service-both">
                <div className="zcomm-both-col">
                    <Image
                        id="zcomm-service-both-image"
                        src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/both-service.png?v=1751565181"
                        fluid
                        alt="Z-Comm Both Services"
                    />
                </div>
                <div className="zcomm-both-col">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}>
                        <Header as="h1" id="zcomm-service-both-header">Full Service</Header>
                        <Header as="h4" id="zcomm-service-both-subheader">
                            At Z-Comm, we offer a comprehensive suite of services that encompass both web development and product fulfillment.
                            Our team is dedicated to providing end-to-end solutions that empower your e-commerce business to thrive in the digital landscape.
                            Whether you need a stunning website or efficient fulfillment strategies, we have you covered.
                        </Header>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default ServiceBoth;