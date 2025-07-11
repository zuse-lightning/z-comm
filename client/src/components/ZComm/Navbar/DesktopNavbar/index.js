import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const DesktopNavbar = () => {
    return (
        <Menu id="zcomm-navbar" secondary>
            <Menu.Item
                className="zcomm-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/" : "/"}
                name="home"
            >
                <div id="zcomm-logo-container">
                    <Image 
                        draggable="false"
                        size="medium"
                        id="zcomm-logo"
                        src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-logo-alt.png?v=1732219354"
                    />
                </div>
            </Menu.Item>
            <Dropdown className="zcomm-header-nav-item" item text="Our Stores">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="https://www.allweatherhiviz.com/">All Weather High Viz</Dropdown.Item> 
                    <Dropdown.Item as={Link} to="https://www.offsoundings.store/">Off Soundings</Dropdown.Item>
                    <Dropdown.Item as={Link} to="https://www.shorelineveterans.store/">Shoreline Veterans</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
                className="zcomm-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/about" : "/about"}
                name="about"
            >
                About
            </Menu.Item>
            <Menu.Item
                className="zcomm-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/services" : "/services"}
                name="services"
            >
                Services
            </Menu.Item>
            <Menu.Item
                className="zcomm-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/faq" : "/faq"}
                name="faq"
            >
                Help
            </Menu.Item>
            <Menu.Item
                className="zcomm-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/quote" : "/quote"}
                name="quote"
            >
                Get A Quote
            </Menu.Item>
            <Menu.Item
                className="zcomm-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.zcomm.store/contact" : "/contact"}
                name="contact"
            >
                Contact
            </Menu.Item>
        </Menu>
    );
};

export default DesktopNavbar;