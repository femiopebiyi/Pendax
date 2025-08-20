import { useState, useEffect, useRef, useContext } from "react";
import nairaIcon from "../assets/icons/nairaIcon.svg";
import ghanaIcon from "../assets/icons/ghanaFlag.svg";
import southyIcon from "../assets/icons/southyFlag.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
import AccountInput from "./AccountInput";
import BankSelect from "./BankSelect";
import TokenSelect from "./TokenSelect";
import { UIContext } from "../context/WalletConnectContext";
import tickIcon from "../assets/icons/tick.svg";
import { ClipLoader } from "react-spinners";
import type { Token } from "../functionalities/TokenDetails";

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

  

  const [value, setValue] = useState<number | "">("");
  const [accountValue, setAccountValue] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chosenToken, setChosenToken] = useState<Token | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(raw)) {
      if (raw === "" || raw === "0" || !raw.startsWith("0")) {
        setValue(raw === "" ? "" : Number(raw));
      }
    }
  };

  const formatWithCommas = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

  // Connect wallet
  const { walletConnected, connectWallet } = useContext(UIContext);

  const isFormValid =
  value !== "" &&              // Amount is entered
  accountValue.length === 10 && // Account number has 10 digits
  accountName !== "" &&         // Bank account was verified
  chosenToken !== null;         // Token selected

  return (
    <div className="sendform">
      {/* Currency & Amount */}
      <div className="amount">
        <div style={{ position: "relative", width: "110px" }} ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #DFE8F9",
              padding: "8px 8px",
              cursor: "pointer",
              borderRadius: "32px",
              backgroundColor: "white",
              gap: "4px",
            }}
          >
            <span>{currency.label}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <img src={currency.icon} alt="" style={{ width: 20, height: 20 }} />
              <img src={arrowDown} alt="arrow" style={{ width: 14, height: 14 }} />
            </div>
          </div>

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
                    background: item.code === currency.code ? "#f0f0f0" : "transparent",
                  }}
                >
                  <span>{item.label}</span>
                  <img src={item.icon} alt="" style={{ width: 20, height: 20 }} />
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Enter amount"
          className="amount-input"
          value={value === "" ? "" : formatWithCommas(value)}
          onChange={handleChange}
        />
      </div>

      {/* Account Number */}
      <div className="accountNo">
        <AccountInput
          value={accountValue}
          onChange={setAccountValue}
          onPopupClose={() => {
            setAccountName(""); // hide account name
            setLoading(false);  // stop spinner
            setError(null);     // clear error
          }}
        />
      </div>

      {/* Bank Selection */}
      <div className="selBank bank-select-container">
        <BankSelect
          accountNo={accountValue}
          onAccountNameChange={setAccountName}
          onLoadingChange={setLoading}
          onErrorChange={setError}
        />
      </div>

      {/* Account Name / Loading */}
      {(!error && (accountName || loading)) && (
        <div
          className="accc-name"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          {loading ? (
            <p>
              Verifying account... <ClipLoader color={"#296EFA"} size={30} />
            </p>
          ) : (
            <>
              <h4>{accountName}</h4>
              <img src={tickIcon} alt="" className="tick" />
            </>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && <p className="error-text">{error}</p>}

      {/* Token Selection */}
      <div className="selToken">
        <TokenSelect onSelect={(token) => setChosenToken(token)}/>
      </div>

      {/* Submit */}
      

      <div className="send">
  {walletConnected ? (
    <button
      className="send-btn"
      disabled={!isFormValid}
      style={{
        opacity: isFormValid ? 1 : 0.5,
        cursor: isFormValid ? "pointer" : "not-allowed",
      }}
      onClick={() => {
        if (!isFormValid) return; // extra safety
        console.log("Sending transaction with:", {
          amount: value,
          accountNo: accountValue,
          bank: accountName,
          token: chosenToken,
        });
        // ✅ place your send transaction logic here
      }}
    >
      Send
    </button>
  ) : (
    <button className="send-btn" onClick={connectWallet}>
      Connect Wallet
    </button>
  )}
</div>

    </div>
  );
}
