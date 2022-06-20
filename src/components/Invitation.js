import React from "react";
import bismillah from "../images/kaligrafi-bismillah-unik.png";
import foto2 from "../images/MempelaiPria.JPG";
import foto1 from "../images/AYXE0057.JPG";
import "../commoncss/invitations.css";

const Invitation = () => {
  return (
    <section id="invitation">
      <div className="section w-details-area center-text">
        <div className="container">
          <div className="about__me-image">
            <img
              className="kali-graf"
              height={50}
              width={100}
              src={bismillah}
              alt="kaligrafi"
            />
            <h4>Assalamu`alaikum Warahmatullaahi Wabarakaatuh</h4>
            <h5>
              Dengan memohon rahmat Allah S.W.T kami bermaksud menyelenggarakan
              pernikahan putra-putri kami:
            </h5>
          </div>
        </div>
        <div className="container about__user">
          <div className="about__mee">
            <div className="about__mee-image">
              <img src={foto2} alt="" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <h5>Adi Hidayatuloh, S. PD</h5>
                <p>Putra dari Bapak Didi Mulyadi & ibu Yayah Adiah</p>
              </article>
            </div>
          </div>
        </div>

        <div className="container about__userr">
          <div className="about__contentt">
            <div className="about__cardss">
              <article className="about__cardd">
                <h5>Dewi Astri, S. E</h5>
                <p>Putri dari Bapak Iwa Kartiwa & ibu Tuti Tohati</p>
              </article>
            </div>
          </div>
          <div className="about__meee">
            <div className="about__meee-image">
              <img src={foto1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
