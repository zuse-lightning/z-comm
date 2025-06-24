import React from "react";
import { Header } from "semantic-ui-react";
import ServiceBanner from "../../../components/ZComm/ServiceBanner";
import ServiceWebDev from "../../../components/ZComm/ServiceWebDev";
import ServiceFulfill from "../../../components/ZComm/ServiceFulfill";
import ServiceBoth from "../../../components/ZComm/ServiceBoth";
import ServiceCompare from "../../../components/ZComm/ServiceCompare";
import { motion } from "framer-motion";

import "./style.css";

const Services = () => {
    return (
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
    );
};

export default Services;