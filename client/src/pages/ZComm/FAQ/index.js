import React from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../../../components/ZComm/FAQAccordion";
import SEO from "../../../components/SEO";

const FAQ = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="Z‑Comm - FAQ – E‑Commerce Development & Fulfillment Answers"
                description="Have questions? Z‑Comm’s FAQ page covers everything from web development timelines and platforms to product fulfillment and shipping support."
                keywords="e-commerce FAQ, Z-Comm questions, fulfillment support, Shopify development help, WooCommerce setup, shipping assistance, web development process, order fulfillment FAQs, Z‑Comm help center"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-faq.png?v=1753293527"
                url={window.location.href}
            />
            <FAQAccordion />
        </>
    );
};

export default FAQ;