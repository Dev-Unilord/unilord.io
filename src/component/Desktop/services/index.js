import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";

const timeState = atom({
  key: "timeState",
  default: {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  },
});
const P = (number) => {
  return number.toString().padStart(2, "0");
};
function Services({ setType, display, setDisplay }) {
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
        s: 0,
      });
    } else {
      setTime({
        d,
        h,
        m,
        s,
      });
    }
  };

  useEffect(() => {
    const timerInstance = setInterval(DdayTimer, 1000);
    return () => {
      clearInterval(timerInstance);
    };
  }, [time]);

  return (
    <Container className="Services" id="Services">
      <Content>
        <Card
          onClick={() => {
            setType("pool");
            setDisplay(!display);
          }}
        >
          <span>LORD POOL</span>
          <img className="pool" src="./images/LORD-POOL.png" />
          <Button
            onClick={() => {
              document.location.href = "https://finance.unilord.io";
            }}
          >
            <span>More</span>
          </Button>
        </Card>
        <Card
          onClick={() => {
            setType("swap");
            setDisplay(!display);
          }}
        >
          <span>LORD SWAP</span>
          <img className="swap" src="./images/LORD-SWAP.png" />
          <Button
            onClick={() => {
              document.location.href = "https://finance.unilord.io/#Swap";
            }}
          >
            <span>More</span>
          </Button>
        </Card>
        <Card
          onClick={() => {
            setType("finance");
            setDisplay(!display);
          }}
        >
          <span>LORD FINANCE</span>
          <img className="finance" src="./images/LORD-FINANCE.png" />
          <Button>
            <span>More</span>
          </Button>
        </Card>
      </Content>
      <Content className="column">
        <img src="./images/logo.svg" />
        <span className="title">UNILORD</span>
        <span className="text">Let's Start with Deposit Product</span>
        <span className="countdown">{`${P(time.d)} : ${P(time.h)} : ${P(
          P(time.m)
        )} : ${P(time.s)}`}</span>
        <Line />
        <ButtonFinance
          onClick={() => (window.location = "https://finance.unilord.io")}
        >
          <span>LORD FINANCE</span>
        </ButtonFinance>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 1280px;
  height: 200vh;
  min-height: 480px;
  .column {
    flex-direction: column;
    img {
      width: 150px;
      height: 150px;
      margin: auto auto;
      margin-top: 0;
    }
    .title {
      margin: auto auto;
      margin-top: 0;
      font-family: Times New Roman;
      font-size: 30px;
      font-weight: bold;
      line-height: 41px;
      text-align: center;
      color: #ffffff;
    }
    .text {
      margin: auto auto;
      margin-top: 0;
      font-family: Times New Roman;
      font-size: 20px;
      line-height: 27px;
      color: #ffffff;
    }
    .countdown {
      margin: auto auto;
      margin-top: 20px;
      font-family: Times New Roman;
      font-size: 50px;
      font-weight: bold;
      line-height: 68px;
      color: #ffffff;
    }
  }
`;

const Content = styled.div`
  display: flex;
  width: 760px;
  height: 500px;
  margin: auto auto;
  margin-left: 30vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62px;
  margin-left: 66px;
  width: 250px;
  height: 320px;
  span {
    margin: auto auto;
    margin-top: 0;
    font-family: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
  .pool {
    margin: auto auto;
    width: 244px;
    height: 149px;
  }
  .swap {
    margin: auto auto;
    width: 123px;
    height: 194px;
  }
  .finance {
    margin: auto auto;
    width: 272px;
    height: 166px;
  }
`;
const Button = styled.div`
  cursor: pointer;
  display: flex;
  margin: auto auto;
  margin-bottom: 0;
  width: 210px;
  height: 30px;
  object-fit: contain;
  box-shadow: 0 0 10px 0 #ffffff;
  border: solid 1px #ffffff;
  span {
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;
const Line = styled.div`
  margin: auto auto;
  margin-top: 0;
  width: 714px;
  height: 2px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;
const ButtonFinance = styled.div`
  display: flex;
  margin: auto auto;
  margin-top: 0;
  width: 410px;
  height: 64px;
  object-fit: contain;
  box-shadow: 0 0 10px 0 #ffffff;
  border: solid 2px #ffffff;
  span {
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
`;

export default Services;
