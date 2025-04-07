import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import AllWeaherHighViz from "../AllWeatherHighViz";
import DXNHeadwear from "../DXNHeadwear";
import FishLifeUSA from "../FishLifeUSA";
import PBRCorp from "../PBRCorp";
import ZComm from "../ZComm";

import "./style.css";

const App = () => {

    const auth = useContext(AuthContext);

    return (
        <>
            {(window.location.href.includes("www.zcomm.store") || window.location.href.includes("localhost")) ? <ZComm auth={auth} /> : null}
            {(window.location.href.includes("www.allweatherhiviz.com")) ? <AllWeaherHighViz /> : null}
            {(window.location.href.includes("www.dxnheadwear.com")) ? <DXNHeadwear auth={auth} /> : null}
            {(window.location.href.includes("www.fishlifeusa.com")) ? <FishLifeUSA auth={auth} /> : null}
            {(window.location.href.includes("www.pbrcorpshop.com")) ? <PBRCorp auth={auth} /> : null}
        </>
    );
};

export default App;