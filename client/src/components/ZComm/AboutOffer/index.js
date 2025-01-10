import React from "react";
import { Image, Header } from "semantic-ui-react";

import "./style.css";

const AboutOffer = () => {
    return (
        <div id="zcomm-about-offers-container">
            <div id="zcomm-about-offers">
                <div className="zcomm-about-offer-col">
                    <Image className="zcomm-about-offer-img" fluid src="" />
                    <Header as="h2" className="zcomm-about-offer-header">Web Development</Header>
                    <Header as="h4" className="zcomm-about-offer-subheader">
                        From custom storefronts to mobile-responsive designs, our development team
                        creates seamless shopping experiences that drive conversions and build brand loyalty.
                    </Header>
                </div>
                <div className="zcomm-about-offer-col">
                    <Image className="zcomm-about-offer-img" fluid src="" />
                    <Header as="h2" className="zcomm-about-offer-header">Web Development</Header>
                    <Header as="h4" className="zcomm-about-offer-subheader">
                        From custom storefronts to mobile-responsive designs, our development team
                        creates seamless shopping experiences that drive conversions and build brand loyalty.
                    </Header>
                </div>
                <div className="zcomm-about-offer-col">
                    <Image className="zcomm-about-offer-img" fluid src="" />
                    <Header as="h2" className="zcomm-about-offer-header">Web Development</Header>
                    <Header as="h4" className="zcomm-about-offer-subheader">
                        From custom storefronts to mobile-responsive designs, our development team
                        creates seamless shopping experiences that drive conversions and build brand loyalty.
                    </Header>
                </div>
            </div>
        </div>
    );
};