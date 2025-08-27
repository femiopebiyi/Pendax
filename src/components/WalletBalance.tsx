import eye_slash from "../assets/icons/eyeslash.svg"
import arrowRight from "../assets/icons/arrow_right.svg"
import { useState, useEffect } from "react"
import eye_open from "../assets/icons/eyeIcon.svg"
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

export function WalletBalance() {
    const { connected, publicKey } = useWallet();
    const { connection } = useConnection();

    const [balanceVisibility, setBalanceVisibility] = useState(true);
    const [usdValue, setUsdValue] = useState<number | null>(null); // USD balance

    function changeBalVisibility() {
        setBalanceVisibility(!balanceVisibility);
    }

    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                try {
                    const lamports = await connection.getBalance(publicKey);
                    const sol = lamports / LAMPORTS_PER_SOL;

                    // fetch SOL price in USD
                    const res = await fetch(
                        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
                    );
                    const data = await res.json();
                    const price = data.solana.usd;

                    setUsdValue(parseFloat((sol * price).toFixed(2)));
                } catch (err) {
                    console.error("Failed to fetch balance or price:", err);
                }
            }
        };

        if (connected) {
            fetchBalance();
        }
    }, [connected, publicKey, connection]);

    return (
        <div className="walletBal">
            <div className="balance_sec">
                <p>
                    Wallet Balance &nbsp;&nbsp;
                    {balanceVisibility ? (
                        <img src={eye_open} alt="Hide Balance" onClick={changeBalVisibility} />
                    ) : (
                        <img src={eye_slash} alt="Show Balance" onClick={changeBalVisibility} />
                    )}
                </p>
                {connected ? (
                    balanceVisibility ? (
                        <p>{usdValue !== null ? `$${usdValue}` : "Loading..."}</p>
                    ) : (
                        <p>****</p>
                    )
                ) : (
                    <p>****</p>
                )}
            </div>
            <div className="history">
                <p>
                    Transaction History &nbsp;&nbsp;
                    <img src={arrowRight} alt="" />
                </p>
                <button className="pay">Pay Bills</button>
            </div>
        </div>
    );
}
