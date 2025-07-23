import React from "react";
import ContactForm from "../../../components/ZComm/ContactForm";
import SEO from "../../../components/SEO";

const Contact = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="Contact Z‑Comm - Get in Touch for E‑Commerce Services"
                description="Have questions or ready to get started? Contact Z‑Comm today for expert e‑commerce web development and product fulfillment support. Let’s grow your store."
                keywords="contact Z-Comm, e-commerce support, web development consultation, fulfillment inquiries, Shopify contact, WooCommerce help, e-commerce quote, contact e-commerce expert, Z-Comm contact page"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-contact.png?v=1753293527"
                url={window.location.href}
            />
            <ContactForm />
        </>
    );
};

export default Contact;