import React from "react";
import { Header, Divider, List } from "semantic-ui-react";
import SEO from "../../../components/SEO";

import "./style.css";

const PrivacyPolicy = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-favicon.png?v=1750084870"
                title="Off Soundings - Privacy Policy"
                description="Read Off Soundings' privacy policy to understand how we collect, use, and protect your information. Your data is safe with us — transparency and trust are our priority."
                keywords="Off Soundings privacy policy, data protection, customer data policy, information collection, Shopify privacy compliance, Off Soundings store data use, personal data policy, user data security, ecommerce privacy policy"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-privacy-policy.png?v=1750093142"
                url={window.location.href}
            />
            <div id="privacy-policy-container">
                <Header id="privacy-policy-header" as="h1">Privacy Policy</Header>
                <div id="privacy-policy">
                    <Header id="privacy-policy-updated" as="h5">Last updated: 6/10/2025</Header>
                    <div className="privacy-policy-section">
                        <p className="privacy-text">
                            Off Soundings (“we,” “us,” or “our”) respects your privacy and is committed to protecting it through this Privacy Policy. This policy describes how we collect, use, and share personal information when you visit or make a purchase from www.offsoundings.store.
                        </p>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">1. Information We Collect</Header>
                        <p className="privacy-text">
                            When you visit the Site, we may collect the following types of personal information:
                        </p>
                        <List as="ol">
                            <List.Item as="li" value="*"><b>Personal Identifiers:</b> Name, shipping/billing address, email, phone number.</List.Item>
                            <List.Item as="li" value="*"><b>Payment Information:</b> Processed securely by Shopify’s built-in payment gateway and/or any third-party payment providers (e.g., Shopify Payments, PayPal).</List.Item>
                            <List.Item as="li" value="*"><b>Order Details:</b> Items purchased, purchase total, and order history.</List.Item>
                            <List.Item as="li" value="*"><b>Device Information:</b> Browser type, IP address, time zone, and cookies used on your device.</List.Item>
                        </List>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">2. How We Use Your Information</Header>
                        <p className="privacy-text">
                            We use your information to:
                        </p>
                        <List as="ol">
                            <List.Item as="li" value="*">Fulfill and manage your orders</List.Item>
                            <List.Item as="li" value="*">Process payments and provide invoices/confirmations</List.Item>
                            <List.Item as="li" value="*">Communicate with you (e.g., order status, support)</List.Item>
                            <List.Item as="li" value="*">Prevent fraud or misuse of our services</List.Item>
                            <List.Item as="li" value="*">Comply with legal obligations</List.Item>
                        </List>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">3. Sharing Your Information</Header>
                        <p className="privacy-text">
                            We do <b>not sell</b> your personal information. We may share it with:
                        </p>
                        <List as="ol">
                            <List.Item as="li" value="*"><b>Shopify, </b>to power our online store</List.Item>
                            <List.Item as="li" value="*"><b>Shipping Carriers, </b>to deliver your order</List.Item>
                            <List.Item as="li" value="*"><b>Legal authorities, </b> if required to comply with applicable laws</List.Item>
                        </List>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">4. Data Retention</Header>
                        <p className="privacy-text">
                            We retain your personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.
                        </p>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">5. Your Rights</Header>
                        <p className="privacy-text">
                            If you are a resident of certain jurisdictions (like the EU, UK, or California), you may have the right to:
                        </p>
                        <List as="ol">
                            <List.Item as="li" value="*">Access or request a copy of the data we hold about you</List.Item>
                            <List.Item as="li" value="*">Request correction or deletion of your personal data</List.Item>
                            <List.Item as="li" value="*">Withdraw consent for data processing, where applicable</List.Item>
                        </List>
                        <p className="privacy-text">
                            To make a request, contact us at support@offsoundings.store.
                        </p>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">6. Security</Header>
                        <p className="privacy-text">
                            We take reasonable measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the Internet or method of storage is 100% secure.
                        </p>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">7. Changes to This Policy</Header>
                        <p className="privacy-text">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other legal, operational, or regulatory reasons.
                        </p>
                    </div>
                    <Divider className="privacy-divider" />
                    <div className="privacy-policy-section">
                        <Header className="privacy-policy-section-header" as="h3">8. Contact Us</Header>
                        <p className="privacy-text">
                            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:<br /><br />
                            Email: support@offsoundings.store<br /><br />
                            Mailing Address: 54 East Industrial Road, Branford, CT 06405<br /><br />
                            Phone: (203) 458-3295
                        </p>
                    </div>
                    <Divider className="privacy-divider" />
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;