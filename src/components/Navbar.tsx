import pendaxIcon from  "../assets/icons/pendaxIcon.svg"
// import pendaxLogo from "../assets/icons/pendaxLogo.png"


export function Navbar(){



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