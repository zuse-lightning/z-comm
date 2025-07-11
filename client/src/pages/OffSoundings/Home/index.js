import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { axiosInstance } from "../../../utils/api";
import { embedShopifyCollection } from "../../../utils/shopify";
import SEO from "../../../components/SEO";

import "./style.css";

const Home = ({ styleOptions }) => {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/collections", {
                    params: {
                        collectionId: process.env.REACT_APP_OFF_SOUNDINGS_HOME_ID,
                        store: "Off Soundings"
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
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-favicon.png?v=1750084870"
                title="Off Soundings - Cherish The Memories Both On and Off the Water"
                description="Official Off Soundings apparel store—premium boating gear inspired by coastal racing tradition. Shop shirts, outerwear, headwear, and accessories proudly associated with the Off Soundings Club."
                keywords="Off Soundings apparel, boating apparel, sailing gear, boat club merchandise, shirts, outerwear, headwear, accessories, Off Soundings Club"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-home.png?v=1750093143"
                url={window.location.href}
            />
            <div id="off-sound-container">
                <div className="off-sound-header-container">
                    <Header as="h1" id="off-sound-header">Off Soundings</Header>
                    <Header as="h2" id="off-sound-subheader">Cherish The Memories Both On and Off the Water</Header>
                    <div id="off-sound-home-collection">
                        {collection.length > 0 ? <div id={`collection-component-${collection[0].collection_node}`}></div> : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;