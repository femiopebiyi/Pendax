import { useState, useRef, useEffect } from "react";
import pendaxIcon from "../assets/icons/pendaxIcon.svg";
import profile from "../assets/icons/Ellipse.png";
// import brightnessIcon from "../assets/icons/brightnessIcon.svg";
import messageIcon from "../assets/icons/messageIcon.svg";
import bellIcon from "../assets/icons/bellIcon.svg";
import { WalletModal } from "./WalletConnect";
import { useWallet } from "@solana/wallet-adapter-react";
import { NavLink } from "react-router-dom";
import "../assets/styling/Navbar.css"



export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { connected, publicKey } = useWallet();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleConnectClick = () => {
    setShowModal(true);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <h2 className="addy" onClick={() => setShowModal(!showModal)}>
              Hi,{" "}
              {publicKey
                ? `${publicKey.toBase58().slice(0, 4)}...${publicKey
                    .toBase58()
                    .slice(-4)}`
                : ""}{" "}
              <p>&#9662;</p>
            </h2>
          ) : (
            <h2 className="pendax">Pendax</h2>
          )}
        </div>

        {connected ? (
          <div className="smallIcons">
            {/* <img src={brightnessIcon} alt="brightness" /> */}

            {/* Message icon + dropdown */}
            <div className="dropdown-wrapper" ref={dropdownRef}>
              <img
                src={messageIcon}
                alt="message"
                className="clickable"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => setShowDropdown(false)}
                  >
                    <span className="icon exit">✖</span>
                    <span>Exit</span>
                  </div>
                  <div className="dropdown-item">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                      alt="gmail"
                      className="icon-img"
                    />
                    <span>Gmail</span>
                  </div>
                  <div className="dropdown-item">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                      alt="telegram"
                      className="icon-img"
                    />
                    <span>Telegram</span>
                  </div>
                  <div className="dropdown-item">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="whatsapp"
                      className="icon-img"
                    />
                    <span>WhatsApp</span>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/notif">
              <img src={bellIcon} alt="notifications" />
            </NavLink>
          </div>
        ) : (
          <button className="connect" onClick={handleConnectClick}>
            Connect Wallet
          </button>
        )}
      </div>

      {showModal && <WalletModal onClose={() => setShowModal(false)} />}
    </>
  );
}
