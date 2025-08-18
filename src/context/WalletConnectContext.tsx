import { createContext, useState, type ReactNode } from "react"

interface UIContextType {
  walletConnected: boolean
  connectWallet: () => void
  disconnectWallet: () => void
}

export const UIContext = createContext<UIContextType>({
  walletConnected: false,
  connectWallet: () => {},
  disconnectWallet: () => {},
})

interface Props {
  children: ReactNode
}

export function WalletConnectProvider({ children }: Props) {
  const [walletConnected, setWalletConnected] = useState(false)

  const connectWallet = () => setWalletConnected(true)
  const disconnectWallet = () => setWalletConnected(false)

  const contextData: UIContextType = {
    walletConnected,
    connectWallet,
    disconnectWallet,
  }

  return (
    <UIContext.Provider value={contextData}>
      {children}
    </UIContext.Provider>
  )
}
