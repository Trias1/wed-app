import React from "react";
import "../commoncss/amplop.css";
import bri from "../images/Bri.jpg";

const Amplop = () => {
  return (
    <section>
      <div className="section w-details-area center-text">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h3>Amplop</h3>
              <h4>
                Jika Bapak/Ibu/Saudara/i ingin mengirimkan hadiah pernikahan
                kepada mempelai pengantin, silahkan mengirimkannya ke :
              </h4>
              <img
                className="card-img-top"
                width={"100px"}
                height="300px"
                src={bri}
                alt=""
              />
              <p>DEWI ASTRI</p>
              <p>404401012231534</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amplop;
