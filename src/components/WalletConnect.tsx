import "../assets/styling/WalletModal.css";
import phantom from "../assets/icons/phantom.svg";
import solflare from "../assets/icons/solflare.svg";
import backpack from "../assets/icons/backpack.svg";
import wallet from "../assets/icons/wallets.svg";

import { useWallet } from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import type { WalletName } from "@solana/wallet-adapter-base";
import { useEffect } from "react";

interface WalletModalProps {
  onClose: () => void;
}

export function WalletModal({ onClose }: WalletModalProps) {
  const { select, connect, disconnect, publicKey, connected } = useWallet();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // wallet adapter names
  const PHANTOM = new PhantomWalletAdapter().name;
  const SOLFLARE = new SolflareWalletAdapter().name;
  const handleConnect = async (walletName: WalletName) => {
    try {
      select(walletName as WalletName);

      if (!isMobile) {
        await connect();
      }

      onClose();
    } catch (err) {
      console.error(`Failed to connect ${walletName}:`, err);
    }
  };

  useEffect(() => {
    if (connected && publicKey) {
      console.log("✅ Wallet connected:", publicKey.toBase58());
    }
  }, [connected, publicKey]);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn-modal" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal-title">Connect Wallet</h2>
        <p className="modal-subtitle">
          Get started by connecting your preferred wallet below
        </p>
        <p className="modal-smalltext">or select a wallet from the list below</p>

        <div className="wallet-list">
          {!connected ? (
            <>
              <button
                className="wallet-btn"
                onClick={() => handleConnect(PHANTOM)}
              >
                <div className="wallet-info">
                  <img src={phantom} alt="Phantom" className="wallet-icon" />
                  <span>Phantom</span>
                </div>
                <span className="arrow">→</span>
              </button>

              <button
                className="wallet-btn"
                onClick={() => handleConnect(SOLFLARE)}
              >
                <div className="wallet-info">
                  <img src={solflare} alt="Solflare" className="wallet-icon" />
                  <span>Solflare Wallet</span>
                </div>
                <span className="arrow">→</span>
              </button>

              <button
                className="wallet-btn"
                
              >
                <div className="wallet-info">
                  <img src={backpack} alt="Backpack" className="wallet-icon" />
                  <span>Backpack Wallet</span>
                </div>
                <span className="arrow">→</span>
              </button>
            </>
          ) : (
            <button className="wallet-btn disconnect" onClick={disconnect}>
              <div className="wallet-info">
                <img src={wallet} alt="Disconnect" className="wallet-icon" />
                <span>
                  Disconnect ({publicKey?.toBase58().slice(0, 4)}...
                  {publicKey?.toBase58().slice(-4)})
                </span>
              </div>
            </button>
          )}
        </div>

        {!connected && (
          <div className="modal-footer">
            <button className="no-wallet-btn">
              <img src={wallet} alt="" />
              &nbsp;&nbsp;I don’t have a wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
