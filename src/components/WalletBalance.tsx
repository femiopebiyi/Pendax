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
    const [usdValue, setUsdValue] = useState<number | null>(null);

    function changeBalVisibility() {
        setBalanceVisibility(!balanceVisibility);
    }

    useEffect(() => {
        const fetchBalance = async () => {
            if (!publicKey) return;

            try {
                // Get wallet balance in lamports
                const lamports = await connection.getBalance(publicKey);

                // Convert lamports to SOL
                const sol = lamports / LAMPORTS_PER_SOL;

                // Log SOL balance with full precision
                console.log("Wallet SOL balance:", sol.toFixed(9));

                // Fetch SOL price in USD
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
                );
                const data = await res.json();
                const price = data.solana.usd;

                // Calculate USD balance
                setUsdValue(sol * price);
            } catch (err) {
                console.error("Failed to fetch balance or price:", err);
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
                        <p>
                            {usdValue !== null
                                ? `$${usdValue.toLocaleString(undefined, {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                  })}`
                                : "Loading..."}
                        </p>
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
