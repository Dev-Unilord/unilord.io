import styled from "styled-components";

function Gnb({ display, setDisplay, account, connectWallet }) {
  function Scroll(section) {
    window.location = "#" + section;
    setDisplay(!display);
  }

  return (
    <Container className="Gnb" style={{ display: display ? "flex" : "none" }}>
      <img
        onClick={() => setDisplay(!display)}
        className="cross"
        src="./images/cross.svg"
      />
      <Left>
        <div />
        <img src="./images/logo.svg" />
      </Left>
      <Content>
        <Logo onClick={() => Scroll("Home")}>
          <span>UNILORD</span>
        </Logo>
        <ConnectWallet onClick={() => connectWallet()}>
          <span>
            {account
              ? account.substring(0, 8) + "..." + account.substring(36, 42)
              : "Connect wallet"}
          </span>
        </ConnectWallet>
        <Nav>
          <div onClick={() => Scroll("Home")}>
            <span>Lord Pools</span>
          </div>
          <div onClick={() => Scroll("About")}>
            <span>ABOUT</span>
          </div>
          <div>
            <span>SERVICES</span>
          </div>
          <div>
            <span>REFERENCE</span>
          </div>
          <div>
            <span>DISCLAIMER</span>
          </div>
        </Nav>
      </Content>
    </Container>
  );
}
const ConnectWallet = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: -5vw;
  width: 45vw;
  height: 30px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.6);
  background-color: #000000;
  span {
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 15px;
    font-size: 15px;
    font-style: italic;
    line-height: 1.13;
    text-align: center;
    color: #29a7ff;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000000;
  z-index: 100000;
  .cross {
    position: fixed;
    left: calc(100vw - 40px);
    top: 20px;
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  margin-right: 0px;
  width: 45vw;
  height: 100vh;
`;
const Left = styled.div`
  display: flex;
  width: 55vw;
  img {
    position: fixed;
    left: calc(45vw - 25px);
    top: 10vh;
    width: 50px;
    height: 50px;
  }
  div {
    position: fixed;
    left: 45vw;
    width: 1px;
    height: 100vh;
    object-fit: contain;
    background-color: #ffffff;
  }
`;
const Logo = styled.div`
  margin-top: 10vh;
  display: flex;
  span {
    margin: auto auto;
    margin-left: 0px;
    font-family: NotoNastaliqUrdu;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #ffffff;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  div {
    display: flex;
    margin-top: 37px;
    div {
      display: none;
    }
    span {
      font-family: Times New Roman;
      font-size: 15px;
      text-align: left;
      color: #ffffff;
    }
  }
  .choosen {
    display: flex;
    div {
      display: block;
    }
    span {
      margin-left: 0px;
      font-weight: bold;
    }
  }
`;
const NLine = styled.div`
  width: 1px;
  height: 760px;
  object-fit: contain;
  background-color: #ffffff;
`;

export default Gnb;
