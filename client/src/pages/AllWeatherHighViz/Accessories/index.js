import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Accessories = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336238280899",
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
                title="Hi‑Vis Work Accessories | All Weather High Viz – Safety Add‑Ons for the Job"
                description="Shop high-visibility work accessories from All Weather High Viz—beanies, bags, gloves, and gear built for durability, visibility, and jobsite safety."
                keywords="hi‑vis accessories, reflective beanies, safety gear add-ons, high visibility gloves, ANSI work accessories, All Weather High Viz accessories, jobsite gear, working-class safety gear"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-accessories.png?v=1753802274"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-accessories-container">
                    <Header as="h1" id="awhv-accessories-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Accessories;