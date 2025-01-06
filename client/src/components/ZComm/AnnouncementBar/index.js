import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const AnnouncementBar = () => {
    return (
        <div id="zcomm-announcement-container">
            <Header as="h3" id="zcomm-announcement-header">Z-Comm, Your Online Business Starts Here</Header>
        </div>
    );
};

export default AnnouncementBar;