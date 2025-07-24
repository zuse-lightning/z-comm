import React from "react";
import { Header, Divider, List } from "semantic-ui-react";
import SEO from "../../../components/SEO";

import "./style.css";

const ReturnsRefunds = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="Z‑Comm Returns & Refunds Policy - Hassle-Free E‑Commerce Support"
                description="Review Z‑Comm’s Returns & Refunds Policy. We ensure a fair, transparent process for e‑commerce service adjustments, cancellations, or fulfillment issues."
                keywords="Z-Comm returns, refunds policy, e-commerce service refund, fulfillment issue resolution, Shopify returns policy, WooCommerce refund process, service cancellation, return guarantee, Z-Comm support policy"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-returns.png?v=1753372590"
                url={window.location.href}
            />
            <div id="zcomm-return-refund-container">
                <div id="zcomm-return-refund">
                    <Header id="zcomm-return-refund-main-header" as="h1">Returns & Refunds Policy</Header>
                    <Header id="zcomm-return-refund-effect-date" as="h4">
                        <strong>Effective Date:</strong> 06/26/2025
                    </Header>
                    <Header id="zcomm-return-refund-main-subheader" as="h4">
                        At <strong>Z-Comm</strong>, we take pride in delivering high-quality web services and custom fulfillment solutions.
                        Your satisfaction is important to us — whether you’re working with our development team or fulfilling
                        physical products through our platform. This Returns & Refunds Policy outlines how we handle refund
                        requests, returns, and revisions across our service offerings.
                    </Header>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">1. Web Development & Digital Services</Header>
                        <p className="zcomm-return-refund-text">
                            Due to the custom nature of our web development, branding, and e-commerce integration services, <strong>we do not offer refunds once a project has been initiated.</strong>
                        </p>
                        <p className="zcomm-return-refund-text">
                            However, we stand behind the quality of our work. If you’re not satisfied with the results, we offer:
                        </p>
                        <List className="zcomm-return-refund-list" bulleted>
                            <List.Item className="zcomm-return-refund-list-item"><strong>Free Revisions</strong> within 14 days of project completion to correct errors or meet original project specifications</List.Item>
                            <List.Item className="zcomm-return-refund-list-item"><strong>Clear milestone approvals</strong> before moving into the next phase of any multi-step project</List.Item>
                            <List.Item className="zcomm-return-refund-list-item"><strong>Escalation to a senior developer or project lead</strong> if expectations are not met</List.Item>
                        </List>
                        <p className="zcomm-return-refund-text">
                            <strong>Refunds may be considered only if no work has been delivered and the request is made within 72 hours of payment confirmation.</strong>
                        </p>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">2. Fulfillment & Physical Products</Header>
                        <p className="zcomm-return-refund-text">
                            If your order is being fulfilled through our print-on-demand, warehousing, or product distribution services, the following return and refund guidelines apply:
                        </p>
                        <Header className="zcomm-return-refund-subheader" as="h3">a. Damaged or Defective Items</Header>
                        <p className="zcomm-return-refund-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                            We will replace or refund any items that arrive damaged, misprinted, or otherwise defective. Please notify us within <strong>7 days of delivery</strong> with:
                        </p>
                        <List className="zcomm-return-refund-list" bulleted>
                            <List.Item className="zcomm-return-refund-list-item">A photo of the damaged item</List.Item>
                            <List.Item className="zcomm-return-refund-list-item">Your order number</List.Item>
                            <List.Item className="zcomm-return-refund-list-item">A brief description of the issue</List.Item>
                        </List>
                        <p className="zcomm-return-refund-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                            Approved replacements will be shipped at no additional cost.
                        </p>
                        <Header className="zcomm-return-refund-subheader" as="h3">b. Wrong Item Received</Header>
                        <p className="zcomm-return-refund-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                            If you receive the wrong product, we’ll make it right—either by shipping the correct item or issuing a full refund.
                            Contact us within <strong>7 days of delivery</strong>.
                        </p>
                        <Header className="zcomm-return-refund-subheader" as="h3">c. Internet or Network Activity</Header>
                        <p className="zcomm-return-refund-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                            As our products are often made-to-order or personalized, <strong>we do not accept returns for size issues, preference changes, or mistaken orders.</strong> Please double-check sizing charts and product previews before confirming your order.
                        </p>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">3. Return Process</Header>
                        <p className="zcomm-return-refund-text">
                            To initiate a return or report an issue:
                        </p>
                        <List className="zcomm-return-refund-list" bulleted>
                            <List.Item className="zcomm-return-refund-list-item"><strong>Email:</strong> <a href="mailto:support@zcomm.store">support@zcomm.store</a></List.Item>
                            <List.Item className="zcomm-return-refund-list-item"><strong>Include:</strong> Order number, description of issue, and photos (if applicable)</List.Item>
                        </List>
                        <p className="zcomm-return-refund-text">
                            Once your request is reviewed, we will issue return instructions, replacement details, or process your refund accordingly.
                        </p>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">4. Refund Timelines</Header>
                        <p className="zcomm-return-refund-text">
                            Approved refunds are processed to the original method of payment within <strong>5–10 business days</strong>. You will receive
                            an email confirmation once the refund has been issued. Processing times may vary based on your financial institution.
                        </p>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">5. Non-Refundable Items and Services</Header>
                        <List className="zcomm-return-refund-list" bulleted>
                            <List.Item className="zcomm-return-refund-list-item">Digital deliverables once approved and delivered</List.Item>
                            <List.Item className="zcomm-return-refund-list-item">Custom-printed merchandise unless damaged or defective</List.Item>
                            <List.Item className="zcomm-return-refund-list-item">Bulk fulfillment services once an order has entered production</List.Item>
                            <List.Item className="zcomm-return-refund-list-item">Domain registrations, third-party subscriptions, and app licenses purchased on your behalf</List.Item>
                        </List>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">6. Exchanges</Header>
                        <p className="zcomm-return-refund-text">
                            We currently do not offer direct exchanges. If you need a replacement due to size or fit,
                            please contact our team to discuss custom solutions or reorder options.
                        </p>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">7. Cancellations</Header>
                        <p className="zcomm-return-refund-text">
                            You may cancel a development or service engagement within <strong>72 hours of payment</strong>, provided that no work has begun.
                            Fulfillment orders may only be canceled before they enter production.
                        </p>
                        <p className="zcomm-return-refund-text">To request a cancellation, email support@zcomm.store as soon as possible.</p>
                    </div>
                    <Divider className="zcomm-return-refund-divider" />
                    <div className="zcomm-return-refund-section">
                        <Header className="zcomm-return-refund-header" as="h2">8. Contact Us</Header>
                        <p className="zcomm-return-refund-text">
                            If you have any questions about your order, service agreement, or eligibility for a return or refund, reach out to us:
                        </p>
                        <List className="zcomm-return-refund-list">
                            <List.Item className="zcomm-return-refund-list-item"><strong>📧 Email:</strong> <a href="mailto:privacy@zcomm.store">privacy@zcomm.store</a></List.Item>
                            <List.Item className="zcomm-return-refund-list-item"><strong>🌐 Website:</strong> <a href="https://www.zcomm.store" target="_blank" rel="noopener noreferrer">www.zcomm.store</a></List.Item>
                        </List>
                        <p className="zcomm-return-refund-text">We’re here to help ensure you receive the quality and results you expect from Z-Comm.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReturnsRefunds;