import React from "react";
import { Image, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const HomeAbout = () => {
    return (
        <div id="zcomm-home-about-container">
            <div id="zcomm-home-about">
                <div className="zcomm-home-about-col">
                    <Image id="zcomm-home-about-img" fluid draggable="false" src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-clothes.png?v=1732647402" />
                </div>
                <div className="zcomm-home-about-col">
                    <Header as="h1" id="zcomm-home-about-header">What Is Z-Comm?</Header>
                    <Header as="h3" id="zcomm-home-about-subheader">
                        Z-Comm is your all-in-one partner for e-commerce success, offering 
                        cutting-edge development solutions and seamless product fulfillment 
                        services. Whether you’re launching a new store or scaling an established 
                        brand, Z-Comm specializes in creating tailored platforms that drive sales 
                        and enhance customer experiences. With streamlined logistics and expert support, 
                        we ensure your products reach your customers quickly and reliably. At Z-Comm, 
                        we’re not just a service provider—we’re your gateway to thriving in the ever-evolving 
                        world of e-commerce.
                    </Header>
                    <Button id="zcomm-home-about-btn" fluid as={Link} to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/about" : "/about"}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;