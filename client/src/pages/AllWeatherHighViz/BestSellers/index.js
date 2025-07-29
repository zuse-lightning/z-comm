import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const BestSellers = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336228581571",
                        store: "All Weather High Viz"
                    }
                });
                console.log("Collection data:", res.data);
                setCollection(res.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
        console.log("using effect");
    }, []);

    useEffect(() => {
        if (collection.length > 0) {
            embedShopifyCollection(collection[0].collection_id, `collection-component-${collection[0].collection_node}`, collection[0].collection_domain, collection[0].collection_token, styleOptions)
        };
    }, [collection]);

    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-01.png?v=1753723852"
                title="Best Sellers - All Weather High Viz – Popular Hi‑Vis Workwear & Safety Gear"
                description="Explore the most-loved ANSI-compliant high-visibility workwear from All Weather High Viz. Shop best-selling jackets, vests, hoodies & gear trusted by working crews."
                keywords="All Weather High Viz best sellers, top-rated hi‑vis gear, popular safety vests, best-selling hi‑vis jackets, working-class safety apparel, ANSI workwear favorites"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-best-sellers.png?v=1753724837"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-best-sellers-container">
                    <Header as="h1" id="awhv-best-sellers-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default BestSellers;