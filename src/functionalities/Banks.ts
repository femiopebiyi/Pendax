import gticon from "../assets/icons/gtIcon.svg"
import accessBank from "../assets/icons/access.svg"
import citiBank from "../assets/icons/citibank.svg"
import EcoBank from "../assets/icons/ecobank.svg"
import FidelityBank from "../assets/icons/fidelity.svg"
import FirstBank from "../assets/icons/firstbank.svg"
import FcmbBank from "../assets/icons/fcmb.svg"
import globusBank from "../assets/icons/globus.svg"
import heritageBank from "../assets/icons/heritage.svg"
import keystoneBank from "../assets/icons/keystone.svg"
import polarisBank from "../assets/icons/polaris.svg"
import providusBank from "../assets/icons/providus.svg"
import stanbicBank from "../assets/icons/stanbic.svg"
import standardBank from "../assets/icons/standardChar.svg"
import sterlingBank from "../assets/icons/sterling.svg"
import suntrustBank from "../assets/icons/suntrust.svg"
import titanBank from "../assets/icons/titanBank.svg"
import tajBank from "../assets/icons/tajBank.svg"
import unionBank from "../assets/icons/unionBank.svg"
import ubaBank from "../assets/icons/uba.svg"
import wemaBank from "../assets/icons/wema.svg"
import zenithBank from "../assets/icons/zenith.svg"
import unityBank from "../assets/icons/unityBank.svg"
import kudaBank from "../assets/icons/kuda.svg"
import jaizBank from "../assets/icons/jaizbank.svg"
import opayBank from "../assets/icons/opay.svg"


export interface Bank {
  id: string;
  name: string;
  icon: string;
}

export const banks: Bank[] = [
  { id: "044", name: "Access Bank Plc",                  icon: accessBank },
  { id: "063", name: "Access Bank (Diamond)",            icon: accessBank },
  { id: "023", name: "Citibank Nigeria Limited",         icon: citiBank },
  { id: "050", name: "Ecobank Nigeria Plc",              icon: EcoBank },
  { id: "070", name: "Fidelity Bank Plc",                icon: FidelityBank },
  { id: "011", name: "First Bank of Nigeria Limited",    icon: FirstBank },
  { id: "214", name: "First City Monument Bank Plc",     icon: FcmbBank },
  { id: "001", name: "Globus Bank Limited",              icon: globusBank },
  { id: "058", name: "Guaranty Trust Bank Plc",          icon: gticon },
  { id: "030", name: "Heritage Bank Plc",                icon: heritageBank },
  { id: "082", name: "Keystone Bank Limited",            icon: keystoneBank },
  { id: "076", name: "Polaris Bank Plc",                 icon: polarisBank },
  // { id: "105", name: "Premium Trust Bank Limited",       icon: "" },
  { id: "101", name: "Providus Bank Limited",            icon: providusBank },
  { id: "221", name: "Stanbic IBTC Bank Plc",            icon: stanbicBank },
  { id: "068", name: "Standard Chartered Bank Nigeria", icon: standardBank },
  { id: "232", name: "Sterling Bank Plc",                icon: sterlingBank },
  { id: "100", name: "SunTrust Bank Nigeria Limited",    icon: suntrustBank },
  { id: "102", name: "Titan Trust Bank Ltd",             icon: titanBank },
  { id: "032", name: "Union Bank of Nigeria Plc",        icon: unionBank },
  { id: "033", name: "United Bank for Africa Plc",       icon: ubaBank },
  { id: "215", name: "Unity Bank Plc",                   icon: unityBank },
  { id: "035", name: "Wema Bank Plc",                    icon: wemaBank },
  { id: "057", name: "Zenith Bank Plc",                  icon: zenithBank },

  // Non-Interest Banks
  { id: "301", name: "Jaiz Bank Plc",                    icon: jaizBank },
  // { id: "303", name: "Lotus Bank Limited",               icon: "" },
  { id: "302", name: "TAJ Bank Limited",                 icon: tajBank },

  // Mobile / Microfinance (Fintech Banks with NUBAN codes)
  { id: "50211", name: "Kuda Microfinance Bank",         icon: kudaBank },
  { id: "999992", name: "Opay Digital Services (Paycom)", icon: opayBank },
  { id: "999991", name: "Palmpay",                        icon: "" },
  { id: "50515", name: "Moniepoint MFB",                 icon: "" },
];
