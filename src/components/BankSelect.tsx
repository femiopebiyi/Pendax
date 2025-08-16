
import  { useState } from "react";
import "../assets/styling/BankDetails.css";
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

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Trigger button */}
      <button onClick={() => setShowPopup(true)} className="open-btn">
        Select Bank
      </button>

      {/* Fullscreen Popup */}
      {showPopup && (
        <div className="popup-overlay">
          {/* Header */}
          <div className="popup-header">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </button>
            <span>Select Bank</span>
          </div>

          {/* Search input */}
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

          {/* Bank list */}
          <div className="popup-list">
            {filteredBanks.map((bank) => (
              <div
                key={bank.id}
                className="bank-item"
                onClick={() => {
                  alert(`Selected: ${bank.name}`);
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
