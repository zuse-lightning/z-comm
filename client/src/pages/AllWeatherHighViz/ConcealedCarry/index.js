import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const ConcealedCarry = ({ styleOptions }) => {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336238215363",
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
                title="Concealed Carry Collection - All Weather High Viz – Discreet Hi‑Vis Gear"
                description="Shop the Concealed Carry Collection at All Weather High Viz—high‑visibility workwear with hidden carry access, built tough for working-class professionals."
                keywords="All Weather High Viz concealed carry gear, hi‑vis concealed carry apparel, safety wear with CCW pockets, ANSI visibility conceal carry, rugged concealed carry workwear"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-concealed-carry.png?v=1753729039"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-concealed-carry-container">
                    <Header as="h1" id="awhv-concealed-carry-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};


export default ConcealedCarry;