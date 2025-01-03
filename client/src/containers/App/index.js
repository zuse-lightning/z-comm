import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import AllWeaherHighViz from "../AllWeatherHighViz";
import ZComm from "../ZComm";

import "./style.css";

const App = () => {

    const auth = useContext(AuthContext);

    return (
        <>
            {(window.location.href === "www.zcomm.store" || window.location.href.includes("localhost")) ? <ZComm auth={auth} /> : null}
            {window.location.href === "www.allweatherhighviz.com" ? <AllWeaherHighViz /> : null}
        </>
    );
};

export default App;