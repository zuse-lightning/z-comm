import React from "react";
import { Header, Image } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const ServiceWebDev = () => {
    return (
        <div id="zcomm-service-webdev-container">
            <div id="zcomm-service-webdev">
                <div className="zcomm-webdev-col">
                    <Image
                        id="zcomm-service-webdev-image"
                        src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web-dev-service.png?v=1750791069"
                        fluid
                        alt="Z-Comm Web Development"
                        size="huge"
                    />
                </div>
                <div className="zcomm-webdev-col">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}>
                        <Header as="h1" id="zcomm-service-webdev-header">Web Development</Header>
                        <Header as="h4" id="zcomm-service-webdev-subheader">
                            At Z-Comm, we specialize in creating custom e-commerce websites that are not only visually stunning but also
                            highly functional and user-friendly. Our team of experienced web developers and designers work closely with you
                            to understand your unique business needs and create a website that reflects your brand identity while providing
                            an exceptional shopping experience for your customers.
                        </Header>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceWebDev;