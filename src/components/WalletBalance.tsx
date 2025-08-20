import eye_slash from "../assets/icons/eyeslash.svg"
import arrowRight from "../assets/icons/arrow_right.svg"
import { useContext, useState } from "react"
import eye_open from "../assets/icons/eyeIcon.svg"
import { UIContext } from "../context/WalletConnectContext"

export function WalletBalance(){

    let [balanceVisibility, setBalanceVisibility] = useState(true)

    function changeBalVisibility(){
        setBalanceVisibility(!balanceVisibility)
    }
    const { walletConnected, connectWallet } = useContext(UIContext)

    return <div className="walletBal">
            <div className="balance_sec">
                <p>
  Wallet Balance &nbsp;&nbsp;
  {balanceVisibility ? (
    <img src={eye_open} alt="Hide Balance" onClick={changeBalVisibility} />
  ) : (
    <img src={eye_slash} alt="Show Balance" onClick={changeBalVisibility} />
  )}
</p>
                {walletConnected ? (
                  <p>{balanceVisibility ? "$1287.45" : "****"}</p>
                ):(
                  <p>blank</p>
                ) }
            </div>
            <div className="history">
                <p>Transaction History &nbsp;&nbsp;<img src={arrowRight} alt="" /></p>
                <button className="pay">Pay Bills</button>
            </div>
    </div>
}