import { developmentChains, networkConfig } from "../helper-hardhat-config"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import verify from "../utils/verify"

const deployFundMe: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  // @ts-ignore
  const { deployments, getNamedAccounts, network } = hre
  const { deploy, log, get } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId: number = network.config.chainId!

  let ethUsdPriceFeedAddress: string
  if (chainId == 31337) {
    const ethUsdAggregator = await get("MockV3Aggregator")
    ethUsdPriceFeedAddress = ethUsdAggregator.address
  } else {
    ethUsdPriceFeedAddress = networkConfig[network.name].ethUsdPriceFeed!
  }

  const args = [ethUsdPriceFeedAddress]
  log("Deploying FundMe and waiting for confirmations...")
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: args,
    log: true,
  })

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(fundMe.address, args)
  }
  log("-----------------------------------------")
}

export default deployFundMe

deployFundMe.tags = ["all", "fundme"]
