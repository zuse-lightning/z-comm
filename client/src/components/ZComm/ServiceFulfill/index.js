import React from "react";
import { Image, Header } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const ServiceFulfill = () => {
    return (
        <div id="zcomm-service-fulfill-container">
            <div id="zcomm-service-fulfill">
                <div className="zcomm-fulfill-col">
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
                <div className="zcomm-fulfill-col">
                    <Image
                        id="zcomm-service-fulfill-image"
                        src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/fulfill-service.png?v=1750791068"
                        fluid
                        alt="Z-Comm Fulfillment Service"
                    />
                </div>
            </div>

        </div>
    );
};

export default ServiceFulfill;