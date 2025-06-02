import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = () => {
    return (
        <Menu id="off-sound-navbar" secondary>
            <Menu.Item
                className="off-sound-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/" : "/"}
                name="home"
            >
                <div id="off-sound-logo-container">
                    <Image
                        draggable="false"
                        size="small"
                        id="off-sound-logo"
                        src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-logo.png?v=1732219354"
                    />
                </div>
            </Menu.Item>
            <Dropdown className="off-sound-header-nav-item" item text="Collections">
                <Dropdown.Menu>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/new-releases" : "/new-releases"}>
                            New Releases
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/best-sellers" : "/best-sellers"}>
                        Best Sellers
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/concealed-carry" : "/concealed-carry"}>
                        Concealed Carry Collection
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/shirts" : "/shirts"}>
                        Shirts
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/jackets" : "/jackets"}>
                        Jackets
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/hoodies" : "/hoodies"}>
                        Hoodies
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/headwear" : "/headwear"}>
                        Headwear
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/vests" : "/vests"}>
                        Vests
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/pants" : "/pants"}>
                        Pants
                    </Dropdown.Item>
                    <Dropdown.Item 
                        as={Link} 
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/accessories" : "/accessories"}>
                        Accessories
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
                className="off-sound-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/faq" : "/faq"}
                name="faq"
            >
                Help
            </Menu.Item>
            <Menu.Item
                className="off-sound-header-nav-item"
                as={Link}
                to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/contact" : "/contact"}
                name="contact"
            >
                Contact
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;