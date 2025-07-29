import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Headwear = ({ styleOptions }) => {
    const [collection, setCollection] = useState([]);
    console.log("Style Options:", styleOptions);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: "336238182595",
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
                title="Hi‑Vis Headwear - All Weather High Viz – Safety Beanies & Hats for the Job"
                description="Top off your safety gear with ANSI-compliant hi‑vis headwear from All Weather High Viz. Shop reflective beanies, hats, and caps made for jobsite visibility."
                keywords="hi‑vis headwear, safety beanies, reflective hats, ANSI hi‑vis caps, All Weather High Viz headwear, jobsite safety hats, construction beanies, working-class gear"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-headwear.png?v=1753801554"
                url={window.location.href}
            />
            {collection.length > 0 ?
                <div id="awhv-headwear-container">
                    <Header as="h1" id="awhv-headwear-header">{collection[0].collection_name}</Header>
                    <div id={`collection-component-${collection[0].collection_node}`}></div>
                </div> : null}
        </>
    );
};

export default Headwear;