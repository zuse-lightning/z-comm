import React from "react";
import { Image, Header } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const AboutOffer = () => {

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div id="zcomm-about-offers-container">
            <div id="zcomm-about-offers">
                <div className="zcomm-about-offer-col">
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 1 * 0.2 }}
                    >
                        <Image className="zcomm-about-offer-img" fluid src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web-development-yellow.png?v=1736531503" />
                        <Header as="h2" className="zcomm-about-offer-header">Custom Web Development</Header>
                        <Header as="h4" className="zcomm-about-offer-subheader">
                            Stand out in the crowded online marketplace with a beautifully designed
                            and fully functional website that reflects your brand's identity. Our
                            team of experienced developers and designers build intuitive, responsive,
                            and conversion-focused e-commerce platforms.
                        </Header>
                    </motion.div>
                </div>
                <div className="zcomm-about-offer-col">
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 2 * 0.2 }}
                    >
                        <Image className="zcomm-about-offer-img" fluid src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/fulfillment-yellow.png?v=1736531503" />
                        <Header as="h2" className="zcomm-about-offer-header">Product Fulfillment Solutions</Header>
                        <Header as="h4" className="zcomm-about-offer-subheader">
                            Streamline your operations with our end-to-end fulfillment services. From
                            inventory management to order processing and shipping, we handle the logistics
                            so you can deliver a seamless experience to your customers.
                        </Header>
                    </motion.div>
                </div>
                <div className="zcomm-about-offer-col">
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 3 * 0.2 }}
                    >
                        <Image className="zcomm-about-offer-img" fluid src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/ecommerce-strategy-yellow.png?v=1736529026" />
                        <Header as="h2" className="zcomm-about-offer-header">Tailored E-Commerce Strategies</Header>
                        <Header as="h4" className="zcomm-about-offer-subheader">
                            Every business is unique, and so are our solutions. We work closely with
                            you to understand your goals and challenges, delivering personalized strategies
                            that drive results.
                        </Header>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutOffer;