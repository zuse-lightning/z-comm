import React from "react";
import { Header, Divider, List } from "semantic-ui-react";

import "./style.css";

const TermsOfService = () => {
    return (
        <div id="terms-service-container">
            <Header id="terms-service-header" as="h1">Terms of Service</Header>
            <div id="terms-service">
                <Header id="terms-service-updated" as="h5">Effective Date: 6/11/2025</Header>
                <div className="terms-service-section">
                    <p className="terms-text">
                        Welcome to Off Soundings. These Terms of Service (“Terms”) govern your use of our website located at https://www.offsoundings.store, operated by Zuse Inc. (“Off Soundings”, “we”, “us”, or “our”).
                    </p>
                    <p className="terms-text">
                        By accessing or using our website, products, or services, you agree to be bound by these Terms. If you do not agree to all of these Terms, you may not access or use the website or any services offered.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">1. Overview</Header>
                    <p className="terms-text">
                        Off Soundings is an online apparel store based in Branford, Connecticut, catering to boating enthusiasts and the Off Soundings racing community. We sell merchandise directly to consumers via our Shopify-powered e-commerce platform.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">2. Store Information</Header>
                    <List as="ol">
                        <List.Item as="li" value="*"><b>Business Name:</b> Off Soundings</List.Item>
                        <List.Item as="li" value="*"><b>Website:</b> https://www.offsoundings.store</List.Item>
                        <List.Item as="li" value="*"><b>Email:</b> support@offsoundings.store</List.Item>
                        <List.Item as="li" value="*"><b>Phone:</b> (203) 458-3295</List.Item>
                        <List.Item as="li" value="*"><b>Business Address:</b> 54 East Industrial Road, Branford, CT 06405</List.Item>
                    </List>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">3. Use of Our Website</Header>
                    <p className="terms-text">
                        You agree to use our website and services only for lawful purposes and in accordance with these Terms. You may not:
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*">Use our website in any way that violates applicable laws or regulations.</List.Item>
                        <List.Item as="li" value="*">Attempt to interfere with the proper functioning of the website.</List.Item>
                        <List.Item as="li" value="*">Impersonate any person or entity or misrepresent your affiliation with any person or entity.</List.Item>
                    </List>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">4. Orders and Payment</Header>
                    <p className="terms-text">
                        All prices listed are in U.S. dollars. When you place an order, you agree that:
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*">All information you provide is accurate and complete.</List.Item>
                        <List.Item as="li" value="*">You are authorized to use the payment method provided.</List.Item>
                        <List.Item as="li" value="*">We reserve the right to cancel or refuse any order at our sole discretion.</List.Item>
                    </List>
                    <p className="terms-text">
                        Payments are securely processed through Shopify and its integrated payment processors.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">5. Shipping and Returns</Header>
                    <p className="terms-text">
                       Shipping, delivery times, and return policies are outlined on our Shipping & Returns page. If you have questions about your order, contact us at support@offsoundings.store.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">6. Intellectual Property</Header>
                    <p className="terms-text">
                        All content on our website — including but not limited to logos, product images, designs, and text — is the property of Off Soundings or its licensors and is protected under intellectual property laws. You may not reproduce, modify, or distribute any content without prior written consent.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">7. Limitation of Liability</Header>
                    <p className="terms-text">
                        To the fullest extent permitted by law, Off Soundings shall not be liable for any indirect, incidental, special, or consequential damages that result from:
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*">The use or inability to use the website or services.</List.Item>
                        <List.Item as="li" value="*">Any product purchased from the website.</List.Item>
                        <List.Item as="li" value="*">Any unauthorized access to or use of our servers and/or any personal information stored therein.</List.Item>
                    </List>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">8. Contact Us</Header>
                    <p className="terms-text">
                        All products and services are provided “as is” and “as available” without any warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">9. Modifications</Header>
                    <p className="terms-text">
                        We reserve the right to update or change these Terms at any time. Any changes will be posted on this page with an updated effective date. Continued use of the website after such changes constitutes your acceptance of the new Terms.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">10. Governing Law</Header>
                    <p className="terms-text">
                        These Terms shall be governed by and construed in accordance with the laws of the State of Connecticut, without regard to its conflict of law principles.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header className="terms-service-section-header" as="h3">11. Contact Us</Header>
                    <p className="terms-text">
                        If you have any questions or concerns about these Terms, please contact us:
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*"><b>Email:</b> support@offsoundings.store</List.Item>
                        <List.Item as="li" value="*"><b>Phone:</b> (203) 458-3295</List.Item>
                        <List.Item as="li" value="*"><b>Mailing Address:</b> 54 East Industrial Road, Branford, CT 06405</List.Item>
                    </List>
                </div>
                <Divider className="terms-divider" />
            </div>
        </div>
    );
};

export default TermsOfService;