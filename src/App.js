import React, { useEffect, useRef } from "react";
import "./commoncss/bootstrap.css";
import "./commoncss/font-icon.css";
import "./App.css";
import Header from "./components/Header";
import WeadingDate from "./components/WeadingDate";
import CountDown from "./components/CountDown";
import Invitation from "./components/Invitation";
import Weadingloaction from "./components/Weadingloaction";
import Keterangan from "./components/Keterangan";
import Maps from "./components/Maps";
import Amplop from "./components/Amplop";
import Privasi from "./components/Privasi";
import AddBook from "./components/comments/AddBook";
import BooksList from "./components/comments/BooksList";

import { Container,  Row, Col } from "react-bootstrap";

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

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };



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
        
<Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>

        <Fotter/>
      </div>
    </>
  );
};

export default App;
