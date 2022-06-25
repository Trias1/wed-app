import React from "react";
import "../commoncss/amplop.css";
import bri from "../images/Bri.jpg";
import gopay from "../images/gopay.jpeg";
import dana from "../images/dana.jpeg";

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
              <div className="row mt-5">
              <div className="col">
                <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    src={gopay}
                    className="img-fluidd"
                  />
                </div>
                <div className="d-flex justify-content-center">
                <h4>Gopay</h4>
                </div>
              </div>
              <div className="col">
              <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    src={bri}
                    className="img-fluidd"
                  />
                </div>
                <div className="d-flex justify-content-center">
                <h4>Nama : Adi</h4>
                </div>
                <div className="d-flex justify-content-center">
                <h4> No Rekening : 404401012253536</h4>
                </div>
              </div>
              <div className="col">
              <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    src={dana}
                    className="img-fluidd"
                  />
                </div>
                <div className="d-flex justify-content-center">
                <h4>Dana</h4>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amplop;
