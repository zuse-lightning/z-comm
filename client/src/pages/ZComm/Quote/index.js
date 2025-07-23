import React from "react";
import QuoteForm from "../../../components/ZComm/QuoteForm";
import SEO from "../../../components/SEO";

import "./style.css";

const Quote = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="Request a Quote - Z‑Comm E‑Commerce Web Dev & Fulfillment"
                description="Start your project with Z‑Comm. Request a free quote for e‑commerce web development or product fulfillment services tailored to your business needs."
                keywords="get a quote Z-Comm, e-commerce quote request, web development estimate, fulfillment service pricing, Shopify store quote, WooCommerce development cost, e-commerce project pricing, custom store build quote, Z-Comm consultation"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-quote.png?v=1753293530"
                url={window.location.href}
            />
            <QuoteForm />
        </>
    );
};

export default Quote;