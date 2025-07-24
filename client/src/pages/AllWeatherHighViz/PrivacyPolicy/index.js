import React from "react";
import { Header, Divider, List } from "semantic-ui-react";
import SEO from "../../../components/SEO";

import "./style.css";

const PrivacyPolicy = () => {
    return (
        <>
            <div id="awhv-privacy-policy-container">
                <div id="awhv-privacy-policy">
                    <Header id="awhv-privacy-policy-main-header" as="h1">Privacy Policy</Header>
                    <Header id="awhv-privacy-policy-effect-date" as="h4">
                        <strong>Effective Date:</strong> 07/24/2025
                    </Header>
                    <Header id="awhv-privacy-policy-main-subheader" as="h4">
                        At <strong>All Weather High Viz</strong>, your privacy matters. We believe in doing honest work and treating our customers with the same respect and transparency we stand for in the field. 
                        Whether you’re ordering a high-visibility jacket for the job site or browsing our site for the next addition to your work gear, we’re committed to keeping your personal information 
                        safe and secure.
                    </Header>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">1. Information We Collect</Header>
                    <p className="awhv-privacy-policy-text">When you shop with us, we may collect:</p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>Personal Information:</strong> Name, email, phone number, shipping/billing address, and payment details.
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>Order details:</strong> What you buy and how you interact with our site.
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>Device and usage data:</strong> IP address, browser type, device ID, and browsing behavior on our site.
                        </List.Item>
                    </List>
                    <p className="awhv-privacy-policy-text">We collect this information when you:</p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Make a purchase
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Sign up for our newsletter
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Contact our support team
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Browse our website
                        </List.Item>
                    </List>
                    <Divider className="awhv-privacy-policy-divider" />
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;