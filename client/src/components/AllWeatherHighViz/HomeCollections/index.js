import React, { useState, useEffect } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";

import "./style.css";

const HomeCollections = () => {

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        store: "All Weather High Viz"
                    }
                });
                console.log("Collection data:", res.data);
                setCollections(res.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (collections.length > 0) {
            collections.forEach((collection) => {
                embedShopifyCollection(collection.collection_id, `collection-component-${collection.collection_node}`, collection.collection_domain, collection.collection_token);
            });
            const collectionContainer = document.getElementsByClassName("awhv-home-collections-container");

            if (collectionContainer.length > 0) {
                setTimeout(() => {
                    const iframes = document.querySelectorAll('div[id^="collection-component-"] iframe');
                    if (iframes) {
                        iframes.forEach(iframe => { 
                            iframe.style.height = "460px";
                            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                            if (iframeDoc) {
                                const productElements = iframeDoc.querySelectorAll('.shopify-buy__product');
                                const collectionPagination = iframeDoc.querySelector('.shopify-buy__collection-pagination-button.shopify-buy__btn.is-active');
                                if (collectionPagination) {
                                    collectionPagination.style.display = "none"; // Hide the pagination button
                                }
                                productElements.forEach((el, index) => {
                                    if (index > 3) {
                                        el.style.display = "none"; // Hide all but the first 4 products
                                    }
                                });
                            }
                        });
                    }
                }, 1000);
            }

        }
    }, [collections]);

    return (
        <>
            {collections.length > 0 ? collections.map((collection) => (
                <div key={collection.collection_id} className="awhv-home-collections-container">
                    <Header as="h1" className="awhv-home-collections-header">{collection.collection_name}</Header>
                    <div id={`collection-component-${collection.collection_node}`}></div>
                    <Button className="awhv-home-collections-button" as={Link} to={`/${collection.collection_link}`}>View All</Button>
                </div>
            )) : null}
        </>
    );
};

export default HomeCollections;