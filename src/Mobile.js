import Gnb from "./component/Mobile/gnb";
import Modal from "./component/Mobile/modal";
import Pools from "./component/Mobile/pools";
import React, { useState } from "react";

function Mobile() {
  const [display, setDisplay] = useState(false);
  const [displayS, setDisplayS] = useState(false);
  const [type, setType] = useState("pool");
  return (
    <div className="Mobile">
      <Gnb display={display} setDisplay={setDisplay} />
      <Pools />
      <Modal type={type} display={displayS} setDisplay={setDisplayS} />
      <img
        src="./images/btn-hbg.svg"
        onClick={() => {
          setDisplay(!display);
        }}
        style={{
          position: "fixed",
          wdith: "20px",
          height: "20px",
          left: "calc(100vw - 40px)",
          top: "20px"
        }}
      />
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: black;
        }
      `}</style>
    </div>
  );
}

export default Mobile;
