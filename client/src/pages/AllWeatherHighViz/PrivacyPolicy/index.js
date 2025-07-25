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
                    <Header className="awhv-privacy-policy-header" as="h2">2. How We Use Your Information</Header>
                    <p className="awhv-privacy-policy-text">We use your information to:</p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Fulfill your orders and provide customer service
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Send order confirmations, updates, and receipts
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Improve and personalize your shopping experience
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Share product updates, promotions, or news (only if you opt in)
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Protect against fraud and secure our platform
                        </List.Item>
                    </List>
                    <p className="awhv-privacy-policy-text">
                        We do <strong>not</strong> sell your personal information. Period.
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">3. Sharing Your Information</Header>
                    <p className="awhv-privacy-policy-text">We may share your data only with trusted partners, such as:</p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>Payment processors</strong> (like Shopify Payments, PayPal, etc.)
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>Shipping providers</strong> (like USPS, UPS, or FedEx)
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>Marketing and email platforms</strong> (if you’ve opted in)
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>IT/security services</strong> for fraud prevention and site operations
                        </List.Item>
                    </List>
                    <p className="awhv-privacy-policy-text">
                        These providers only use your data to help us serve you better—and never for their own marketing.
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">4. Cookies & Tracking</Header>
                    <p className="awhv-privacy-policy-text">Our site uses cookies to:</p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Keep your cart active
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Remember your preferences
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Help us understand how customers use our site
                        </List.Item>
                    </List>
                    <p className="awhv-privacy-policy-text">
                        You can control cookie settings through your browser at any time.
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">5. Your Rights</Header>
                    <p className="awhv-privacy-policy-text">You have the right to:</p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Access or update your information
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Request that we delete your data
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            Opt out of marketing emails at any time (link in footer)
                        </List.Item>
                    </List>
                    <p className="awhv-privacy-policy-text">
                        To make a request, just email us at: support@allweatherhiviz.com
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">6. Data Security</Header>
                    <p className="awhv-privacy-policy-text">
                        We protect your personal data using encryption, secure connections (SSL), and trusted platforms. 
                        While no method is 100% foolproof, we take every step to secure your information like we would protect our own tools.
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">7. Third-Party Links</Header>
                    <p className="awhv-privacy-policy-text">
                        Our website may link to trusted third-party sites. Once you leave our site, their privacy policies apply.
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">8. Changes to This Policy</Header>
                    <p className="awhv-privacy-policy-text">
                        We may update this policy from time to time. If we make changes, we’ll update the date at the top of this page.
                    </p>
                    <Divider className="awhv-privacy-policy-divider" />
                    <Header className="awhv-privacy-policy-header" as="h2">9. Contact Us</Header>
                    <p className="awhv-privacy-policy-text">
                        If you have any questions or concerns about this policy, please reach out to us at:
                    </p>
                    <List className="awhv-privacy-policy-list" bulleted>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>📧 Email:</strong> <a href="mailto:support@allweatherhiviz.com">support@allweatherhiviz.com</a>
                        </List.Item>
                        <List.Item className="awhv-privacy-policy-list-item">
                            <strong>📍 Mailing Address:</strong> 54 East Industrial Road, Branford, CT 06405
                        </List.Item>
                    </List>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;