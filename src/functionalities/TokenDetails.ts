import usdtIcon from "../assets/icons/usdtIcon.svg"
import usdcIcon from "../assets/icons/usdcIcon.svg"
import ethIcon from "../assets/icons/ethIcon.svg"
import solIcon from "../assets/icons/solIcon.svg"

 export interface Token {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  balance: number;
  value: string; // USD equivalent or any fiat
}

export const tokens: Token[] = [
  {
    id: 1,
    name: "Tether",
    symbol: "USDT",
    icon: usdtIcon,
    balance: 230,
    value: "$230.1",
  },
  {
    id: 2,
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon,
    balance: 230,
    value: "$230.1",
  },
  {
    id: 3,
    name: "Ethereum",
    symbol: "ETH",
    icon: ethIcon,
    balance: 0.001,
    value: "$4.01",
  },
  {
    id: 4,
    name: "Solana",
    symbol: "SOL",
    icon: solIcon,
    balance: 2,
    value: "$260.1",
  },
];

