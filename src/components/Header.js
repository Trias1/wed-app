import React from "react";
import "../commoncss/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineInsertInvitation } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMapsUgc } from "react-icons/md";
import { BiPauseCircle, BiPlayCircle } from "react-icons/bi";
import { useState } from "react";

const Header = ({ audioElem, isPlaying, setIsPlaying }) => {
  const [activeNav, setActiveNav] = useState("#");

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className="nav">
        <a
          href="/#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#keterangan"
          onClick={() => setActiveNav("#keterangan")}
          className={activeNav === "#keterangan" ? "active" : ""}
        >
          <TbFileDescription />
        </a>
        <a
          href="#invitation"
          onClick={() => setActiveNav("#invitation")}
          className={activeNav === "#invitation" ? "active" : ""}
        >
          <MdOutlineInsertInvitation />
        </a>
        <a
          href="#weadingDate"
          onClick={() => setActiveNav("#weadingDate")}
          className={activeNav === "#weadingDate" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#maps"
          onClick={() => setActiveNav("#maps")}
          className={activeNav === "#maps" ? "active" : ""}
        >
          <MdOutlineMapsUgc />
        </a>
        <button>
          {isPlaying ? (
            <BiPauseCircle onClick={PlayPause} />
          ) : (
            <BiPlayCircle onClick={PlayPause} />
          )}
        </button>
      </div>
    </div>
  );
};
export default Header;
