export interface networkConfigItem {
  ethUsdPriceFeed?: string
  blockConfirmations?: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

const networkConfig: networkConfigInfo = {
  rinkeby: {
    ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
  },
  polygon: {
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
}

const developmentChains: Array<string> = ["hardhat", "localhost"]

const DECIMALS = "18"
const INITIAL_PRICE = "2000000000000000000000" // 2000

export { networkConfig, developmentChains, DECIMALS, INITIAL_PRICE }
