import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const Home = () => {
    return (
        <div id="off-sound-container">
            <div className="off-sound-header-container">
                <Header as="h1" id="off-sound-header">Off Soundings Home</Header>
            </div>
        </div>
    );
};

export default Home;