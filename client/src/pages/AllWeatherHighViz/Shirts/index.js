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
                        collectionId: "336240476355",
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
                title="Hi‑Vis Work Shirts - All Weather High Viz – Durable Safety Shirts for the Job"
                description="Browse ANSI‑compliant Hi‑Vis work shirts from All Weather High Viz—comfortable, durable, and built for crews who work hard in any weather."
                keywords="high visibility work shirts, hi‑vis shirts, ANSI compliant shirts, durable work shirts, construction safety shirts, All Weather High Viz shirts, working-class work gear"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-shirts.png?v=1753796443"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-shirts-container">
                    <Header as="h1" id="awhv-shirts-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Shirts;