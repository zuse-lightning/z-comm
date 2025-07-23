import React from "react";
import AboutBanner from "../../../components/ZComm/AboutBanner";
import AboutMission from "../../../components/ZComm/AboutMission";
import AboutOffer from "../../../components/ZComm/AboutOffer";
import AboutQualities from "../../../components/ZComm/AboutQualities";
import SEO from "../../../components/SEO";

const About = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="About Us – E‑Commerce Web Dev & Fulfillment Experts"
                description="Learn about Z‑Comm’s mission, values, and team. We build high-converting e-commerce stores and provide efficient product fulfillment so brands can scale faster."
                keywords="e-commerce web development, product fulfillment, e-commerce services, Shopify experts, WooCommerce development, dropshipping fulfillment, e-commerce growth, Z‑Comm about"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-about.png?v=1753291229"
                url={window.location.href}
            />
            <AboutBanner />
            <AboutMission />
            <AboutOffer />
            <AboutQualities />
        </>
    );
};

export default About;