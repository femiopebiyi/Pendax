import { useState, useEffect, useRef } from "react";
import nairaIcon from "../assets/icons/nigeriaFlag.svg";
import ghanaIcon from "../assets/icons/ghanaFlag.svg";
import southyIcon from "../assets/icons/southyFlag.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
import AccountInput from "./AccountInput";
import BankSelect from "./BankSelect";

const currencies = [
  { code: "NGN", label: "NGN", icon: nairaIcon },
  { code: "GHS", label: "GHS", icon: ghanaIcon },
  { code: "ZAR", label: "SOU", icon: southyIcon },
];

export function SendForm() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const selectCurrency = (item: typeof currency) => {
    
    setCurrency(item);
    setIsOpen(false);
    
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sendform">
      <div className="amount">
        {/* Currency dropdown */}
        <div style={{ position: "relative", width: "110px" }} ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "2px solid #DFE8F9",
              padding: "8px 8px",
              cursor: "pointer",
              borderRadius: "32px",
              gap: "4px",
            }}
          >
            {/* Text */}
            <span>{currency.label}</span>

            {/* Flag + arrow group */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <img
                src={currency.icon}
                alt=""
                style={{ width: 20, height: 20 }}
              />
              <img
                src={arrowDown}
                alt="arrow"
                style={{ width: 14, height: 14 }}
              />
            </div>
          </div>

          {/* Dropdown list */}
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "white",
                border: "1px solid #ccc",
                width: "100%",
                zIndex: 100,
              }}
            >
              {currencies.map((item) => (
                <div
                  key={item.code}
                  onClick={() => selectCurrency(item)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4px 8px",
                    cursor: "pointer",
                    background:
                      item.code === currency.code ? "#f0f0f0" : "transparent",
                  }}
                >
                  <span>{item.label}</span>
                  <img
                    src={item.icon}
                    alt=""
                    style={{ width: 20, height: 20 }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Amount input */}
        <input
          type="number"
          placeholder="Enter amount"
          className="amount-input"
          min={0}
        />
      </div>

      {/* Account Number */}
      <div className="accountNo">
        {/* <input placeholder="Enter Account Number" /> */}
          <AccountInput/>
        
      </div>

      {/* Bank Selection */}
      <div className="selBank bank-select-container">
       <BankSelect/>
        <img src={arrowDown} alt="arrow" />
      </div>

      {/* Token Selection */}
      <div className="selToken">
        <select className="select-token">
          <option value="">Select token</option>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="bnb">Binance Coin (BNB)</option>
          <option value="ada">Cardano (ADA)</option>
        </select>
        <img src={arrowDown} alt="arrow" />
      </div>

      {/* Submit */}
      <div className="send">
        <button className="send-btn">Connect Wallet</button>
      </div>
    </div>
  );
}
