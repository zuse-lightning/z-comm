import React from "react";
import { Header, Divider, List } from "semantic-ui-react";

import "./style.css";

const ShippingPolicy = () => {
    return (
        <div id="zcomm-shipping-container">
            <div id="zcomm-shipping">
                <Header id="zcomm-shipping-main-header" as="h1">Shipping Policy</Header>
                <Header id="zcomm-shipping-effect-date" as="h4">
                    <strong>Effective Date:</strong> 06/26/2025
                </Header>
                <Header id="zcomm-shipping-main-subheader" as="h4">
                    At <strong>Z-Comm</strong>, we provide streamlined fulfillment solutions that prioritize 
                    speed, accuracy, and transparency. Whether we’re shipping products on your behalf or 
                    helping you scale your e-commerce logistics, this Shipping Policy outlines what you — 
                    and your customers — can expect when it comes to order fulfillment and delivery.
                </Header>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">1. Order Processing Times</Header>
                    <Header className="zcomm-shipping-subheader" as="h3">a. Fulfillment Orders (Apparel, Accessories & More)</Header>
                    <List className="zcomm-shipping-list" bulleted>
                        <List.Item className="zcomm-shipping-list-item">Orders are processed and fulfilled within <strong>1–3 business days</strong></List.Item>
                        <List.Item className="zcomm-shipping-list-item">Orders placed after 3 PM ET or on weekends/holidays will begin processing the next business day</List.Item>
                        <List.Item className="zcomm-shipping-list-item">Bulk or custom orders may require additional lead time (we’ll notify you in advance)</List.Item>
                    </List>
                    <Header className="zcomm-shipping-subheader" as="h3">b. Digital Services</Header>
                    <p className="zcomm-shipping-text" style={{ width: "80%", margin: "0 auto 2%" }}>
                        No physical shipping is involved. Deliverables such as websites, assets, and documentation are delivered electronically via email, client portals, or cloud storage.
                    </p>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">2. Fulfillment & Physical Products</Header>
                    <p className="zcomm-shipping-text">
                        We partner with trusted carriers such as:
                    </p>
                    <List className="zcomm-shipping-list" bulleted>
                        <List.Item className="zcomm-shipping-list-item">USPS</List.Item>
                        <List.Item className="zcomm-shipping-list-item">UPS</List.Item>
                        <List.Item className="zcomm-shipping-list-item">FedEx</List.Item>
                        <List.Item className="zcomm-shipping-list-item">DHL</List.Item>
                        <List.Item className="zcomm-shipping-list-item">Local or regional couriers (where applicable)</List.Item>
                    </List>
                    <p className="zcomm-shipping-text">
                        Shipping options and rates are calculated at checkout based on destination, product weight, and selected speed.
                    </p>
                    <Header className="zcomm-shipping-subheader" as="h3">⚡ Common Options:</Header>
                    <List className="zcomm-shipping-list" bulleted>
                        <List.Item className="zcomm-shipping-list-item"><strong>Standard Shipping:</strong> 3–7 business days</List.Item>
                        <List.Item className="zcomm-shipping-list-item"><strong>Expedited Shipping:</strong> 2–3 business days</List.Item>
                        <List.Item className="zcomm-shipping-list-item"><strong>Overnight / Express:</strong> 1–2 business days</List.Item>
                    </List>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">3. Domestic & International Shipping</Header>
                    <p className="zcomm-shipping-text">
                        We proudly ship to all 50 U.S. states and U.S. territories. International shipping is available to select countries and regions.
                    </p>
                    <Header className="zcomm-shipping-subheader" as="h3">🌍 International Orders</Header>
                    <List className="zcomm-shipping-list" bulleted>
                        <List.Item className="zcomm-shipping-list-item">Customers are responsible for any customs duties, taxes, or import fees</List.Item>
                        <List.Item className="zcomm-shipping-list-item">Delivery timelines may vary based on local customs processing</List.Item>
                        <List.Item className="zcomm-shipping-list-item">Orders may be subject to delays beyond our control due to international regulations or carrier issues</List.Item>
                    </List>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">4. Tracking Information</Header>
                    <p className="zcomm-shipping-text">
                        Once your order ships, you will receive a confirmation email with tracking details. 
                        You can also access tracking through your Z-Comm dashboard or integration (e.g., Shopify, WooCommerce).
                    </p>
                    <p className="zcomm-shipping-text">
                        Please allow up to 24 hours for tracking to update after shipment.
                    </p>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">5. Shipping Issues</Header>
                    <p className="zcomm-shipping-text">If you experience issues with a shipment (e.g., missing packages, incorrect addresses, or delivery delays):</p>
                    <List className="zcomm-shipping-list">
                        <List.Item className="zcomm-shipping-list-item"><strong>📧 Contact:</strong> <a href="mailto:support@zcomm.store">support@zcomm.store</a></List.Item>
                        <List.Item className="zcomm-shipping-list-item"><strong>📎 Includes:</strong> Order number, tracking number, and description of the issue</List.Item>
                    </List>
                    <p className="zcomm-shipping-text">We’ll work directly with our carriers to resolve the problem or initiate a replacement when appropriate.</p>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">6. Incorrect or Incomplete Addresses</Header>
                    <p className="zcomm-shipping-text">
                        Customers are responsible for providing accurate shipping information. If a package is returned due to an incorrect address:
                    </p>
                    <List className="zcomm-shipping-list" bulleted>
                        <List.Item className="zcomm-shipping-list-item"><strong>Option 1:</strong> We can reship the package after address correction (additional shipping fees may apply)</List.Item>
                        <List.Item className="zcomm-shipping-list-item"><strong>Option 2:</strong> You may request a refund (excluding original shipping costs)</List.Item>
                    </List>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">7. Delays & Disruptions</Header>
                    <p className="zcomm-shipping-text">If your order is delayed or disrupted, please contact us as soon as possible:</p>
                    <List className="zcomm-shipping-list" bulleted>
                        <List.Item className="zcomm-shipping-list-item">Weather or natural disasters</List.Item>
                        <List.Item className="zcomm-shipping-list-item">Carrier or supply chain disruptions</List.Item>
                        <List.Item className="zcomm-shipping-list-item">High-volume seasons (e.g., holidays)</List.Item>
                    </List>
                    <p className="zcomm-shipping-text">We will communicate any known delays as soon as we are made aware.</p>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">8. Lost or Stolen Packages</Header>
                    <p className="zcomm-shipping-text">
                        Z-Comm is not liable for lost or stolen packages marked as “Delivered” by the carrier. 
                        However, we will support you in filing claims and can offer reprints or reshipments at 
                        discounted rates in eligible cases.
                    </p>
                </div>
                <Divider className="zcomm-shipping-divider" />
                <div className="zcomm-shipping-section">
                    <Header className="zcomm-shipping-header" as="h2">9. Contact Us</Header>
                    <p className="zcomm-shipping-text">
                        For any shipping-related inquiries or custom logistics requests, get in touch:
                    </p>
                    <List className="zcomm-shipping-list">
                        <List.Item className="zcomm-shipping-list-item"><strong>📧 Email:</strong> <a href="mailto:support@zcomm.store">support@zcomm.store</a></List.Item>
                        <List.Item className="zcomm-shipping-list-item"><strong>🌐 Website:</strong> <a href="https://www.zcomm.store" target="_blank" rel="noopener noreferrer">www.zcomm.store</a></List.Item>
                    </List>
                    <p className="zcomm-shipping-text">Our fulfillment team is here to ensure your products arrive safely—and on time.</p>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicy;