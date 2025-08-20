import pendaxIcon from  "../assets/icons/pendaxIcon.svg"
import { UIContext } from "../context/WalletConnectContext";
import { useContext } from "react";
// import pendaxLogo from "../assets/icons/pendaxLogo.png
import profile from "../assets/icons/Ellipse.png";
import brightnessIcon from "../assets/icons/brightnessIcon.svg"
import messageIcon from "../assets/icons/messageIcon.svg"
import bellIcon from "../assets/icons/bellIcon.svg"

export function Navbar(){

    

     
   const { walletConnected, connectWallet } = useContext(UIContext)



    return <div className="navbar" >
        <div className="con">
            <img src={walletConnected ? profile : pendaxIcon} alt="pendaxIcon" className="pendaxIcon"/>
            {walletConnected ? (
                <h2 className="addy">Hi, 0xd2...f3d</h2>
            ):(
                <h2 className="pendax">Pendax</h2>
            )}
        </div>

        
        
        {walletConnected ? (
            <div className="smallIcons">
            <img src={brightnessIcon} alt="" />
            <img src={messageIcon} alt="" />
            <img src={bellIcon} alt="" />
        </div>
        ):(
            <button className="connnect" onClick={connectWallet}>Connect Wallet</button>
        )}
        

        
        
    </div>
}