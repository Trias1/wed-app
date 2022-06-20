import React, { useEffect, useRef } from "react";
import "./commoncss/bootstrap.css";
import "./commoncss/font-icon.css";
import "./App.css";
import Header from "./components/Header";
import WeadingDate from "./components/WeadingDate";
import CountDown from "./components/CountDown";
// import WeadingDetails from './components/weading/WeadingDetails2';
import Invitation from "./components/Invitation";
import Weadingloaction from "./components/Weadingloaction";
import Contact from "./components/Contact";
import Keterangan from "./components/Keterangan";
import Maps from "./components/Maps";
import Amplop from "./components/Amplop";
import Privasi from "./components/Privasi";

import audioSrc from "../src/audio/westlife.mp3";

import { useState } from "react";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <div className="App">
        <div className="sound">
          <audio
            // src="https://s174.123apps.com/aconv/d/s174dtyFzeTc_mp3_LIHt0kDM.mp3"
            src={audioSrc}
            ref={audioElem}
          />
        </div>
        <Header
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioElem={audioElem}
        />
        <WeadingDate />
        <Keterangan />
        <CountDown />
        <Invitation />
        <Weadingloaction />
        <Maps />
        {/* <WeadingDetails /> */}
        <Amplop />
        <Privasi />
        <Contact />
      </div>
    </>
  );
};

export default App;
