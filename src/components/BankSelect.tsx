import { useState } from "react";
import "../assets/styling/BankDetails.css";
import arrowDown from "../assets/icons/arrowDown.svg"
import gtIcon from "../assets/icons/gtIcon.svg"

interface Bank {
  id: number;
  name: string;
  icon: string;
}

const banks: Bank[] = [
  { id: 1, name: "AAA FINANCE", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png" },
  { id: 2, name: "BBB MICROFINANCE", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png" },
  { id: 3, name: "CCC BANK", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png" },
  { id: 4, name: "DDD SAVINGS", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png" },
];

const BankSelect = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bank-input-con">
      {/* Input container with bank logo */}
      <div className="bank-input-wrapper">
        {selectedBank && (
          <img
            src={gtIcon}
            alt="bank"
            className="selected-bank-icon"
          />
        )}
        <input
          type="text"
          placeholder="Select Bank"
          value={selectedBank ? selectedBank.name : ""}
          onClick={() => setShowPopup(true)}
          readOnly
          className="open-input"
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
            <p className="popup-title">Select Bank</p>
          </div>

          <div className="popup-input-container">
            <input
              type="text"
              placeholder="Search bank..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              autoFocus
            />
          </div>

          <div className="popup-list">
            {filteredBanks.map((bank) => (
              <div
                key={bank.id}
                className="bank-item"
                onClick={() => {
                  setSelectedBank(bank); // store whole bank object
                  setShowPopup(false);
                }}
              >
                <img src={bank.icon} alt="bank" className="bank-icon" />
                <span className="bank-name">{bank.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BankSelect;
