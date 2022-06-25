import React from "react";
import bismillah from "../images/kaligrafi-bismillah-unik.png";
import foto2 from "../images/MempelaiPria.JPG";
import foto1 from "../images/AYXE0057.JPG";
import "../commoncss/invitations.css";

const Invitation = () => {
  return (
    <section id="invitation">
      <div className="section w-detail-area center-text pt-1">
        <div className="container">
          <div className="about__me-image">
            <img
              className="kali-graf"
              height={50}
              width={100}
              src={bismillah}
              alt="kaligrafi"
            />
            <h4>Assalamu`alaikum Warahmatullaahi Wabarakatuh</h4>
            <h5>
              Dengan memohon rahmat Allah S.W.T kami bermaksud menyelenggarakan
              pernikahan putra-putri kami:
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
