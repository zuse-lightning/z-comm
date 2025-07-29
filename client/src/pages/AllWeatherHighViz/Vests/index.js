import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Vests = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336240509123",
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
                title="Hi‑Vis Safety Vests - All Weather High Viz – ANSI Class 2 & 3 Reflective Vests"
                description="Shop high-visibility safety vests from All Weather High Viz—ANSI Class 2 and Class 3 compliant, built for visibility, comfort, and jobsite durability."
                keywords="hi‑vis vests, ANSI safety vests, Class 2 vests, Class 3 vests, reflective vests, high visibility gear, construction safety vests, All Weather High Viz vests, jobsite visibility apparel"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-vests.png?v=1753802274"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-vests-container">
                    <Header as="h1" id="awhv-vests-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Vests;