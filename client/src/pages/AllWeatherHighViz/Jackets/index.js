import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Jackets = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336239820995",
                        store: "All Weather High Viz"
                    }
                });
                setCollection(res.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
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
                title="Hi‑Vis Jackets & Outerwear - All Weather High Viz – ANSI-Compliant Safety Outerwear"
                description="Shop durable, ANSI-compliant hi‑vis jackets and outerwear from All Weather High Viz—built for weather resistance, jobsite safety, and working-class toughness."
                keywords="hi‑vis jackets, ANSI compliant jackets, high visibility outerwear, All Weather High Viz jackets, workwear jackets, rugged safety outerwear, construction crew jackets"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-jackets.png?v=1753796897"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-jackets-container">
                    <Header as="h1" id="awhv-jackets-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Jackets;