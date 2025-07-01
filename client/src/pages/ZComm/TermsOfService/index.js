import React from "react";
import { Header, List, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const TermsOfService = () => {
    return (
        <div id="zcomm-terms-container">
            <div id="zcomm-terms">
                <Header id="zcomm-terms-main-header" as="h1">Terms Of Service</Header>
                <Header id="zcomm-terms-effect-date" as="h4">
                    <strong>Effective Date:</strong> 06/26/2025
                </Header>
                <Header id="zcomm-terms-main-subheader" as="h4">
                    Welcome to <strong>Z-Comm</strong>. These Terms of Service ("Terms") govern your access to and use of our website
                    (https://www.zcomm.store), digital services, and fulfillment solutions. By using our services,
                    you agree to be bound by these Terms, as well as our <Link to="/privacy">Privacy Policy</Link>, <Link to="/returns">Returns & Refunds Policy</Link>, and <Link to="/shipping">Shipping Policy</Link>.
                    <br /><br />
                    If you do not agree with any part of these Terms, you should not use our services.
                </Header>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">1. Who We Are</Header>
                    <p className="zcomm-terms-text">
                        Z-Comm is a U.S.-based company providing custom e-commerce development, branding, and product fulfillment
                        services for online retailers, creators, and small businesses.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">2. Eligibility</Header>
                    <p className="zcomm-terms-text">
                        By using Z-Comm, you confirm that you are:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">At least 18 years old</List.Item>
                        <List.Item className="zcomm-terms-list-item">Capable of entering into a binding agreement</List.Item>
                        <List.Item className="zcomm-terms-list-item">Using our services for lawful business or personal purposes</List.Item>
                    </List>
                    <p className="zcomm-terms-text">
                        You are responsible for maintaining the confidentiality of any account login information and for all activity that occurs under your account.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">3. Scope of Services</Header>
                    <p className="zcomm-terms-text">
                        Z-Comm offers:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">Custom web development (e.g., Shopify, React, WordPress)</List.Item>
                        <List.Item className="zcomm-terms-list-item">Brand and graphic design</List.Item>
                        <List.Item className="zcomm-terms-list-item">Order fulfillment (including print-on-demand and warehousing)</List.Item>
                        <List.Item className="zcomm-terms-list-item">E-commerce infrastructure and automation</List.Item>
                    </List>
                    <p className="zcomm-terms-text">
                        Some services may be subject to additional contracts, service-level agreements (SLAs), or payment schedules.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">4. Payments & Billing</Header>
                    <p className="zcomm-terms-text">
                        All services must be paid for in accordance with the agreed-upon pricing, timeline, and scope. Unless otherwise stated:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">Payments are due in advance or according to a milestone schedule</List.Item>
                        <List.Item className="zcomm-terms-list-item">We accept major credit cards, ACH transfers, and select digital wallets</List.Item>
                        <List.Item className="zcomm-terms-list-item">All pricing is in USD unless stated otherwise</List.Item>
                        <List.Item className="zcomm-terms-list-item">Late or failed payments may result in service suspension or project delays</List.Item>
                    </List>
                    <p className="zcomm-terms-text">
                        You agree to provide accurate billing information and authorize
                        Z-Comm to charge the associated payment method.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">5. Intellectual Property</Header>
                    <p className="zcomm-terms-text">
                        All content and materials created by Z-Comm—including websites, branding assets,
                        code, and designs—remain the property of Z-Comm until final payment is received.
                    </p>
                    <Header className="zcomm-terms-subheader" as="h3">a. Client Materials</Header>
                    <p className="zcomm-terms-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                        You retain all rights to content you provide (e.g., logos, text, images), and you grant
                        Z-Comm a limited license to use them solely for the purpose of providing the requested services.
                    </p>
                    <Header className="zcomm-terms-subheader" as="h3">b. Z-Comm Materials</Header>
                    <p className="zcomm-terms-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                        Unless otherwise agreed upon, any proprietary tools, templates, or codebases developed by Z-Comm are
                        licensed — not sold — to you for your use and may not be redistributed or resold.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">6. Acceptable Use</Header>
                    <p className="zcomm-terms-text">
                        You agree not to use our services for any unlawful, abusive, or malicious purpose, including but not limited to:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">Uploading or distributing harmful code</List.Item>
                        <List.Item className="zcomm-terms-list-item">Infringing intellectual property rights</List.Item>
                        <List.Item className="zcomm-terms-list-item">Promoting hate, violence, or discrimination</List.Item>
                        <List.Item className="zcomm-terms-list-item">Circumventing security protocols or payment systems</List.Item>
                    </List>
                    <p className="zcomm-terms-text">
                        Z-Comm reserves the right to suspend or terminate services at its discretion if these terms are violated.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">7. Fulfillment Disclaimer</Header>
                    <p className="zcomm-terms-text">For physical products fulfilled through our network:</p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">Production and shipping times are estimates, not guarantees</List.Item>
                        <List.Item className="zcomm-terms-list-item">We are not liable for delays caused by third-party carriers or suppliers</List.Item>
                        <List.Item className="zcomm-terms-list-item">We do not guarantee inventory availability unless otherwise contracted</List.Item>
                    </List>
                    <p className="zcomm-terms-text">It is your responsibility to communicate realistic timelines to your customers based on fulfillment lead times provided.</p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">8. Warranty & Disclaimer</Header>
                    <p className="zcomm-terms-text">
                        Z-Comm provides services <strong>“as is”</strong> and <strong>“as available”</strong>. We make no warranties, express or implied, regarding:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">Website uptime or uninterrupted access</List.Item>
                        <List.Item className="zcomm-terms-list-item">Profitability or business outcomes</List.Item>
                        <List.Item className="zcomm-terms-list-item">Accuracy or completeness of third-party integrations</List.Item>
                    </List>
                    <p className="zcomm-terms-text">
                        We will, however, make commercially reasonable efforts to deliver professional-grade services as described in our written agreements.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">9. Limitation of Liability</Header>
                    <p className="zcomm-terms-text">
                        To the maximum extent permitted by law, Z-Comm and its affiliates shall not be liable for:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">Indirect, incidental, or consequential damages</List.Item>
                        <List.Item className="zcomm-terms-list-item">Loss of revenue, data, or business opportunities</List.Item>
                        <List.Item className="zcomm-terms-list-item">Claims exceeding the amount paid by the client in the last 90 days</List.Item>
                    </List>
                    <p className="zcomm-terms-text">Some jurisdictions do not allow such limitations, so they may not apply in full.</p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">10. Termination</Header>
                    <p className="zcomm-terms-text">
                        Either party may terminate a project or account at any time with written notice. Upon termination:
                    </p>
                    <List className="zcomm-terms-list" bulleted>
                        <List.Item className="zcomm-terms-list-item">All outstanding payments are due immediately</List.Item>
                        <List.Item className="zcomm-terms-list-item">Access to active services may be revoked</List.Item>
                        <List.Item className="zcomm-terms-list-item">We will provide any final deliverables owed based on the scope of work</List.Item>
                    </List>
                    <p className="zcomm-terms-text">Projects that are inactive for more than 30 days without communication may be closed or archived at Z-Comm’s discretion.</p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">11. Changes to Terms</Header>
                    <p className="zcomm-terms-text">
                        We may update these Terms from time to time. Changes will be posted to this page and reflected by the "Effective Date" above.
                        Continued use of our services after an update constitutes acceptance of the revised terms.
                    </p>
                </div>
                <Divider className="zcomm-terms-divider" />
                <div className="zcomm-terms-section">
                    <Header className="zcomm-terms-header" as="h2">12. Governing Law</Header>
                    <p className="zcomm-terms-text">
                        These Terms are governed by the laws of the State of Connecticut, without regard to its conflict of law provisions.
                        Any disputes shall be resolved in the state or federal courts located in New Haven County, CT.
                    </p>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">13. Contact Us</Header>
                    <p className="zcomm-shipping-text">
                        If you have questions about these Terms or your relationship with Z-Comm:
                    </p>
                    <List className="zcomm-shipping-list">
                        <List.Item className="zcomm-shipping-list-item"><strong>📧 Email:</strong> <a href="mailto:legal@zcomm.store">legal@zcomm.store</a></List.Item>
                        <List.Item className="zcomm-shipping-list-item"><strong>🌐 Website:</strong> <a href="https://www.zcomm.store" target="_blank" rel="noopener noreferrer">www.zcomm.store</a></List.Item>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;