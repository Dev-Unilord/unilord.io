import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pool from "./pool";
import axios from "axios";

function StartInterval(callback, t) {
  callback();
  return setInterval(callback, t);
}
function Pools({ name, web3, account, connectWallet, pools }) {
  const [prices, setPrices] = useState({});
  useEffect(() => {
    let Interval = StartInterval(async () => {
      let res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=unilord,weth&vs_currencies=usd"
      );
      setPrices(res.data);
      console.log(res.data);
    }, 5000);
    return clearInterval(Interval);
  }, []);
  return (
    <Container className="Pools" id="Pools">
      <Title>
        <span>LORD Pool</span>
      </Title>
      <Pool
        name="PEER"
        stakePrice={prices.unilord ? prices.unilord.usd : 0}
        rewardPrice={prices.weth ? prices.weth.usd : 0}
        web3={web3}
        account={account}
        connectWallet={connectWallet}
        pool={pools ? pools["PEER"] : undefined}
      />
      <Pool
        name="PEER-LP"
        stakePrice={prices.unilord ? prices.unilord.usd * 614 : 0}
        rewardPrice={prices.weth ? prices.weth.usd : 0}
        web3={web3}
        account={account}
        connectWallet={connectWallet}
        pool={pools ? pools["PEERLP"] : undefined}
      />
    </Container>
  );
}
const Title = styled.div`
  display: flex;
  margin-top: 20vh;
  margin-bottom: 80px;
  margin-left: calc(30vw + 100px);
  span {
    width: 198px;
    height: 45px;
    font-family: Times New Roman;
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.18;
    text-align: center;
    color: #ffffff;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  min-width: 1280px;
  height: 800px;
  min-height: 480px;
  flex-direction: column;
`;
export default Pools;
