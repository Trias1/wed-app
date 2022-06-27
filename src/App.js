import React, { useEffect, useRef } from "react";
import "./commoncss/bootstrap.css";
import "./commoncss/font-icon.css";
import "./App.css";
import Header from "./components/Header";
import WeadingDate from "./components/WeadingDate";
import CountDown from "./components/CountDown";
import Invitation from "./components/Invitation";
import Weadingloaction from "./components/Weadingloaction";
import Comments from "./components/comment/Comments";
import Keterangan from "./components/Keterangan";
import Maps from "./components/Maps";
import Amplop from "./components/Amplop";
import Privasi from "./components/Privasi";

import audioSrc from "../src/audio/westlife.mp3";

import { useState } from "react";
import Gallery from "./components/Gallery";
import Fotter from "./components/Fotter";
import Calonpasangan from "./components/Calonpasangan";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(!true);

  const audioElem = useRef();

  useEffect(() => {
    window.onload = function loadFrame() {
      setTimeout(() => {
        setIsPlaying(true);
      }, 2000);
    };
    console.log(isPlaying);
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
          <audio src={audioSrc} ref={audioElem} />
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
        <Calonpasangan/>
        <Weadingloaction />
        <Maps />
        <Gallery/>
        <Amplop />
        <Privasi />
        <Comments />
        <Fotter/>
      </div>
    </>
  );
};

export default App;
