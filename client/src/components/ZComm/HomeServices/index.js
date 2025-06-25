import React from "react";
import { Image, Header } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { zcommHomeServices } from "../../../assets/generalAssets";

import "./style.css";

const HomeServices = () => {
    return (
        <div id="zcomm-home-services-container">
            <Header as="h1" id="zcomm-home-services-header">Our Services</Header>
            <div id="zcomm-home-services">
                {zcommHomeServices.map((service, index) => (
                    <div className="zcomm-home-service-col">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}>
                            <HashLink smooth to={service.link} className="zcomm-home-service-card-link">
                                <div className="zcomm-home-service-card">
                                    <Image
                                        className="zcomm-home-service-card-image"
                                        src={service.image}
                                        fluid
                                        alt={`Z-Comm ${service.title} Service`}
                                    />
                                    <Header as="h2" className="zcomm-home-service-card-header">{service.title}</Header>
                                    <Header as="h4" className="zcomm-home-service-card-subheader">{service.description}</Header>
                                </div>
                            </HashLink>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default HomeServices;