import  { useState } from "react";
import "../assets/styling/AccountInput.css";
import gtIcon from "../assets/icons/gtIcon.svg"
import recentIcon from "../assets/icons/recent.svg"

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

const AccountInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const filteredTransactions = recentTransactions.filter((t) =>
    t.accountNumber.includes(inputValue)
  );

  return (
    <div>
      {/* Input (outside overlay) */}
      <input
        type="text"
        placeholder="Enter account number"
        value={inputValue}
        onFocus={() => setShowPopup(true)}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowPopup(true);
        }}
        className="account-input"
      />

      {/* Fullscreen Popup */}
      {showPopup && (
        <div className="popup-overlay">
          {/* Header */}
          <div className="popup-header">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </button>
            <p>Enter account number</p>
          </div>

          {/* Input inside popup */}
          <div className="popup-input-container">
            <input
              type="text"
              placeholder="Enter account number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="account-input"
              autoFocus
            />
          </div>

          {/* Recents list */}
          <div className="popup-recents">
            <p className="recents-title"><img src={recentIcon} alt="" />&nbsp;&nbsp;Recents</p>
            {filteredTransactions.map((t) => (
                    <div
                        key={t.id}
                        className="recent-item"
                        onClick={() => {
                        setInputValue(t.accountNumber);
                        setShowPopup(false);
                        }}
                    >
                        {/* Left: Name + Account */}
                        <div className="recent-details">
                        <p className="recent-name">{t.name}</p>
                        <p className="recent-account">{t.accountNumber}</p>
                        </div>

                        {/* Middle: Bank logo */}
                        <img
                        src= {gtIcon}
                        alt="bank"
                        className="bank-logo"
                        />

                        {/* Right: Bank name */}
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
