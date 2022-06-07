module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  await deploy("MyContract", {
    from: deployer,
    args: ["Hello"],
    log: true,
  })
}
