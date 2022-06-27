import React, { useEffect, useRef, useState } from "react";
import { FaBookOpen } from "react-icons/fa";

export default function modal({ isPlaying, setIsPlaying }: any) {
  const audioElem = useRef() as React.MutableRefObject<HTMLAudioElement>;

  const onPlaySound = () => {
    console.log(isPlaying);
    setIsPlaying(true);
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };
  return (
    <>
      <div className="sound">
        <audio src="/audio/westlife.mp3" ref={audioElem} />
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="d-flex flex-column">
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="modal-body text-center ">
                  <div className="img-undangan ">
                    <img
                      src="/img/foto7.jpg"
                      className="rounded-circle "
                      // layout="responsive"
                      width={400}
                      height={400}
                    />
                  </div>
                  <h1 className="nameUndangan fw-semibold text-5xl text-white mt-4  ">
                    Adi & Dewi Astri
                  </h1>
                  <p className="desc1 fw-bold text-lg text-white ">
                    Kepada Bapak/Ibu/Saudara/i
                  </p>
                  <p className="desc2 fw-semibold text-lg text-white">
                    Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
                  </p>
                  <div className="descButton d-flex justify-content-center align-items-center rounded-pill px-1 position-relative  mx-sm-1 mx-md-5 mx-lg-5 mx-xl-5 mx-xxl-5">
                    <FaBookOpen />
                    <button
                      type="button"
                      className="btn btn-undangan fw-bold px-1"
                      data-bs-dismiss="modal"
                      onClick={onPlaySound}
                    >
                      Buka Undangan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
