import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Pants = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336240017603",
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
            embedShopifyCollection(collection[0].collection_id, `collection-component-${collection[0].collection_node}`, collection[0].collection_domain, collection[0].collection_token, styleOptions);
        };
    }, [collection]);

    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-01.png?v=1753723852"
                title="Hi‑Vis Work Pants - All Weather High Viz – ANSI Safety Pants for the Job"
                description="Shop ANSI-compliant hi‑vis work pants from All Weather High Viz—built for protection, comfort, and visibility in tough working conditions."
                keywords="hi‑vis pants, ANSI safety pants, reflective work pants, construction work pants, All Weather High Viz pants, jobsite visibility gear, high visibility trousers"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-pants.png?v=1753802273"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-pants-container">
                    <Header as="h1" id="awhv-pants-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Pants;