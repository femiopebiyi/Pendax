import gticon from "../assets/icons/gtIcon.svg"

export interface Bank {
  id: string;
  name: string;
  icon: string;
}

export const banks: Bank[] = [
  { id: "044", name: "Access Bank Plc",                  icon: "" },
  { id: "063", name: "Access Bank (Diamond)",            icon: "" },
  { id: "023", name: "Citibank Nigeria Limited",         icon: "" },
  { id: "050", name: "Ecobank Nigeria Plc",              icon: "" },
  { id: "070", name: "Fidelity Bank Plc",                icon: "" },
  { id: "011", name: "First Bank of Nigeria Limited",    icon: "" },
  { id: "214", name: "First City Monument Bank Plc",     icon: "" },
  { id: "001", name: "Globus Bank Limited",              icon: "" },
  { id: "058", name: "Guaranty Trust Bank Plc",          icon: gticon },
  { id: "030", name: "Heritage Bank Plc",                icon: "" },
  { id: "082", name: "Keystone Bank Limited",            icon: "" },
  { id: "076", name: "Polaris Bank Plc",                 icon: "" },
  { id: "105", name: "Premium Trust Bank Limited",       icon: "" },
  { id: "101", name: "Providus Bank Limited",            icon: "" },
  { id: "221", name: "Stanbic IBTC Bank Plc",            icon: "" },
  { id: "068", name: "Standard Chartered Bank Nigeria", icon: "" },
  { id: "232", name: "Sterling Bank Plc",                icon: "" },
  { id: "100", name: "SunTrust Bank Nigeria Limited",    icon: "" },
  { id: "102", name: "Titan Trust Bank Ltd",             icon: "" },
  { id: "032", name: "Union Bank of Nigeria Plc",        icon: "" },
  { id: "033", name: "United Bank for Africa Plc",       icon: "" },
  { id: "215", name: "Unity Bank Plc",                   icon: "" },
  { id: "035", name: "Wema Bank Plc",                    icon: "" },
  { id: "057", name: "Zenith Bank Plc",                  icon: "" },

  // Non-Interest Banks
  { id: "301", name: "Jaiz Bank Plc",                    icon: "" },
  { id: "303", name: "Lotus Bank Limited",               icon: "" },
  { id: "302", name: "TAJ Bank Limited",                 icon: "" },

  // Mobile / Microfinance (Fintech Banks with NUBAN codes)
  { id: "50211", name: "Kuda Microfinance Bank",         icon: "" },
  { id: "999992", name: "Opay Digital Services (Paycom)", icon: "" },
  { id: "999991", name: "Palmpay",                        icon: "" },
  { id: "50515", name: "Moniepoint MFB",                 icon: "" },
];
