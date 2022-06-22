import { run } from "hardhat"

const verify = async (contactAddress: string, args: Array<string>) => {
  console.log("verifying contract")
  try {
    run("verify:verify", {
      address: contactAddress,
      constructorArguments: args,
    })
  } catch (error: any) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!")
    } else {
      console.log(error)
    }
  }
}

export default verify
