import { useState } from "react";
import "../assets/styling/BankDetails.css";
import arrowDown from "../assets/icons/arrowDown.svg";
import { banks, type Bank } from "../functionalities/Banks";
import { verifyBankAccount } from "../functionalities/getBankDetails";

interface BankSelectProps {
  accountNo: string;
  onAccountNameChange: (name: string) => void;
  onLoadingChange: (isLoading: boolean) => void;
  onErrorChange: (errorMessage: string | null) => void;
}

const BankSelect = ({
  accountNo,
  onAccountNameChange,
  onLoadingChange,
  onErrorChange,
}: BankSelectProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bank-input-con">
      {/* Input container */}
      <div className="bank-input-wrapper">
        {selectedBank && (
          <img src={selectedBank.icon} alt="bank" className="selected-bank-icon" />
        )}
        <input
          type="text"
          placeholder="Select Bank"
          value={selectedBank ? selectedBank.name : ""}
          onClick={() => setShowPopup(true)}
          readOnly
          className="open-input"
        />
        <span className="arrow-bank">
          <img src={arrowDown} alt="" />
        </span>
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
                onClick={async () => {
                  setSelectedBank(bank);
                  setShowPopup(false);

                  onLoadingChange(true);
                  onErrorChange(null); // clear previous errors

                  try {
                    console.log(accountNo)
                    const result = await verifyBankAccount(accountNo, bank.id);
                    onAccountNameChange(result.data.account_name);
                  } catch (error) {
                    console.error("Verification failed:", error);
                    onErrorChange(
                      "failed!!!, check account number"
                    );
                  } finally {
                    onLoadingChange(false);
                  }
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
