import sendIcon from "../assets/icons/sendIcon.svg"
import billsIcon from "../assets/icons/wallet.svg"
import p2pIcon from "../assets/icons/p2p.svg"
import forumIcon from "../assets/icons/forum.svg"
import rewardIcon from "../assets/icons/reward.svg"



export default function Footer() {



    return <div className="footer">
        <div className="nav-btn">
            <img src={sendIcon} alt="" />
            <h2 className="send-txt">Send</h2>
        </div>

        <div className="nav-btn">
            <img src={billsIcon} alt="" />
            <h2>Bills</h2>
        </div>

        <div className="nav-btn">
            <img src={p2pIcon} alt="" />
            <h2>P2P</h2>
        </div>

        <div className="nav-btn">
            <img src={forumIcon} alt="" />
            <h2>Forum</h2>
        </div>

        <div className="nav-btn">
            <img src={rewardIcon} alt="" />
            <h2>Reward</h2>
        </div>
    </div>
}