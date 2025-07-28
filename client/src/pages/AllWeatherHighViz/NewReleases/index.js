import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const NewReleases = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336237854915",
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
                title="New Releases - All Weather High Viz – Fresh High-Visibility Workwear"
                description="Explore the latest from All Weather High Viz: new hi‑vis jackets, vests, bundles & mystery workwear boxes—designed for working-class durability and safety."
                keywords="All Weather High Viz new releases, new hi‑vis products, latest workwear gear, mystery workwear box, new safety jackets, new safety vests, ANSI compliant new arrivals"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-new-releases.png?v=1753724838"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-new-releases-container">
                    <Header as="h1" id="awhv-new-releases-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default NewReleases;