import pendaxIcon from  "../assets/icons/pendaxIcon.svg"
import brighnessIcon from  "../assets/icons/brightnessIcon.svg"
import bellIcon from  "../assets/icons/bellIcon.svg"
import messageIcon from  "../assets/icons/messageIcon.svg"


export function Navbar(){



    return <div className="navbar">
        <div className="con">
            <img src={pendaxIcon} alt="pendaxIcon" className="pendaxIcon"/>
            <button className="connnect">Connect Wallet</button>
        </div>

        <div className="smallIcons">
            <img src={brighnessIcon} alt="" />
            <img src={messageIcon} alt="" />
            <img src={bellIcon} alt="" />
        </div>
    </div>
}