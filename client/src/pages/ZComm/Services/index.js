import React from "react";
import { Header } from "semantic-ui-react";
import ServiceBanner from "../../../components/ZComm/ServiceBanner";
import ServiceWebDev from "../../../components/ZComm/ServiceWebDev";
import ServiceFulfill from "../../../components/ZComm/ServiceFulfill";
import ServiceBoth from "../../../components/ZComm/ServiceBoth";
import ServiceCompare from "../../../components/ZComm/ServiceCompare";
import SEO from "../../../components/SEO";
import { motion } from "framer-motion";

import "./style.css";

const Services = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="Z‑Comm - E‑Commerce Web Development & Fulfillment Services"
                description="Explore Z‑Comm’s full suite of e‑commerce services: custom web development, Shopify/WooCommerce builds, automation, and reliable product fulfillment."
                keywords="e-commerce development services, Shopify development, WooCommerce services, web design for stores, product fulfillment solutions, e-commerce automation, order management, online store build, Z-Comm services"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-services.png?v=1753292301"
                url={window.location.href}
            />
            <div id="zcomm-services-container">
                <ServiceBanner />
                <div id="zcomm-services">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Header as="h1" id="zcomm-services-header">Services Overview</Header>
                    </motion.div>
                    <ServiceWebDev />
                    <ServiceFulfill />
                    <ServiceBoth />
                    <ServiceCompare />
                </div>
            </div>
        </>
    );
};

export default Services;