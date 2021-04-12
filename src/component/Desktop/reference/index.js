import styled from "styled-components";

function Reference() {
  return (
    <Container className="Reference" id="Reference">
      <Content>
        <Logos>
          <Logo onClick={() => window.open("https://t.me/Unilord_Chat")}>
            <img src="./images/ic-telegram.svg" className="telegram" />
            <span>Telegram</span>
          </Logo>
          <Logo
            onClick={() => window.open("https://twitter.com/OfficialUnilord")}
          >
            <img src="./images/ic-twitter.svg" className="twitter" />
            <span>Twitter</span>
          </Logo>
          <Logo onClick={() => window.open("https://medium.com/@Unilord")}>
            <img src="./images/ic-medium.svg" className="medium" />
            <span>Medium</span>
          </Logo>
          <Logo onClick={() => window.open("https://github.com/Dev-Unilord")}>
            <img src="./images/ic-github.svg" className="github" />
            <span>github</span>
          </Logo>
          <Logo
            onClick={() =>
              window.open(
                "https://s3.ap-northeast-2.amazonaws.com/unilord.io/Whitepaper/UNILORD_Whitepaper.pdf"
              )
            }
          >
            <img src="./images/ic-whitepaper.svg" className="whitepaper" />
            <span>whitepaper</span>
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
            <span>Listed on Uniswap</span>
          </Logo>
          <Logo onClick={() => window.open("./")}>
            <img src="./images/logo-certik.png" className="certik" />
            <span>Audited by Certik</span>
          </Logo>
          <Logo
            onClick={() =>
              window.open(
                "https://unicrypt.network/amm/uni/token/0x5Dd115EB39A0FC5DA9022e4bbB8e8679cA066A74"
              )
            }
          >
            <img src="./images/logo-unicrypt.png" className="unicrypt" />
            <span>Locked in Unicrypt</span>
          </Logo>
        </Logos>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 1280px;
  height: 100vh;
  min-height: 480px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 710px;
  height: 660px;
  margin: auto auto;
  margin-left: 33vw;
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
    cursor: pointer;
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
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 190px;
  margin: auto auto;
  cursor: pointer;
  span {
    margin: auto auto;
    margin-top: 25px;
    margin-bottom: 0px;
    white-space: nowrap;
    font-family: Times New Roman;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
  .telegram {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 58px;
  }
  .twitter {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 57px;
  }
  .medium {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 56px;
  }
  .github {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 69px;
  }
  .whitepaper {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 71px;
  }
  .uniswap {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 71px;
  }
  .certik {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 71px;
  }
  .unicrypt {
    margin: auto auto;
    margin-bottom: 0px;
    width: 70px;
    height: 71px;
  }
`;
const Line = styled.div`
  width: 710px;
  height: 2px;
  margin-top: 47px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;

export default Reference;
