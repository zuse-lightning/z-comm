import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";

import "./style.css";

const Headwear = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: process.env.REACT_APP_OFF_SOUNDINGS_HEADWEAR_ID,
                        store: "Off Soundings"
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
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-favicon.png?v=1750084870"
                title="Off Soundings - Headwear"
                description="Explore Off Soundings headwear—stylish and functional caps, hats, and visors tailored for boating and coastal racing. Designed for comfort and sun protection on deck."
                keywords="Off Soundings headwear, boating caps, sailing hats, sun protection, coastal racing caps, boat club hats, Off Soundings Club headwear"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-headwear.png?v=1750093142"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="off-sound-headwear-container">
                    <Header as="h1" id="off-sound-headwear-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Headwear;