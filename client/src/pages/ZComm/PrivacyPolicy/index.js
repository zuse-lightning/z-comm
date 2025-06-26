import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const PrivacyPolicy = () => {
    return (
        <div id="zcomm-privacy-policy-container">
            <div id="zcomm-privacy-policy">
                <Header id="zcomm-privacy-policy-main-header" as="h1">Privacy Policy</Header>
                <Header id="zcomm-privacy-policy-subheader" as="h4">
                    Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
                </Header>
            </div>
        </div>
    );
};

export default PrivacyPolicy;