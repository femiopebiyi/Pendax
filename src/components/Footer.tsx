import sendIcon from "../assets/icons/sendIcon.svg"
import billsIcon from "../assets/icons/wallet.svg"
import rewardIcon from "../assets/icons/reward.svg"
import limitIcon from "../assets/icons/limit.svg"

import sendIconInactive from "../assets/icons/sendInactive.svg"
import billsIconInactive from "../assets/icons/billsactive.svg"
import limitIconactive from "../assets/icons/limitactive.svg"
import rewardIconactive from "../assets/icons/rewardsActive.svg"

import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <div className="footer">
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
            >
                {({ isActive }) => (
                    <>
                        <img src={isActive ? sendIcon : sendIconInactive} alt="Send" />
                        <h2 className={isActive ? "active-text" : ""}>Send</h2>
                    </>
                )}
            </NavLink>

            <NavLink 
                to="/limit" 
                className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
            >
                {({ isActive }) => (
                    <>
                        <img src={isActive ? limitIconactive : limitIcon} alt="Limit" />
                        <h2 className={isActive ? "active-text" : ""}>Limit</h2>
                    </>
                )}
            </NavLink>

            <NavLink 
                to="/bills" 
                className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
            >
                {({ isActive }) => (
                    <>
                        <img src={isActive ? billsIconInactive : billsIcon} alt="Bills" />
                        <h2 className={isActive ? "active-text" : ""}>Bills</h2>
                    </>
                )}
            </NavLink>

            <NavLink 
                to="/reward" 
                className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
            >
                {({ isActive }) => (
                    <>
                        <img src={isActive ? rewardIconactive : rewardIcon} alt="Reward" />
                        <h2 className={isActive ? "active-text" : ""}>Reward</h2>
                    </>
                )}
            </NavLink>
        </div>
    )
}
