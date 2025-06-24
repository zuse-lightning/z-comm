import React from "react";
import { Header } from "semantic-ui-react";
import ServiceBanner from "../../../components/ZComm/ServiceBanner";
import ServiceWebDev from "../../../components/ZComm/ServiceWebDev";
import ServiceFulfill from "../../../components/ZComm/ServiceFulfill";
import ServiceBoth from "../../../components/ZComm/ServiceBoth";
import ServiceCompare from "../../../components/ZComm/ServiceCompare";

import "./style.css";

const Services = () => {
    return (
        <div id="zcomm-services-container">
            <ServiceBanner />
            <div id="zcomm-services">
                <Header as="h1" id="zcomm-services-header">Services Overview</Header>
                
                <ServiceWebDev />
                <ServiceFulfill />
                <ServiceBoth />
                <ServiceCompare />
            </div>
        </div>
    );
};

export default Services;