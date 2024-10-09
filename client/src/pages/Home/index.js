import React from "react";
import LogoutModal from "../../components/LogoutModal";

const Home = (props) => {

    const { auth } = props;
    console.log(auth);
    return (
        <div>
            <h1>Home</h1>
            <LogoutModal auth={auth} />
        </div>
    );
};

export default Home;