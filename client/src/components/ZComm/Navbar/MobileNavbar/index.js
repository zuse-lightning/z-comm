import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const MobileNavbar = () => {
    <Menu id="zcomm-mobile-navbar" secondary>
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
    </Menu>
};

export default MobileNavbar;