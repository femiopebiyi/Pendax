import { useState } from "react";
import "../assets/styling/TokenSelect.css";
import arrowDown from "../assets/icons/arrowDown.svg";
import { tokens, type Token } from "../functionalities/TokenDetails";

interface TokenSelectProps {
  onSelect: (token: Token) => void; // notify parent
}

const TokenSelect = ({ onSelect }: TokenSelectProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleSelect = (token: Token) => {
    setSelectedToken(token);
    onSelect(token); // send selected token to parent
    setShowPopup(false);
  };

  return (
    <div className="token-input-con">
      {/* Clickable input to open token list */}
      <div className="token-input-wrapper" onClick={() => setShowPopup(true)}>
        {selectedToken && (
          <img
            src={selectedToken.icon}
            alt="token"
            className="selected-token-icon"
          />
        )}
        <input
          type="text"
          placeholder="Select token"
          value={selectedToken ? selectedToken.symbol : ""}
          readOnly
          className="token-input"
        />
        <span className="arrow-bank"><img src={arrowDown} alt="" /></span>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-header">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </button>
            <p className="popup-title">Select token</p>
          </div>

          <div className="popup-list">
            {tokens.map((token) => (
              <div
                key={token.id}
                className="token-item"
                onClick={() => handleSelect(token)}
              >
                <div className="lefttok">
                  <img src={token.icon} alt="token" className="token-icon" />
                  <p className="token-symbol">{token.symbol}</p>
                </div>
                <div className="token-info">
                  <span className="token-balance">{token.balance}</span>
                  <span className="token-value">~{token.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenSelect;
