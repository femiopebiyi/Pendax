import eye_slash from "../assets/icons/eyeslash.svg"
import arrowRight from "../assets/icons/arrow_right.svg"
import { useState } from "react"
import eye_open from "../assets/icons/eyeIcon.svg"

export function WalletBalance(){

    let [balanceVisibility, setBalanceVisibility] = useState(true)

    function changeBalVisibility(){
        setBalanceVisibility(!balanceVisibility)
    }


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
                <p>{balanceVisibility ? "$1287.45" : "****"}</p>
            </div>
            <div className="history">
                <p>Transaction History &nbsp;&nbsp;<img src={arrowRight} alt="" /></p>
                <button className="pay">Pay Bills</button>
            </div>
    </div>
}