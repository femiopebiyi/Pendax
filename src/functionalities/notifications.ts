
// src/data/notifications.ts

export interface Notification {
  title: string;
  message: string;
  time: string;
  date: string;
}

export const notifications: Notification[] = [
  {
    title: "Transaction Successful ✅",
    message:
      "Your USDT To Naira exchange of 100 USDT has been completed. ₦153,500 has been credited to your linked bank account.\nRef: TX-8F72C",
    time: "10:42 AM",
    date: "03-Oct-2025",
  },
  {
    title: "Wallet Connected Successfully 🧁",
    message:
      "You’ve securely connected your MetaMask wallet to Pendax. You can now send, receive, and trade instantly.\nTip: Enable 2FA in Settings for extra security.",
    time: "12:02 PM",
    date: "03-Oct-2025",
  },
  {
    title: "USDT Rate Surge! 📈",
    message:
      "Current USDT To Naira rate: ₦1,550.\nTrade now to take advantage before rates change.",
    time: "1:22 PM",
    date: "03-Oct-2025",
  },
  {
    title: "Instant Bill Payments!",
    message:
      "You can now settle your electricity, internet, and TV bills directly from your Pendax wallet anytime, anywhere. Enjoy instant confirmations, multiple provider options, and 24/7 availability. Update your app today and experience faster, simpler payments with Pendax.",
    time: "3:22 PM",
    date: "03-Oct-2025",
  },
  {
    title: "Scheduled maintenance will occur on August 18th, 2025",
    message:
      "During this time, some wallet transactions may be delayed. We recommend completing urgent trades or payments before the maintenance window.\nThank you for your understanding — Pendax Team",
    time: "3:22 PM",
    date: "03-Oct-2025",
  },
];
