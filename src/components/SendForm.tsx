import nairaIcon from "../assets/icons/nairaIcon.svg"
import arrowDown from "../assets/icons/arrowDown.svg"

export function SendForm(){


    return <div className="sendform">
        <div className="amount">
            <div className="currency-section">
                <span className="currency-text">NGN</span>
                <span className="naira-icon"><img src={nairaIcon} alt="" /></span>
                <span className="dropdown"><img src={arrowDown} alt="" /></span>
            </div>
            <input
            type="number"
            placeholder="Enter amount"
            className="amount-input"
            min={0}
            />

        </div>


        <div className="accountNo">
            <input placeholder="Enter Account Number"/>
        </div>
        <div className="selBank bank-select-container">
            <select className="bank-select">
        <option value="">Select bank</option>
        <option value="access">Access Bank</option>
        <option value="gtbank">GTBank</option>
        <option value="uba">UBA</option>
        <option value="zenith">Zenith Bank</option>
      </select>
        <img src={arrowDown} alt="" />
        </div>


        <div className="selToken">
                <select className="select-token">
                    <option value="">Select token</option>
                    <option value="btc">Bitcoin (BTC)</option>
                    <option value="eth">Ethereum (ETH)</option>
                    <option value="bnb">Binance Coin (BNB)</option>
                    <option value="ada">Cardano (ADA)</option>
                </select>
                <img src={arrowDown} alt="femi" />   
        </div>


        <div className="send"><button className="send-btn">Connect Wallet</button></div>
    </div>
}