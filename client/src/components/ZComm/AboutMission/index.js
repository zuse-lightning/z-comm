import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const AboutMission = () => {
    return (
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
    );
};

export default AboutMission;