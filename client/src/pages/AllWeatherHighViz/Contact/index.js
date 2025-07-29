import React from "react";
import ContactForm from "../../../components/AllWeatherHighViz/ContactForm";
import SEO from "../../../components/SEO";

const Contact = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-01.png?v=1753723852"
                title="Contact Us - All Weather High Viz – Get In Touch for Safety Gear Support"
                description="Have questions or need assistance? Contact All Weather High Viz for help with hi‑vis workwear, orders, sizing, or returns. We're here to support working-class durability."
                keywords="All Weather High Viz contact, customer support, hi‑vis gear inquiries, contact safety apparel brand, working class gear support, order assistance, sizing help"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-contact.png?v=1753795707"
                url={window.location.href}
            />
            <ContactForm />
        </>
    );
};

export default Contact;