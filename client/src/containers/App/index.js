import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import AllWeaherHighViz from "../AllWeatherHighViz";
import DXNHeadwear from "../DXNHeadwear";
import FishLifeUSA from "../FishLifeUSA";
import PBRCorp from "../PBRCorp";
import OffSoundings from "../OffSoundings";
import ZComm from "../ZComm";

import "./style.css";

const getWindowDimensions = () => {
  const page = document.querySelector("html");
  const { clientWidth: width, clientHeight: height } = page;
  return {
    width,
    height
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const App = () => {

    const auth = useContext(AuthContext);
    const { width } = useWindowDimensions();

    return (
        <>
            {(window.location.href.includes("www.zcomm.store")) ? <ZComm auth={auth} screenWidth={width} /> : null}
            {(window.location.href.includes("www.allweatherhiviz.com") || window.location.href.includes("localhost")) ? <AllWeaherHighViz /> : null}
            {(window.location.href.includes("www.dxnheadwear.com")) ? <DXNHeadwear auth={auth} /> : null}
            {(window.location.href.includes("www.fishlifeusa.com")) ? <FishLifeUSA auth={auth} /> : null}
            {(window.location.href.includes("www.pbrcorpshop.com")) ? <PBRCorp auth={auth} /> : null}
            {(window.location.href.includes("www.offsoundings.store")) ? <OffSoundings auth={auth} screenWidth={width} /> : null}
        </>
    );
};

export default App;