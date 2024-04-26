export const IPSCHAIN_CHAIN_ID = 8337
export const MUMBAI_CHAIN_ID = 80001
export const LOCALHOST_CHAIN_ID = 1337
export const BANK_ADDRESS = process.env.NEXT_PUBLIC_BANK_ADDRESS
export const DEFI_BANK_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/albertocruzluis/defi-bank-graph"

export const CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID as string) || IPSCHAIN_CHAIN_ID
