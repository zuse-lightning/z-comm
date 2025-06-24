import React from "react";
import { Header } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const ServiceFulfill = () => {
    return (
        <div id="zcomm-service-fulfill-container">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}>
                <Header as="h1" id="zcomm-service-fulfill-header">Product Fulfillment</Header>
                <Header as="h4" id="zcomm-service-fulfill-subheader">
                    At Z-Comm, we understand that efficient product fulfillment is crucial for the success of your e-commerce business.
                    Our team specializes in creating streamlined fulfillment strategies that ensure your products are delivered to your
                    customers quickly and accurately. From inventory management to shipping logistics, we handle every aspect of the
                    fulfillment process so you can focus on growing your business.
                </Header>
            </motion.div>
        </div>
    );
};

export default ServiceFulfill;