import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = () => {
    return (
        <Menu id="awhv-navbar" secondary>
            <Menu.Item
                className="awhv-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/" : "/"}
                name="home"
            >
                <div id="awhv-logo-container">
                    <Image
                        draggable="false"
                        size="medium"
                        id="awhv-logo"
                        src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/Web_Logo_blk_orange.png?v=1732219631"
                    />
                </div>
            </Menu.Item>
            <Menu.Item
                className="awhv-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/our-story" : "/our-story"}
                name="our-story"
            >
                Our Story
            </Menu.Item>
            <Dropdown className="awhv-header-nav-item" item text="Collections">
                <Dropdown.Menu>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/new-releases" : "/new-releases"}>
                            New Releases
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/best-sellers" : "/best-sellers"}>
                        DXN Headwear
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to="https://www.fishlifeusa.com/">
                        Fish Life USA
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to="https://www.pbrcorpshop.com/">
                        PBR Corp Shop
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
                className="awhv-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/services" : "/services"}
                name="services"
            >
                Services
            </Menu.Item>
            <Menu.Item
                className="awhv-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/faq" : "/faq"}
                name="faq"
            >
                Help
            </Menu.Item>
            <Menu.Item
                className="awhv-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/quote" : "/quote"}
                name="quote"
            >
                Get A Quote
            </Menu.Item>
            <Menu.Item
                className="awhv-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/contact" : "/contact"}
                name="contact"
            >
                Contact
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;