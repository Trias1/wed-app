import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import Header from './components/Header';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
// import WeadingDetails from './components/weading/WeadingDetails2';
import Invitation from './components/Invitation';
import Weadingloaction from './components/Weadingloaction'
import Contact from './components/Contact';
import Keterangan from './components/Keterangan';
import Maps from './components/Maps';
import Amplop from './components/Amplop';
import Privasi from './components/Privasi';

const App = () => {
  return (
    <div className="App">
     <Header />
     <WeadingDate />
     <Keterangan/>
     <CountDown />
     <Invitation />
     <Weadingloaction />
     <Maps/>
     {/* <WeadingDetails /> */}
     <Amplop/>
     <Privasi/>
     <Contact />
    </div>
  );
}

export default App;
