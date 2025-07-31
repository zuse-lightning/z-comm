import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Hoodies = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336240574659",
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
                title="Hi‑Vis Hoodies & Sweatshirts - All Weather High Viz – Comfortable Safety Gear"
                description="Shop ANSI-compliant hi‑vis hoodies and sweatshirts from All Weather High Viz—designed for comfort, visibility, and durability on the job site."
                keywords="hi‑vis hoodies, ANSI compliant sweatshirts, high visibility hoodies, working-class hoodies, All Weather High Viz hoodies, reflective safety hoodies, jobsite sweatshirts"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-hoodies.png?v=1753800832"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-hoodies-container">
                    <Header as="h1" id="awhv-hoodies-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Hoodies;