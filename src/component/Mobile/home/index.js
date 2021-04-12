import styled from "styled-components";

function Home() {
  return (
    <Container className="Home" id="Home">
      <Content>
        <img src="./images/logo.svg" />
        <span className="title">UNILORD</span>
        <span className="text">
          A decentalized, reliable and sustainable De-Fi <br />
          made for a digital economy.
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
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;

  img {
    margin: 0 auto;
    width: 75px;
    height: 75px;
  }
  .title {
    margin: 0 auto;
    margin-top: 34px;
    font-family: NotoSansMyanmar;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  }
  .text {
    margin-top: 12px;
    font-family: Times New Roman;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }
`;

const Btn = styled.div`
  display: flex;
  margin: auto auto;
  margin-top: 50px;
  width: 274px;
  height: 42px;
  object-fit: contain;
  box-shadow: 0 0 10px 0 #ffffff;
  border: solid 2px #ffffff;
  span {
    margin: auto auto;
    font-family: Times New Roman;
    width: 156px;
    height: 27px;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;
export default Home;
