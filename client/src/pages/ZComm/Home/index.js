import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LogoutModal from "../../../components/LogoutModal";
import { embedShopifyProduct } from "../../../utils/shopify";
import { axiosInstance } from "../../../utils/api";

const Home = (props) => {

    const { auth } = props;

    // console.log(window.ShopifyBuy.UI);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/auth/test");
                console.log(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    useEffect(() => {
        embedShopifyProduct("7997352608028", "ct-schools-store.myshopify.com", "b2b2a6d6fa1291bcb4219ec236d88b85");
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <LogoutModal auth={auth} />
            <div id={`product-component-1731358336108`}></div>
        </div>
    );
};

Home.propTypes = {
    auth: PropTypes.shape({
        currentUser: PropTypes.object,
        logout: PropTypes.func,
        notAuthorized: PropTypes.func,
        alreadyLoggedIn: PropTypes.func,
    }).isRequired,
};

export default Home;