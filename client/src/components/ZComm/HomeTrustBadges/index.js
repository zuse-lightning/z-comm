import React from "react";
import { Image, Header } from "semantic-ui-react";

import "./style.css";

const HomeTrustBadges = () => {
    return (
        <div id="zcomm-home-trust-badges-container">
            <div className="zcomm-home-trust-badge">
                <Image className="zcomm-home-trust-badge-img" draggable="false" />
                <Header className="zcomm-home-trust-badge-header" as="h2">Outstanding Service</Header>
                <Header className="zcomm-home-trust-badge-text" as="h4">
                    At the heart of everything we do is a commitment to your success. Our dedicated team
                    ensures every interaction is seamless, personalized, and exceeds your expectations —
                    because you deserve nothing less than excellence.
                </Header>
            </div>
            <div className="zcomm-home-trust-badge">
                <Image className="zcomm-home-trust-badge-img" draggable="false" />
                <Header className="zcomm-home-trust-badge-header" as="h2">Exclusive Pricing</Header>
                <Header className="zcomm-home-trust-badge-text" as="h4">
                    Unlock the power of value with our tailored pricing plans designed to give you the edge.
                    At Z-Comm, we believe premium solutions don’t have to come with a premium price tag.
                </Header>
            </div>
            <div className="zcomm-home-trust-badge">
                <Image className="zcomm-home-trust-badge-img" draggable="false" />
                <Header className="zcomm-home-trust-badge-header" as="h2">Industry Expertise</Header>
                <Header className="zcomm-home-trust-badge-text" as="h4">
                    With years of hands-on experience and a finger on the pulse of industry trends, Z-Comm delivers 
                    insights and strategies that keep you ahead of the curve. Partner with experts who know your 
                    business like their own.
                </Header>
            </div>
        </div>
    );
};

export default HomeTrustBadges;