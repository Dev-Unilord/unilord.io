import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pool from "./pool";

function Pools({ chainId, web3, account, connectWallet, pools }) {
  return (
    <Container className="Pools" id="Pools">
      <Title>
        <span>LORD Pool ${chainId}</span>
      </Title>
      <Pool
        name="PEER"
        web3={web3}
        account={account}
        connectWallet={connectWallet}
        pool={pools ? pools["PEER"] : undefined}
      />
      <Pool
        name="PEER-LP"
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
  width: 100vw;

  span {
    margin: 0 auto;
    margin-top: 50px;
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
  height: 100vh;
  flex-direction: column;
  .hide {
    display: none;
  }
  .column {
    flex-direction: column;
    img {
      width: 72px;
      height: 72px;
      margin: auto auto;
      margin-top: 0;
      margin-bottom: 0px;
    }
    .name {
      margin: auto auto;
      margin-top: 10px;
      margin-bottom: 0;
      font-family: Times New Roman;
      font-size: 20px;
      font-weight: bold;
      line-height: 1.15;
      font-style: italic;
      text-align: center;
      color: #ffffff;
    }
    .APY {
      margin: auto auto;
      margin-top: 25px;
      margin-bottom: 0;
      font-family: Times New Roman;
      font-size: 20px;
      line-height: 27px;
      color: #ffffff;
    }
    .countdown {
      margin: 0 auto;
      margin-top: 10px;
      font-family: Times New Roman;
      font-size: 12px;
      line-height: 1.25;
      color: #ffffff;
    }
    .locked {
      margin: 0 auto;
      margin-top: 25px;
      width: 200px;
      font-family: Times New Roman;
      font-size: 12px;
      line-height: 1.25px;
      color: #ffffff;
    }
    .lockedValue {
      margin: 0 auto;
      margin-top: 10px;
      width: 200px;
      font-family: Times New Roman;
      font-size: 12px;
      line-height: 1.25px;
      color: #ffffff;
    }
  }

  .sub {
    flex-direction: column;
    height: 250px;
    width: 210px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 10vh;
    font-family: Times New Roman;
    font-size: 12px;
    line-height: 1.25;
    color: #ffffff;
    .amount {
      display: flex;
      width: 210px;
      .text {
        margin-left: 0;
      }
      .value {
        margin-left: auto;
        margin-right: 10px;
      }
      .symbol {
        margin-right: 0;
      }
    }
    .selected {
      display: flex;
      margin-left: auto;
      margin-right: 0px;
      width: 130px;
      .text {
        margin-left: 0;
      }
      .value {
        margin-left: auto;
      }
    }
    .amountStake {
      margin-top: 10px;
      width: 200px;
      height: 30px;
      text-align: right;
      font-size: 12px;
      line-height: 1.25;
      color: #ffffff;
      object-fit: contain;
      padding: 0 10px 0 0;
      background-color: black;
      box-shadow: none;
      border: solid 0.3px #d8d8d8;
    }
  }
`;

export default Pools;
