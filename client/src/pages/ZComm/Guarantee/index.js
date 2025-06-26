import React from "react";
import { Header, Divider, List } from "semantic-ui-react";

import "./style.css";

const Guarantee = () => {
    return (
        <div id="zcomm-guarantee-container">
            <div id="zcomm-guarantee">
                <Header id="zcomm-guarantee-main-header" as="h1">Our Guarantee</Header>
                <Header id="zcomm-guarantee-subheader" as="h4">
                    At Z-Comm, we don't just build and fulfill — we stand behind every service, every solution, and every shipment.
                    Whether you’re launching your first e-commerce brand or scaling up your operations, our team is here to ensure
                    your success with a service guarantee you can count on.
                </Header>
                <Divider className="zcomm-guarantee-divider" />
                <Header className="zcomm-guarantee-header" as="h2">What We Promise</Header>
                <List id="zcomm-guarantee-list">
                    <List.Item className="zcomm-guarantee-list-item">
                        <span className="zcomm-guarantee-list-icon">✅</span>
                        <strong>Reliable Development:</strong> Every website and digital solution we build is custom-crafted to meet 
                        the exact needs of your brand. From front-end design to back-end architecture, we guarantee clean code, responsive 
                        layouts, and seamless integrations—tested thoroughly before delivery.
                    </List.Item>
                    <List.Item className="zcomm-guarantee-list-item">
                        <span className="zcomm-guarantee-list-icon">✅</span>
                        <strong>On-Time Fulfillment:</strong> Our in-house fulfillment service ensures your products are picked, packed, and 
                        shipped with precision. We guarantee order processing within 24-48 business hours and real-time tracking updates. If 
                        we miss a delivery deadline caused by us, your fulfillment fee for that order is on us.
                    </List.Item>
                    <List.Item className="zcomm-guarantee-list-item">
                        <span className="zcomm-guarantee-list-icon">✅</span>
                        <strong>Transparent Communication:</strong> You’ll never be in the dark. Our team offers consistent updates, clear 
                        timelines, and real human support every step of the way. We guarantee to respond to all inquiries within 1 business day.
                    </List.Item>
                    <List.Item className="zcomm-guarantee-list-item">
                        <span className="zcomm-guarantee-list-icon">✅</span>
                        <strong>Zero Setup Fees, No Hidden Charges:</strong> We’re upfront with all costs—no surprises, no bloated retainers. 
                        What you see is what you pay, guaranteed. We provide monthly itemized reports so you know exactly where your dollars are going.
                    </List.Item>
                    <List.Item className="zcomm-guarantee-list-item">
                        <span className="zcomm-guarantee-list-icon">✅</span>
                        <strong>Satisfaction-First Policy:</strong> If you're not satisfied with any aspect of our development work or fulfillment process, 
                        let us know within 14 days of delivery. We’ll make it right—whether that means revising your site or re-sending your customer orders 
                        at no extra charge.
                    </List.Item>
                </List>
                <Divider className="zcomm-guarantee-divider" />
                <Header className="zcomm-guarantee-header" as="h2">Built for Brands That Expect More</Header>
                <p className="zcomm-guarantee-text">
                    We understand that your business depends on us. That’s why Z-Comm was built around transparency, accountability, and results. Whether 
                    we’re helping you launch a new product or manage hundreds of monthly orders, our guarantee is simple: <strong>We deliver quality — on time, every time.</strong>
                </p>
                <Divider className="zcomm-guarantee-divider" />
                <Header className="zcomm-guarantee-header" as="h2">Need Help? We’re Here.</Header>
                <p className="zcomm-guarantee-text">
                    Reach out to our support team anytime at <a href="mailto:support@zcomm.store">support@zcomm.store</a> or use the live chat on our site. We’ll take care of it.
                </p>
            </div>
        </div>
    );
};

export default Guarantee;