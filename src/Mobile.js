import Gnb from "./component/Mobile/gnb";
import Modal from "./component/Mobile/modal";
import Pools from "./component/Mobile/pools";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import contracts from "./lib/contracts";

function Mobile({ web3Modal }) {
  const [display, setDisplay] = useState(false);
  const [displayS, setDisplayS] = useState(false);
  const [type, setType] = useState("pool");
  const [web3, setWeb3] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [chainId, setChainId] = useState(-1);

  const ConnectWallet = async () => {
    const provider = await web3Modal.connect();
    await setWeb3(new Web3(provider));
  };

  useEffect(async () => {
    if (!web3) return;
    setAccount((await web3.eth.getAccounts())[0]);
    setChainId(await web3.eth.getChainId());
  }, [web3]);

  return (
    <div className="Mobile">
      <Gnb
        display={display}
        account={account}
        setDisplay={setDisplay}
        connectWallet={ConnectWallet}
      />
      <Pools
        web3={web3}
        account={account}
        connectWallet={ConnectWallet}
        chainId={chainId}
        pools={contracts[chainId] ? contracts[chainId].POOL : undefined}
      />
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
