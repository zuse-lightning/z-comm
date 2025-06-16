import React from "react";
import { Link } from "react-router-dom";
import FAQAccordion from "../../../components/OffSoundings/FAQAccordion";
import SEO from "../../../components/SEO";

const FAQ = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-favicon.png?v=1750084870"
                title="Off Soundings - FAQ"
                description="Have questions? Find answers about Off Soundings apparel, shipping, returns, sizing, and our official affiliation with the Off Soundings Club. Get the info you need quickly."
                keywords="Off Soundings FAQ, Off Soundings help, Off Soundings questions, shipping info, returns policy, sizing guide, Off Soundings Club apparel, customer service, order issues, exchange policy"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-faq.png?v=1750093141"
                url={window.location.href}
            />
            <FAQAccordion />
        </>
    );
};

export default FAQ;