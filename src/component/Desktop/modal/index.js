import styled from "styled-components";

function Modal({ type, display, setDisplay }) {
  let image, text;
  switch (type) {
    case "pool":
      image = "./images/modal_pool.png";
      text =
        "Decentralized way of earning interest. Lord Pool offers full range of deposit services";
      break;
    case "swap":
      image = "./images/modal_swap.png";
      text = "Gateway from Peer to Lord to leverage your interest";
      break;
    case "finance":
      image = "./images/modal_finance.png";
      text =
        "Lend your Lord to earn Interest Dual incentives both on lending and borrowing";
      break;
  }

  return (
    <Container
      style={{ display: display ? "flex" : "none" }}
      onClick={() => setDisplay(!display)}
    >
      <Content>
        <img
          onClick={() => setDisplay(!display)}
          className="cross"
          src="./images/cross.svg"
        />
        <img className="image" src={image} />
        <span className="text">{text}</span>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  margin-left: 30vw;
  display: flex;
  width: 760px;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  width: 568px;
  height: 335px;
  object-fit: contain;
  box-shadow: 0 0 20px 0 #ffffff;
  background-color: #000000;

  .cross {
    width: 20px;
    height: 20px;
    margin: auto auto;
    margin-top: 20px;
    margin-right: 20px;
  }
  .image {
    width: 400px;
    height: 250px;
    margin: auto auto;
    object-fit: contain;
  }
  .text {
    margin: auto auto;
    width: 424px;
    height: 67px;
    font-family: Times New Roman;
    font-size: 20px;
    font-style: italic;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

export default Modal;
