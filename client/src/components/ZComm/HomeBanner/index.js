import React from "react";
import { Image, Header } from "semantic-ui-react";

import "./style.css";

const HomeBanner = () => {
    return (
        <div id="zcomm-home-banner-container">
            <Image id="zcomm-home-banner" fluid draggable="false" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/auto_press_2.jpg?v=1732219140" />
            <Header as="h4" id="zcomm-home-banner-header1">WELCOME ALL ASPIRING & ESTABLISHED ENTREPRENEURS</Header>
            <Header as="h1" id="zcomm-home-banner-header2">Grow your online business with us</Header>
        </div>
    );
};

export default HomeBanner;