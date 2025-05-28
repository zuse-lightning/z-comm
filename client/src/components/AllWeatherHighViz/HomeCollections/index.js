import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";

import "./style.css";
import { set } from "mongoose";

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
            console.log("Collection Container:", collectionContainer);
            // setTimeout(() => {
            //     console.log("Collection Container:", collectionContainer);
            // }, 1000);

            if (collectionContainer.length > 0) {

                Object.keys(collectionContainer).forEach((key) => {
                    console.log(collectionContainer);

                    const collectionDivs = document.querySelectorAll('div[id^="collection-component-"]');
                    console.log("Collection Divs:", collectionDivs);
                    // const collectionProducts = document.getElementsByClassName("has-image shopify-buy__layout-vertical shopify-buy__product");
                    // if (collectionProducts.length > 0) {
                    //     console.log("Collection Products:", collectionProducts);
                    // }

                    // for (let i = 0; i < collectionProducts.length; i++) {
                    //     console.log("Collection Product:", collectionProducts[i]);
                    // };
                });
                setTimeout(() => {
                    const iframes = document.querySelectorAll('div[id^="collection-component-"] iframe');
                    if (iframes) {
                        iframes.forEach(iframe => { 
                            iframe.style.height = "460px";
                            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                            if (iframeDoc) {
                                const productElements = iframeDoc.querySelectorAll('.shopify-buy__product');
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
                </div>
            )) : null}
            {/* <div id="awhv-home-collections-container">
                <Header as="h1" id="awhv-home-collections-header">Home Collections</Header>
                <div id={`collection-component-336238215363`}></div>
            )) : null}
            <div id="awhv-home-collections-container">
                <Header as="h1" id="awhv-home-collections-header">Home Collections</Header>
                <div id={`collection-component-336238215363`}></div>
                <div id={`collection-component-336238215363`}></div>
            </div>*/}
        </>
    );
};

export default HomeCollections;