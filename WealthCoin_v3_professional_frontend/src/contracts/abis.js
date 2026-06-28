export const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address account) view returns (uint256)',
  'function allowance(address owner,address spender) view returns (uint256)',
  'function approve(address spender,uint256 amount) returns (bool)',
  'function transfer(address to,uint256 amount) returns (bool)'
];

export const PRESALE_ABI = [
  'function buy() payable',
  'function getCurrentRate() view returns (uint256)',
  'function estimateTokens(uint256 polAmount) view returns (uint256)',
  'function totalSold() view returns (uint256)',
  'function totalRaised() view returns (uint256)',
  'function remainingTokens() view returns (uint256)',
  'function currentStage() view returns (uint256)',
  'function currentStageRemaining() view returns (uint256)',
  'function hasStarted() view returns (bool)',
  'function paused() view returns (bool)',
  'function startTime() view returns (uint256)',
  'function PRESALE_CAP() view returns (uint256)',
  'function treasury() view returns (address)',
  'event TokensPurchased(address indexed buyer,uint256 polAmount,uint256 wtcAmount,uint256 stage)'
];

export const STAKING_ABI = [
  'function stake(uint256 amount)',
  'function unstake(uint256 amount)',
  'function claimRewards()',
  'function stakedBalance(address user) view returns (uint256)',
  'function pendingRewards(address user) view returns (uint256)',
  'function totalStaked() view returns (uint256)',
  'function rewardRatePerSecond() view returns (uint256)'
];
