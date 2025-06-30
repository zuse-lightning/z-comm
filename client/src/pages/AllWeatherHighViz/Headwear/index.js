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
                            collectionId: "336238182595",
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

        console.log(collection);
    
        useEffect(() => {
            if (collection.length > 0) {
                embedShopifyCollection(collection[0].collection_id, `collection-component-${collection[0].collection_node}`, collection[0].collection_domain, collection[0].collection_token, styleOptions)
            };
        }, [collection]);
    
        return (
            <>
                {collection.length > 0 ?
                    <div id="awhv-headwear-container">
                        <Header as="h1" id="awhv-headwear-header">{collection[0].collection_name}</Header>
                        <div id={`collection-component-${collection[0].collection_node}`}></div>
                    </div> : null}
            </>
        );
};

export default Headwear;