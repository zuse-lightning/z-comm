import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Outerwear = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: process.env.REACT_APP_OFF_SOUNDINGS_OUTERWEAR_ID,
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
                title="Off Soundings - Outerwear"
                description="Discover premium Off Soundings outerwear—water-resistant jackets and windbreakers designed for boating and coastal racing. Stay protected on deck in style and comfort."
                keywords="Off Soundings outerwear, boating jackets, sailing windbreakers, water-resistant jackets, coastal racing gear, boat club outerwear, Off Soundings Club apparel"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-outerwear.png?v=1750093142"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="off-sound-outerwear-container">
                    <Header as="h1" id="off-sound-outerwear-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Outerwear;