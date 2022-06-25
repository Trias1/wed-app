import React from "react";
import "../commoncss/weadingloaction.css";
import { FiInstagram } from "react-icons/fi";

const Weadingloaction = () => {
  return (
    <div className="section w-details-area center-text">
      <div className="container" id="weadingDate">
        <div className="card">
          <div className="card-body">
            <h3>Akad nikah</h3>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmedd">
                        <FiInstagram />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>Minggu, 3 Juli 2022</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmedd">
                        <FiInstagram />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>08.00 WIB s.d 10.00 WIB</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3>Resepsi</h3>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmed">
                        <FiInstagram />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>11.00 WIB s.d Selesai</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex mb-3">
                    <div className="p-2">
                      <a href="#blank" className="sosmed">
                        <FiInstagram />
                      </a>
                    </div>
                    <div className="p-2">
                      <h4>Dusun karang tengah RT003/17 desa 
					  Imbanagara kecamatan kabupaten Ciamis</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weadingloaction;
