import { CHAIN_ID, IPSCHAIN_CHAIN_ID } from "config"
import { AddEthereumChainParameter } from "@3rdweb/hooks"

// Chains & Icons -> https://github.com/ethereum-lists/chains/tree/master/_data

interface t {
  [key: number]: AddEthereumChainParameter
}

export const addNetowrkMetadata: t = {
  [IPSCHAIN_CHAIN_ID]: {
    chainId: `0x${CHAIN_ID.toString(16)}`,
    chainName: "IPSChain",
    nativeCurrency: {
      name: "IPSChain Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://test:test@ipschain.ipsprotocol.xyz"],
    blockExplorerUrls: ["https://explorer.ipsprotocol.xyz"],
    iconUrls: [""]
  }
}

export const networkMetadata = {}
