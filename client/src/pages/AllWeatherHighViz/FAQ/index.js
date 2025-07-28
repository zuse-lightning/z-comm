import React from "react";
import FAQAccordion from "../../../components/AllWeatherHighViz/FAQAccordion";
import SEO from "../../../components/SEO";

const FAQ = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-01.png?v=1753723852"
                title="FAQ | All Weather High Viz – Safety Gear Questions Answered"
                description="Have questions? Read our FAQ about high‑visibility workwear, ANSI compliance, sizing, shipping, and returns. All Weather High Viz is here to help."
                keywords="All Weather High Viz FAQ, hi‑vis workwear questions, ANSI compliance FAQ, sizing information, shipping questions, returns policy, working class gear support"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-faq.png?v=1753727360"
                url={window.location.href}
            />
            <FAQAccordion />
        </>
    );
};

export default FAQ;