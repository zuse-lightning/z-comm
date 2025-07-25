import React from "react";
import { Header, Divider, List } from "semantic-ui-react";
import SEO from "../../../components/SEO";

import "./style.css";

const TermsOfService = () => {
    return (
        <>
            <div id="awhv-terms-service-container">
                <div id="awhv-terms-service">
                    <Header id="awhv-terms-service-main-header" as="h1">Terms of Service</Header>
                    <Header id="awhv-terms-service-effect-date" as="h4">
                        <strong>Last Updated:</strong> 07/24/2025
                    </Header>
                    <Header id="awhv-terms-service-main-subheader" as="h4">
                        Welcome to <strong>All Weather High Viz</strong>. We appreciate you choosing gear built for hard work and real-world durability.
                        When you use our website, place an order, or browse our content, you’re agreeing to the terms below. Please read them carefully.
                    </Header>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">1. Acceptance of Terms</Header>
                    <p className="awhv-terms-service-text">
                        By accessing or using our website at <strong>allweatherhiviz.com</strong>, you agree to be bound by these Terms of Service and our Privacy Policy. If you don’t agree, please don’t use the site.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">2. Who We Serve</Header>
                    <p className="awhv-terms-service-text">
                        We sell and ship our products to customers within the United States. You must be at least 18 years old—or have permission from a parent or guardian—to place an order.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">3. Products & Availability</Header>
                    <p className="awhv-terms-service-text">We work hard to keep our inventory accurate and up to date. However:</p>
                    <List className="awhv-terms-service-list" bulleted>
                        <List.Item className="awhv-terms-service-list-item">
                            Product images and descriptions may differ slightly from the physical item.
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            We reserve the right to limit or cancel orders for any reason (e.g., suspected fraud, stock issues).
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Prices and product availability are subject to change without notice.
                        </List.Item>
                    </List>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">4. Orders & Payment</Header>
                    <p className="awhv-terms-service-text">When you place an order, you agree to:</p>
                    <List className="awhv-terms-service-list" bulleted>
                        <List.Item className="awhv-terms-service-list-item">
                            Provide accurate billing and shipping information
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Authorize us to charge your payment method
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Accept that orders are subject to confirmation and availability
                        </List.Item>
                    </List>
                    <p className="awhv-terms-service-text">
                        We accept most major credit cards and secure payment processors. All transactions are encrypted for safety.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">5. Shipping & Delivery</Header>
                    <p className="awhv-terms-service-text">We ship to U.S. addresses and aim to fulfill orders promptly. Shipping timelines may vary based on location, weather, and carrier performance.</p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">6. Returns & Exchanges</Header>
                    <p className="awhv-terms-service-text">
                        We want you to be completely satisfied with your purchase. If you need to return or exchange an item, please contact us within 30 days of receiving your order.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">7. Use of Our Website</Header>
                    <p className="awhv-terms-service-text">
                        You agree not to:
                    </p>
                    <List className="awhv-terms-service-list" bulleted>
                        <List.Item className="awhv-terms-service-list-item">
                            Use the site for any illegal or unauthorized purpose
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Interfere with the site’s functionality or security
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Copy or reuse our branding, designs, or product content without permission
                        </List.Item>
                    </List>
                    <p className="awhv-terms-service-text">
                        We reserve the right to block or remove users who misuse the site.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">8. Intellectual Property</Header>
                    <p className="awhv-terms-service-text">
                        All content on our site—including logos, photos, designs, and copy—is owned by or licensed to All Weather High Viz. 
                        You may not reproduce or distribute any materials without our written consent.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">9. Limitation of Liability</Header>
                    <p className="awhv-terms-service-text">
                        We do our best to provide high-quality products and service, but we’re not liable for:
                    </p>
                    <List className="awhv-terms-service-list" bulleted>
                        <List.Item className="awhv-terms-service-list-item">
                            Any damages from using our products incorrectly
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Interruptions or errors on our website
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            Third-party links or services we don’t control
                        </List.Item>
                    </List>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">10. Changes to Terms</Header>
                    <p className="awhv-terms-service-text">
                        We may update these Terms from time to time. Any changes will be posted on this page with a new "Last Updated" date.
                    </p>
                    <Divider className="awhv-terms-service-divider" />
                    <Header className="awhv-terms-service-header" as="h2">11. Contact Us</Header>
                    <p className="awhv-terms-service-text">
                        Questions? Concerns? We’ve got your back.
                    </p>
                    <List className="awhv-terms-service-list" bulleted>
                        <List.Item className="awhv-terms-service-list-item">
                            <strong>📧 Email:</strong> <a href="mailto:support@allweatherhiviz.com">support@allweatherhiviz.com</a>
                        </List.Item>
                        <List.Item className="awhv-terms-service-list-item">
                            <strong>📍 Mailing Address:</strong> 54 East Industrial Road, Branford, CT 06405
                        </List.Item>
                    </List>
                </div>
            </div>
        </>
    );
};

export default TermsOfService;