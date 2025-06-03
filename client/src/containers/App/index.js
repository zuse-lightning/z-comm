import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import AllWeaherHighViz from "../AllWeatherHighViz";
import DXNHeadwear from "../DXNHeadwear";
import FishLifeUSA from "../FishLifeUSA";
import PBRCorp from "../PBRCorp";
import OffSoundings from "../OffSoundings";
import ZComm from "../ZComm";

import "./style.css";

const App = () => {

    const auth = useContext(AuthContext);

    return (
        <>
            {(window.location.href.includes("www.zcomm.store")) ? <ZComm auth={auth} /> : null}
            {(window.location.href.includes("www.allweatherhiviz.com")) || window.location.href.includes("localhost") ? <AllWeaherHighViz /> : null}
            {(window.location.href.includes("www.dxnheadwear.com")) ? <DXNHeadwear auth={auth} /> : null}
            {(window.location.href.includes("www.fishlifeusa.com")) ? <FishLifeUSA auth={auth} /> : null}
            {(window.location.href.includes("www.pbrcorpshop.com")) ? <PBRCorp auth={auth} /> : null}
            {(window.location.href.includes("www.offsoundings.store")) ? <OffSoundings auth={auth} /> : null}
        </>
    );
};

export default App;