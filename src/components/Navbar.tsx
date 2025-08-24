import { useState } from "react";
import pendaxIcon from "../assets/icons/pendaxIcon.svg";
import profile from "../assets/icons/Ellipse.png";
import brightnessIcon from "../assets/icons/brightnessIcon.svg";
import messageIcon from "../assets/icons/messageIcon.svg";
import bellIcon from "../assets/icons/bellIcon.svg";
import { WalletModal } from "./WalletConnect";
import { useWallet } from "@solana/wallet-adapter-react";

export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const { connected, publicKey } = useWallet();

  const handleConnectClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="navbar">
        <div className="con">
          <img
            src={connected ? profile : pendaxIcon}
            alt="pendaxIcon"
            className="pendaxIcon"
          />
          {connected ? (
            <h2 className="addy">
              Hi, {publicKey ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}` : ""}
            </h2>
          ) : (
            <h2 className="pendax">Pendax</h2>
          )}
        </div>

        {connected ? (
          <div className="smallIcons">
            <img src={brightnessIcon} alt="brightness" />
            <img src={messageIcon} alt="message" />
            <img src={bellIcon} alt="notifications" />
          </div>
        ) : (
          <button className="connect" onClick={handleConnectClick}>
            Connect Wallet
          </button>
        )}
      </div>

      {showModal && (
        <WalletModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
