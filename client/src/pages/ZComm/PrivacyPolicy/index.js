import React from "react";
import { Header, Divider, List } from "semantic-ui-react";

import "./style.css";

const PrivacyPolicy = () => {
    return (
        <div id="zcomm-privacy-policy-container">
            <div id="zcomm-privacy-policy">
                <Header id="zcomm-privacy-policy-main-header" as="h1">Privacy Policy</Header>
                <Header id="zcomm-privacy-policy-effect-date" as="h4">
                    <strong>Effective Date:</strong> 06/26/2025
                </Header>
                <Header id="zcomm-privacy-policy-main-subheader" as="h4">
                    Z-Comm (“we,” “our,” “us”) respects your privacy and is committed to protecting your personal data.
                    This Privacy Policy outlines how we collect, use, and disclose information when you visit our website
                    (<a href="https://www.zcomm.store">https://www.zcomm.store</a>) or use our services. It includes rights and practices required under the <strong>General Data Protection Regulation (GDPR)</strong> and the <strong>California Consumer Privacy Act (CCPA)</strong> as
                    amended by the <strong>California Privacy Rights Act (CPRA)</strong>.
                </Header>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">1. Information We Collect</Header>
                    <p className="zcomm-privacy-policy-text">We collect the following categories of personal information:</p>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">a. Identifiers</Header>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">Name</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Email address</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Phone number</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Billing and shipping address</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">IP address</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Account login details (if applicable)</List.Item>
                    </List>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">b. Commercial Information</Header>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">Order and fulfillment details</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Service subscriptions and transaction history</List.Item>
                    </List>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">c. Internet or Network Activity</Header>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">Browser type</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Device information</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Page views, time on site, referring URLs</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Cookies and usage tracking</List.Item>
                    </List>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">d. Geolocation</Header>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">General location based on IP address</List.Item>
                    </List>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">e. Professional or Business Information</Header>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">Company name, business website, service preferences</List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">
                        We do <strong>not</strong> collect sensitive personal information (e.g., race, biometric, health data).
                    </p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">2. How We Use Your Information</Header>
                    <p className="zcomm-privacy-policy-text">
                        We use your personal information for the following purposes:
                    </p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">Provide and improve our website development and fulfillment services</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Process orders, invoices, and payments</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Communicate updates, support, or promotions</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Customize and personalize your user experience</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Comply with legal and contractual obligations</List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">
                        We <strong>do not sell</strong> personal data or use it for automated decision-making or profiling that significantly affects individuals.
                    </p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">3. Legal Basis for Processing (GDPR)</Header>
                    <p className="zcomm-privacy-policy-text">
                        For individuals in the EU/UK, our lawful bases for collecting and using your personal data are:
                    </p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Consent</strong> – when you voluntarily provide data (e.g., forms, newsletters)</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Contract</strong> – to fulfill a service agreement or purchase order</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Legal obligation</strong> – to comply with applicable laws and regulations</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Legitimate interest</strong> – to improve our services and safeguard our platform</List.Item>
                    </List>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">4. Sharing Your Information</Header>
                    <p className="zcomm-privacy-policy-text">We share information only when necessary and with:</p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Service providers</strong> (e.g., hosting, payment processors, shipping carriers)</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Business partners</strong> (if you request integrations, like Shopify or print-on-demand apps)</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Legal obligation</strong> when required by law or court order</List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">All partners are bound by confidentiality and data protection agreements.</p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">5. Your Privacy Rights</Header>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">a. For California Residents (CCPA/CPRA)</Header>
                    <p className="zcomm-privacy-policy-text" style={{ width: "80%", margin: "0 auto 2%" }}>You have the right to:</p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">
                            <strong>Know</strong> what personal data we collect and how we use it
                        </List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">
                            <strong>Access</strong> the categories and specific pieces of information collected
                        </List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">
                            <strong>Delete</strong> your personal data (with exceptions)
                        </List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">
                            <strong>Opt-out</strong> of sale or sharing of your personal data (we do <strong>not</strong> sell data)
                        </List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">
                            <strong>Correct</strong> inaccurate personal information
                        </List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">
                            <strong>Limit</strong> use of sensitive personal information (if applicable)
                        </List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">To exercise your rights, email us at <a href="mailto:privacy@zcomm.store">privacy@zcomm.store</a>. We will verify your identity before responding.</p>
                    <Header className="zcomm-privacy-policy-subheader" as="h3">b. For EU/UK Residents (GDPR)</Header>
                    <p className="zcomm-privacy-policy-text" style={{ width: "80%", margin: "0 auto 2%" }}>You have the right to:</p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Access</strong> your data</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Correct</strong> inaccurate data</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Request Erasure</strong> (the “right to be forgotten”)</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Restrict or object</strong> to processing</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Withdraw consent</strong> at any time</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>Data portability</strong></List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">To submit a request, email privacy@zcomm.store. You also have the right to lodge a complaint with your local supervisory authority.</p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">6. Data Retention</Header>
                    <p className="zcomm-privacy-policy-text">
                        We retain your information only as long as necessary to fulfill services, meet legal requirements,
                        or resolve disputes. After that, your data is securely deleted or anonymized.
                    </p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">7. Security Measures</Header>
                    <p className="zcomm-privacy-policy-text">We use industry-standard protections including:</p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">HTTPS (SSL/TLS encryption)</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Access controls and authentication</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Secure storage systems</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Routine monitoring for vulnerabilities</List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">However, no online system is completely secure. We encourage users to take their own precautions when submitting personal data online.</p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">8. Cookies & Tracking</Header>
                    <p className="zcomm-privacy-policy-text">Z-Comm uses cookies and similar technologies for:</p>
                    <List className="zcomm-privacy-policy-list" bulleted>
                        <List.Item className="zcomm-privacy-policy-list-item">Site analytics</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">Session tracking</List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item">User preferences</List.Item>
                    </List>
                    <p className="zcomm-privacy-policy-text">You may opt out or control cookies via your browser settings. For EU/UK users, a cookie consent banner is presented at first visit.</p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">9. International Transfers</Header>
                    <p className="zcomm-privacy-policy-text">
                        If you’re outside the U.S., your information may be transferred to servers in the U.S.
                        We ensure any data transfers comply with legal safeguards such as <strong>Standard Contractual Clauses (SCCs)</strong> or your explicit consent.
                    </p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">10. Children's Privacy</Header>
                    <p className="zcomm-privacy-policy-text">
                        Our services are not intended for users under 13. We do not knowingly collect information from minors. If we discover data
                        has been collected from a child, we will delete it promptly.
                    </p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">11. Changes to This Policy</Header>
                    <p className="zcomm-privacy-policy-text">
                        We may update this Privacy Policy from time to time. Material changes will be announced via website notice or email.
                        The "Effective Date" at the top reflects the latest revision.
                    </p>
                </div>
                <Divider className="zcomm-privacy-policy-divider" />
                <div className="zcomm-privacy-policy-section">
                    <Header className="zcomm-privacy-policy-header" as="h2">12. Contact Us</Header>
                    <p className="zcomm-privacy-policy-text">
                        For questions, requests, or concerns about your data or this policy, contact:
                    </p>
                    <List className="zcomm-privacy-policy-list">
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>📧 Email:</strong> <a href="mailto:privacy@zcomm.store">privacy@zcomm.store</a></List.Item>
                        <List.Item className="zcomm-privacy-policy-list-item"><strong>🌐 Website:</strong> <a href="https://www.zcomm.store" target="_blank" rel="noopener noreferrer">www.zcomm.store</a></List.Item>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;