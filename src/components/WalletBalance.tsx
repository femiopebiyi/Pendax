import eye_slash from "../assets/icons/eyeslash.svg"
import arrowRight from "../assets/icons/arrow_right.svg"

export function WalletBalance(){


    return <div className="walletBal">
            <div className="balance_sec">
                <p>Wallet Balance &nbsp;&nbsp;<img src={eye_slash} alt="" /></p>
                <p>****</p>
            </div>
            <div className="history">
                <p>Transaction History &nbsp;&nbsp;<img src={arrowRight} alt="" /></p>
                <button className="pay">Send</button>
            </div>
    </div>
}