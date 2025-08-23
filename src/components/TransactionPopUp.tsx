import type { Token } from "../functionalities/TokenDetails";

interface TransactionPopUpProps {
  amount: number | "";
  accountNo: string;
  accountName: string;
  bank: string;
  bankIcon: string;
  token: Token | null;
  onClose: () => void;
}

export function TransactionPopUp({
 amount,
  accountNo,
  accountName,
  bank,
  bankIcon,
  token,
  onClose,
}: TransactionPopUpProps) {
  return (
    <div className="confirmation-con">
      {/* Close button */}
      <h6 onClick={onClose}>X</h6>

      <h1>₦{amount.toLocaleString()}</h1>
      {amount !== "" && (
        <p>You will pay ${((Number(amount)) * 0.00065317).toFixed(1)}</p>
      )}

      <div className="confirmBank first-confirm">
        <h3>Recipient Bank</h3>
        <h4>
          <img src={bankIcon} alt="" /> {bank}
        </h4>
      </div>

      <div className="confirmBank">
        <h3>Recipient Account</h3>
        <h4>{accountNo}</h4>
      </div>

      <div className="confirmBank">
        <h3>Account Name</h3>
        <h4>{accountName}</h4>
      </div>

      <div className="confirmBank">
        <h3>Payment Channel</h3>
        <h4>
          {token?.icon && <img src={token.icon} alt="" />} {token?.name}
        </h4>
      </div>

      <button className="paynow">Pay Now</button>
      <button className="cancel" onClick={onClose}>Cancel</button>
    </div>
  );
}
