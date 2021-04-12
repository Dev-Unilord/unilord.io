import styled from "styled-components";

function Home() {
  return (
    <Container className="Home" id="Home">
      <Content>
        <img src="./images/logo.svg" />
        <span className="title">UNILORD</span>
        <span className="text">
          A decentalized, reliable and sustainable De-Fi made for a digital
          economy.
        </span>
        <Btn onClick={() => (window.location = "https://finance.unilord.io")}>
          <span>LORD FINANCE</span>
        </Btn>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-image: url("./images/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-width: 1280px;
  height: 100vh;
  min-height: 480px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  height: 500px;
  margin: auto auto;
  margin-left: 33vw;

  img {
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }
  .title {
    margin: 0 auto;
    margin-top: 34px;
    font-family: NotoSansMyanmar;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  }
  .text {
    margin-top: 12px;
    font-family: Times New Roman;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
`;
const Btn = styled.div`
  display: flex;
  margin: auto auto;
  width: 410px;
  height: 64px;
  object-fit: contain;
  box-shadow: 0 0 10px 0 #ffffff;
  border: solid 2px #ffffff;
  span {
    width: 236px;
    height: 41px;
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;

export default Home;
