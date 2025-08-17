import pendaxIcon from  "../assets/icons/pendaxIcon.svg"
import { verifyBankAccount } from "../functionalities/getBankDetails";
import { UIContext } from "../assets/context/WalletConnectContext";
import { useContext } from "react";
// import pendaxLogo from "../assets/icons/pendaxLogo.png
import profile from "../assets/icons/Ellipse.png"


 

export function Navbar(){

    
    (async () => {
  try {
    const result = await verifyBankAccount("9066245634", "999992");
    console.log(result.data.account_name);
    console.log(result.data.account_number);
    console.log(result.data.bank_id);
  } catch (error) {
    console.error("Verification failed:", error);
  }
})();
   
     
   const { walletConnected, connectWallet } = useContext(UIContext)



    return <div className="navbar" >
        <div className="con">
            <img src={walletConnected ? profile : pendaxIcon} alt="pendaxIcon" className="pendaxIcon"/>
            <h2 className={walletConnected ? "connected" : ""}>{!walletConnected ? "Pendax" : "Hi, 0xd2...f3d"}</h2>
        </div>

        {/* <div className="smallIcons">
            <img src={brighnessIcon} alt="" />
            <img src={messageIcon} alt="" />
            <img src={bellIcon} alt="" />
        </div> */}

        <button className="connnect" onClick={connectWallet}>{!walletConnected ? "Connect Wallet" : "Connected"}</button>
    </div>
}