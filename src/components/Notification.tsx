

// src/components/Notification.tsx
import { useState } from "react";
import { notifications } from "../functionalities/notifications";
import "../assets/styling/notifications.css";
import arrowBack from "../assets/icons/arrowback.svg"
import { useNavigate } from "react-router-dom";

type Tab = "all" | "transactions" | "announcement" | "system";

const Notification = () => {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const navigate = useNavigate()

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "transactions", label: "Transactions" },
    { key: "announcement", label: "Announcement" },
    { key: "system", label: "System Notification" },
  ];

   return (
    <div className="notification-container">
      {/* Header */}
      <div className="notification-header">
        <span className="back-arrow" onClick={()=>{navigate("..")}}><img src={arrowBack} alt="" /></span>
        <span className="title">Notification</span>
        <span className="menu-dots">⋮</span>
      </div>

      {/* Tabs */}
      <div className="notification-tabs">
        {tabs.map((tab) => (
          <p
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </p>
        ))}
      </div>

      {/* Notifications List */}
      <div className="notification-list">
        {notifications.map((n, idx) => (
          <div key={idx} className="notification-card">
            <h4 className="card-title">{n.title}</h4>
            <p className="card-message">{n.message}</p>
            <div className="card-footer">
              | Time: {n.time} &nbsp; {n.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
