const WTC_TOKEN_ADDRESS = "0x394b57F4a40ff31530d66f904e1Db2C6516c018F";
const WTC_PRESALE_ADDRESS = "0x94366D01e9496220dAC8BF81F66cBd1464fB1630";
const PRESALE_ABI = [
  "function buy() payable",
  "function getCurrentRate() view returns (uint256)",
  "function estimateTokens(uint256 polAmount) view returns (uint256)",
  "function totalSold() view returns (uint256)",
  "function totalRaised() view returns (uint256)",
  "function remainingTokens() view returns (uint256)",
  "function currentStage() view returns (uint256)",
  "function hasStarted() view returns (bool)",
  "function paused() view returns (bool)"
];
const tx = await signer.sendTransaction({
  to: PRESALE_RECEIVER,
  value: ethers.parseEther(polAmt),
});
const presale = new ethers.Contract(
  WTC_PRESALE_ADDRESS,
  PRESALE_ABI,
  signer
);

const tx = await presale.buy({
  value: ethers.parseEther(polAmt)
});

