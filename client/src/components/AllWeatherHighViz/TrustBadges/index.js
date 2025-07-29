import React from "react";
import { Header, Image } from "semantic-ui-react";

import "./style.css";

const TrustBadges = () => {
    return (
        <div id="awhv-trust-badges-container">
            <Header id="awhv-trust-badges-main-header" as="h2">WHY CHOOSE US</Header>
            <div id="awhv-trust-badges">
                <div className="awhv-trust-badge-col">
                    <Image className="awhv-trust-badge-image" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-shipping.png?v=1753814008" alt="Fast Shipping" />
                    <Header as="h3" className="awhv-trust-badge-header">Fast Shipping</Header>
                    <p className="awhv-trust-badge-description">Get your gear quickly with our reliable shipping options.</p>
                </div>
                <div className="awhv-trust-badge-col">
                    <Image className="awhv-trust-badge-image" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-quality.png?v=1753814008" alt="Quality Certified" />
                    <Header as="h3" className="awhv-trust-badge-header">Quality Certified</Header>
                    <p className="awhv-trust-badge-description">Our products meet the highest standards for quality and durability.</p>
                </div>
                <div className="awhv-trust-badge-col">
                    <Image className="awhv-trust-badge-image" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-guarantee.png?v=1753814008" alt="100% Refund Guarantee" />
                    <Header as="h3" className="awhv-trust-badge-header">100% Refund Guarantee</Header>
                    <p className="awhv-trust-badge-description">If you're not satisfied, we offer a full refund within 30 days.</p>
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
