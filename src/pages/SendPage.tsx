import Footer from "../components/Footer";
import { SendForm } from "../components/SendForm";
import { WalletBalance } from "../components/WalletBalance";


export function SendPage(){

    return <div className="sendPage">
        <WalletBalance/>

        <h3 className="transfer_text">Transfer to Bank with Crypto</h3>

        <SendForm/>

        {/* <Footer/> */}
    </div>
}

