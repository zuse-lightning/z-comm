import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Shirts = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: process.env.REACT_APP_OFF_SOUNDINGS_SHIRTS_ID,
                        store: "Off Soundings"
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
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-favicon.png?v=1750084870"
                title="Off Soundings - Shirts"
                description="Explore our collection of official Off Soundings shirts—designed for boating enthusiasts and coastal racing fans. Lightweight, durable, and stylish for on-deck or off-season wear."
                keywords="Off Soundings shirts, sailing shirts, boating apparel, coastal racing shirts, boat club apparel, lightweight shirts, Off Soundings Club gear"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-shirts.png?v=1750093143"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="off-sound-shirts-container">
                    <Header as="h1" id="off-sound-shirts-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Shirts;