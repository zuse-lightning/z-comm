import React from "react";
import { Image } from "semantic-ui-react";
import HomeCollections from "../../../components/AllWeatherHighViz/HomeCollections";
import SEO from "../../../components/SEO";

const Home = ({ styleOptions }) => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="All Weather High Viz - Durable High Visibility Workwear for the Job Site"
                description="Shop durable, ANSI‑compliant high‑visibility workwear from All Weather High Viz—built for construction crews and working‑class customers who demand safety and quality."
                keywords="high visibility workwear, construction safety gear, ANSI Class 2 & 3 hi-vis apparel, durable construction clothing, heavy-duty work jackets & vests, reflective safety vests, rugged hi-vis gear, working class gear brand, All Weather High Viz, jobsite safety apparel"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-home.png?v=1753724660"
                url={window.location.href}
            />
            <Image src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/free-msytery-items03-1648557869218.webp?v=1732028101" alt="AWHV Home" />
            <HomeCollections styleOptions={styleOptions} />
        </>
    );
};

export default Home;