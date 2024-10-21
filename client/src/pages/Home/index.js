import React, { useEffect } from "react";
import LogoutModal from "../../components/LogoutModal";
import axios from "axios";
const { axiosInstance } = require("../../utils");

const Home = (props) => {

    const { auth } = props;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/auth/test");
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

export default Home;