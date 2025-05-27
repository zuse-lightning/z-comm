import React from "react";
import { Image } from "semantic-ui-react";
import HomeCollections from "../../../components/AllWeatherHighViz/HomeCollections";

const Home = () => {
    return (
        <div>
            <Image src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/free-msytery-items03-1648557869218.webp?v=1732028101" alt="AWHV Home" />
            <HomeCollections />
        </div>
    );
};

export default Home;