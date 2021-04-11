const contracts = {
  //Mainnet
  1: {
    ERC: { PEER: "0x1", PEERLP: "0x1", USDT: "0x1" },
    POOL: { PEER: "0x1", PEERLP: "0x1" }
  },
  //Ropsten
  3: {
    ERC: {
      PEER: "0x29854184bAa20428219180b2c79986febE556AA1",
      PEERLP: "0x46e3909253bb715fdc324efeb8c52df663eca22e",
      USDT: "0x35156Ecb3f7d96575693Ae400Bca6e17Aa934Bf6"
    },
    POOL: { PEER: "0x8611629bab57955196B9E0196Cf31F909838A2ED", PEERLP: "0x1" }
  }
};

export default contracts;
