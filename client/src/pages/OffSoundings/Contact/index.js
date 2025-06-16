import React from "react";
import ContactForm from "../../../components/OffSoundings/ContactForm";
import SEO from "../../../components/SEO";

const Contact = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-favicon.png?v=1750084870"
                title="Off Soundings - Contact"
                description="Need to get in touch? Contact Off Soundings for questions about orders, products, or partnerships. We're here to help and proudly support the Off Soundings Club community."
                keywords="Off Soundings contact, customer service Off Soundings, contact Off Soundings store, support Off Soundings apparel, Off Soundings Club inquiries, order support, product questions, Off Soundings phone, Off Soundings email"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-contact.png?v=1750093141"
                url={window.location.href}
            />
            <ContactForm />
        </>
    );
};

export default Contact;