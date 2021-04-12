import Gnb from "./component/Desktop/gnb";
import Pools from "./component/Desktop/pools";
import Modal from "./component/Desktop/modal";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import contracts from "./lib/contracts";

function Desktop({ web3Modal }) {
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState("pool");
  const [choosen, choise] = useState("Pools");
  const [web3, setWeb3] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [chainId, setChainId] = useState(-1);

  const position = ["Pools"];

  const ConnectWallet = async () => {
    const provider = await web3Modal.connect();
    await setWeb3(new Web3(provider));
  };

  useEffect(async () => {
    window.addEventListener("scroll", () => onScroll());

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  useEffect(async () => {
    if (!web3) return;
    setAccount((await web3.eth.getAccounts())[0]);
    setChainId(await web3.eth.getChainId());
  }, [web3]);

  const onScroll = e => {
    choise(position[(window.scrollY / window.innerHeight).toFixed()]);
  };

  return (
    <div className="Desktop">
      <Gnb
        choosen={choosen}
        choise={choise}
        connectWallet={ConnectWallet}
        account={account}
      />
      <Pools
        web3={web3}
        account={account}
        connectWallet={ConnectWallet}
        pools={contracts[chainId] ? contracts[chainId].POOL : undefined}
      />
      <Modal type={type} modalOpen={display} setModalOpen={setDisplay} />
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

export default Desktop;
