import { useContext, useState } from "react";
import "../assets/styling/AccountInput.css";
import gtIcon from "../assets/icons/gtIcon.svg";
import recentIcon from "../assets/icons/recent.svg";
import { UIContext } from "../context/WalletConnectContext";

interface Transaction {
  id: number;
  name: string;
  accountNumber: string;
  bank: string;
}

const recentTransactions: Transaction[] = [
  { id: 1, name: "John Doe", accountNumber: "0123456789", bank: "Guaranty Trust Bank" },
  { id: 2, name: "Jane Smith", accountNumber: "0987654321", bank: "Access Bank" },
  { id: 3, name: "David Johnson", accountNumber: "1122334455", bank: "Zenith Bank" },
];

interface AccountInputProps {
  value: string;
  onChange: (val: string) => void;
  onPopupClose?: () => void; // optional callback to notify parent
}

const AccountInput = ({ value, onChange, onPopupClose }: AccountInputProps) => {
  const [showPopup, setShowPopup] = useState(false);

  // Filter recents based on current value
  const filteredTransactions = recentTransactions.filter((t) =>
    t.accountNumber.includes(value)
  );

  // Only numbers, max 10 digits
  const handleInputChange = (val: string) => {
    const numeric = val.replace(/\D/g, ""); // remove non-digits
    const limited = numeric.slice(0, 10);   // limit to 10 characters
    onChange(limited);
  };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowPopup(false);
      onPopupClose?.(); // notify parent that popup is closed
    }
  };

  const { walletConnected } = useContext(UIContext)

  return (
    <div>
      {/* Main input */}
      <input
        type="text"
        placeholder="Enter account number"
        value={value}
        onFocus={() => setShowPopup(true)}
        onChange={(e) => {
          handleInputChange(e.target.value);
          setShowPopup(true);
        }}
        className="account-input"
      />

      {/* Popup overlay */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-header">
            <button
              className="close-btn"
              onClick={() => {
                setShowPopup(false);
                if (onPopupClose) onPopupClose(); // notify parent when popup closes
              }}
            >
              ×
            </button>
            <p className="popup-title">Enter account number</p>
          </div>

          <div className="popup-input-container">
            <input
              type="text"
              placeholder="Enter account number"
              value={value}
              onChange={(e) => handleInputChange(e.target.value)}
              className="account-input"
              autoFocus
              id="acc-no"
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="popup-recents" style={{display: walletConnected ? "block": "none"}}>
            <p className="recents-title">
              <img src={recentIcon} alt="" />
              &nbsp;&nbsp;Recents
            </p>

            {filteredTransactions.map((t) => (
              <div
                key={t.id}
                className="recent-item"
                onClick={() => {
                  onChange(t.accountNumber);
                  setShowPopup(false);
                  if (onPopupClose) onPopupClose(); // notify parent here too
                }}
              >
                <div className="recent-details">
                  <p className="recent-name">{t.name}</p>
                  <p className="recent-account">{t.accountNumber}</p>
                </div>

                <img src={gtIcon} alt="bank" className="bank-logo" />

                <span className="recent-bank">{t.bank}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountInput;
