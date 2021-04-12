import styled from "styled-components";

function Reference() {
  return (
    <Container className="Reference" id="Reference">
      <span className="title">REFERENCE</span>
      <Content>
        <Logos>
          <Logo onClick={() => window.open("https://t.me/Unilord_Chat")}>
            <img src="./images/ic-telegram.svg" className="telegram" />
          </Logo>
          <Logo
            onClick={() => window.open("https://twitter.com/OfficialUnilord")}
          >
            <img src="./images/ic-twitter.svg" className="twitter" />
          </Logo>
          <Logo onClick={() => window.open("https://medium.com/@Unilord")}>
            <img src="./images/ic-medium.svg" className="medium" />
          </Logo>
          <Logo onClick={() => window.open("https://github.com/Dev-Unilord")}>
            <img src="./images/ic-github.svg" className="github" />
          </Logo>
          <Logo
            onClick={() =>
              window.open(
                "https://s3.ap-northeast-2.amazonaws.com/unilord.io/Whitepaper/UNILORD_Whitepaper.pdf"
              )
            }
          >
            <img src="./images/ic-whitepaper.svg" className="whitepaper" />
          </Logo>
        </Logos>
        <Line />
        <span className="title">Contact Team</span>
        <span
          className="email"
          onClick={() => window.open("mailto:marketing@Unilord.io")}
        >
          marketing@Unilord.io
        </span>
        <span
          className="email"
          onClick={() => window.open("mailto:cs@Unilord.io")}
        >
          cs@Unilord.io
        </span>
      </Content>
      <Line />
      <Logos>
        <Logo
          onClick={() =>
            window.open(
              "https://app.uniswap.org/#/swap?inputCurrency=0x5dd115eb39a0fc5da9022e4bbb8e8679ca066a74&outputCurrency=ETH"
            )
          }
        >
          <img src="./images/logo-uniswap.png" className="uniswap" />
        </Logo>
        <Logo onClick={() => window.open("./")}>
          <img src="./images/logo-certik.png" className="certik" />
        </Logo>
        <Logo
          onClick={() =>
            window.open(
              "https://unicrypt.network/amm/uni/token/0x5Dd115EB39A0FC5DA9022e4bbB8e8679cA066A74"
            )
          }
        >
          <img src="./images/logo-unicrypt.png" className="unicrypt" />
        </Logo>
      </Logos>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  .title {
    margin-top: 100px;
    font-family: Times New Roman;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin: auto auto;
  .title {
    margin-top: 45px;
    margin-bottom: 13px;
    font-family: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
  .email {
    margin-top: 10px;
    font-family: Times New Roman;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
`;
const Logos = styled.div`
  display: flex;
  height: 50px;
  margin-top: 50px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  width: 100vw;
  height: 50px;
  .telegram {
    margin: auto auto;
    width: 35px;
    height: 29px;
  }
  .twitter {
    margin: auto auto;
    width: 35px;
    height: 28.4px;
  }
  .medium {
    margin: auto auto;
    width: 35px;
    height: 27.8px;
  }
  .github {
    margin: auto auto;
    width: 35px;
    height: 34.1px;
  }
  .whitepaper {
    margin: auto auto;
    width: 35px;
    height: 35.6px;
  }
  .uniswap {
    margin: auto auto;
    width: 35px;
    height: 40.3px;
  }
  .certik {
    margin: auto auto;
    width: 35px;
    height: 38.2px;
  }
  .unicrypt {
    margin: auto auto;
    width: 35px;
    height: 35px;
  }
`;
const Line = styled.div`
  margin: auto auto;
  margin-top: 53px;
  width: 90vw;
  height: 2px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;

export default Reference;
