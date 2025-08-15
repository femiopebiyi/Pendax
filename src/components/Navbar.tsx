import pendaxIcon from  "../assets/icons/pendaxIcon.svg"
import { verifyBankAccount } from "../functionalities/getBankDetails";

// import pendaxLogo from "../assets/icons/pendaxLogo.png


 

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
   
     




    return <div className="navbar">
        <div className="con">
            <img src={pendaxIcon} alt="pendaxIcon" className="pendaxIcon"/>
            <h2>Pendax</h2>
        </div>

        {/* <div className="smallIcons">
            <img src={brighnessIcon} alt="" />
            <img src={messageIcon} alt="" />
            <img src={bellIcon} alt="" />
        </div> */}

        <button className="connnect">Connect Wallet</button>
    </div>
}