import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LogoutModal from "../../components/LogoutModal";
import { axiosInstance } from "../../utils";

const Home = (props) => {

    const { auth } = props;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/auth/test", { withCredentials: true });
                console.log(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <LogoutModal auth={auth} />
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