import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import { fromWei, toWei, toBN } from "web3-utils";
import { resultingClientExists } from "workbox-core/_private";
import CountUp from "react-countup";

export const ERC20_ABI = require("./../../../lib/abis/ERC20ABI.json");
export const POOL_ABI = require("./../../../lib/abis/poolABI.json");

const timeState = atom({
  key: "timeState",
  default: {
    d: 0,
    h: 0,
    m: 0,
    s: 0
  }
});
const P = number => {
  return number.toString().padStart(2, "0");
};
function n(x) {
  x = fromWei(String(x), "ether");
  let n = x.split(".");
  x = n[0] + (n.length == 2 ? "." + n[1].substr(0, 2) : ".00");
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function StartInterval(callback, t) {
  callback();
  return setInterval(callback, t);
}
function Pools({ name, web3, account, connectWallet, pool }) {
  const [time, setTime] = useRecoilState(timeState);

  const DdayTimer = () => {
    var dday = new Date("April 14, 2021 23:00:00").getTime();
    var nowday = new Date();
    nowday = nowday.getTime();
    var distance = dday - nowday;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));

    var h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    var m = Math.floor((distance / (1000 * 60)) % 60);
    var s = Math.floor((distance / 1000) % 60);
    if (distance <= 0) {
      setTime({
        d: 0,
        h: 0,
        m: 0,
        s: 0
      });
    } else {
      setTime({
        d,
        h,
        m,
        s
      });
    }
  };

  useEffect(() => {
    const timerInstance = setInterval(DdayTimer, 1000);
    return () => {
      clearInterval(timerInstance);
    };
  }, [time]);

  // useEffect(() => {
  //   const timerInstance = setInterval(DdayTimer, 1000);
  //   return () => {
  //     clearInterval(timerInstance);
  //   };
  // }, [time]);
  const [isOpen1, setIsOpen1] = useState(false);
  const [plAPY, setPlAPY] = useState(30);
  const [plCount, setPlCount] = useState("00.00.00.00");
  const [plTL, setPlTL] = useState(0);
  const [plTVL, setPlTVL] = useState(0);
  const [plLocked, setPlLocked] = useState(0);
  const [plMined, setPlMined] = useState(0);
  const [plBalance, setPlBalance] = useState(0);
  const [plAmount, setPlAmount] = useState("0");
  const [plIsApproved, setPlIsApproved] = useState(false);
  const [plDate, setPlDate] = useState({ from: 0, to: 0 });
  const [stakeToken, setStakeToken] = useState(undefined);
  const [rewardToken, setRewardToken] = useState(undefined);
  const [PoolInstance, setPoolInstance] = useState(undefined);
  const [StakeTokenInstance, setStakeTokenInstance] = useState(undefined);
  const [RewardTokenInstance, setRewardTokenInstance] = useState(undefined);

  const Approve = () => {
    if (!StakeTokenInstance || plIsApproved) return;
    StakeTokenInstance.methods
      .approve(pool, toWei("9999999999999999999", "ether"))
      .send({ from: account });
  };
  const GetReward = () => {
    if (!PoolInstance) return;
    PoolInstance.methods.getReward().send({ from: account });
  };
  const Stake = () => {
    if (!PoolInstance) return;
    PoolInstance.methods
      .stake(toWei(plAmount, "ether"))
      .send({ from: account });
    setPlAmount(0);
  };
  const SetPercent = x => {
    setPlAmount(((n(plBalance).replaceAll(",", "") / 100) * x).toString());
  };
  const createInstance = () => {
    setPoolInstance(new web3.eth.Contract(POOL_ABI, pool));
  };
  const createTokenInstance = () => {
    setStakeTokenInstance(new web3.eth.Contract(ERC20_ABI, stakeToken));
    setRewardTokenInstance(new web3.eth.Contract(ERC20_ABI, rewardToken));
  };

  useEffect(() => {
    if (!web3) return;
    createInstance();
  }, [pool]);

  useEffect(() => {
    if (!web3) return;
    createTokenInstance();
  }, [rewardToken]);

  useEffect(async () => {
    if (!PoolInstance) return;
    setStakeToken(await PoolInstance.methods.stakeToken.call().call());
    setRewardToken(await PoolInstance.methods.rewardToken.call().call());
    const Interval = StartInterval(async () => {
      setPlLocked(await PoolInstance.methods.balanceOf(account).call());
      setPlMined(await PoolInstance.methods.earned(account).call());
      setPlTL(await PoolInstance.methods.totalSupply().call());
      setPlTVL(await PoolInstance.methods.totalSupply().call());
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [PoolInstance]);

  useEffect(async () => {
    if (!StakeTokenInstance || !account) return;
    const Interval = StartInterval(async () => {
      setPlBalance(await StakeTokenInstance.methods.balanceOf(account).call());
      setPlIsApproved(
        (await StakeTokenInstance.methods.allowance(account, pool).call()) > 0
          ? true
          : false
      );
    }, 1000);

    return () => {
      clearInterval(Interval);
    };
  }, [StakeTokenInstance]);

  return (
    <Container className="Pools" id="Pools">
      <Pool>
        <Content className="column">
          <img src="./images/logo-peer.svg" />
          <span className="name">{name}</span>
          <span className="APY">APY: {plAPY}%</span>
          <Line />
          <span className="countdown">{`${P(time.d)}.${P(time.h)}.${P(
            time.m
          )}:${P(time.s)}`}</span>
          <span className="locked">PEER {n(plTL)} PEER</span>
          <span className="lockedValue">TVL ${n(plTVL)} PEER Locked</span>
          <BtnStake
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            <span>Stake</span>
            <img src={`./images/cross-${isOpen1 ? "top" : "bottom"}.svg`} />
          </BtnStake>
        </Content>
        <LineV className={isOpen1 ? "" : "hide"} />
        <Content className={"sub " + (isOpen1 ? "" : "hide")}>
          <div className="amount">
            <span className="text">PEER Locked:</span>
            <span className="value">{n(plLocked)}</span>
            <span className="symbol">PEER</span>
          </div>
          <div className="amount" style={{ marginTop: "10px" }}>
            <span className="text">WETH Mined:</span>
            <span className="value">
              <CountUp
                preserveValue={true}
                end={n(plMined)}
                decimals={2}
                duration={1}
              ></CountUp>
            </span>
            <span className="symbol">WETH</span>
          </div>
          <div className="amount" style={{ marginTop: "25px" }}>
            <span className="text">Balance:</span>
            <span className="value">{n(plBalance)}</span>
            <span className="symbol">PEER</span>
          </div>
          <input
            type="text"
            className="amountStake"
            value={plAmount}
            onChange={e => {
              setPlAmount(e.target.value);
            }}
            placeholder="Enter the amount of stake"
          />
          <div className="selected" style={{ marginTop: "3px" }}>
            <span className="text">Selected:</span>
            <span className="value">{plAmount}</span>
          </div>
          <PercentBtns>
            <div
              onClick={() => {
                SetPercent(25);
              }}
            >
              <span>25%</span>
            </div>
            <div
              onClick={() => {
                SetPercent(50);
              }}
            >
              <span>50%</span>
            </div>
            <div
              onClick={() => {
                SetPercent(75);
              }}
            >
              <span>75%</span>
            </div>
            <div
              onClick={() => {
                SetPercent(100);
              }}
            >
              <span>100%</span>
            </div>
          </PercentBtns>
          <TwoBtns>
            <div
              onClick={() => {
                plIsApproved ? GetReward() : Approve();
              }}
            >
              <span className={account ? "" : "disable"}>
                {plIsApproved ? "Mine" : "Approve"}
              </span>
            </div>
            <div>
              <span className={account ? "disable" : "disable"}>Unstake</span>
            </div>
          </TwoBtns>
          <StakeBtn
            onClick={() => {
              account ? Stake() : connectWallet();
            }}
          >
            <span className={!account || plIsApproved ? "" : "disable"}>
              {account ? "Stake" : "Connect Wallet"}
            </span>
          </StakeBtn>
        </Content>
      </Pool>
    </Container>
  );
}
const LineV = styled.div`
  margin: 0 auto;
  width: 249px;
  height: 1px;
  object-fit: contain;
  background-color: #ffffff;
  .disable {
    display: none;
  }
`;
const Pool = styled.div`
  display: flex;
  margin: auto 0;
  margin-top: 80px;
  width: 100vw;
  object-fit: contain;
  background-color: #000000;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
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
    width: 210px;
    margin: 0 auto;
    margin-top: 40px;
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

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  width: 290px;
  height: 350px;
  flex-direction: column;
`;
const Line = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 134px;
  height: 2px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;
const BtnStake = styled.div`
  display: flex;
  margin: auto auto;
  margin-top: 37px;
  margin-bottom: 22px;
  margin-right: 12px;
  width: 86px;
  height: 22px;
  padding: 4px 17px;
  object-fit: contain;
  border-radius: 20px;
  background-color: #ffffff;
  span {
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    color: #000000;
  }
  img {
    margin: auto auto !important;
    width: 18px !important;
    height: 15px !important;
  }
`;
const PercentBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 210px;
  height: 18px;
  div {
    display: flex;
    width: 48px;
    height: 18px;
    object-fit: contain;
    background-color: #ffffff;
    span {
      margin: auto auto;
      font-family: Times New Roman;
      font-size: 12px;
      line-height: 1.25;
      text-align: left;
      color: #000000;
    }
  }
`;
const TwoBtns = styled.div`
  display: flex;
  margin-top: 20px;
  width: 210px;
  height: 24px;
  justify-content: space-between;
  .disable {
    color: #535353;
  }
  div {
    display: flex;
    width: 100px;
    height: 24px;
    object-fit: contain;
    box-shadow: 0 0 5px 0 #ffffff;
    border: solid 1px #ffffff;
    span {
      margin: auto auto;
      font-family: Times New Roman;
      font-size: 15px;
      font-weight: bold;
      line-height: 1.13;
      text-align: center;
      color: #ffffff;
    }
  }
`;
const StakeBtn = styled.div`
  display: flex;
  margin-top: 10px;
  width: 208px;
  height: 30px;
  object-fit: contain;
  box-shadow: 0 0 5px 0 #ffffff;
  border: solid 1px #ffffff;
  .disable {
    color: #535353;
  }
  span {
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.13;
    text-align: center;
    color: #ffffff;
  }
`;
export default Pools;
