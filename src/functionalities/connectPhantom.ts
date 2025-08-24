

// utils/connectPhantom.ts
export async function connectPhantom() {
  try {
    const provider = (window as any).phantom?.solana;
    if (!provider?.isPhantom) {
      alert("Phantom wallet not found. Install it first!");
      return;
    }

    const resp = await provider.connect();
    console.log("Connected with public key:", resp.publicKey.toString());
    return resp.publicKey.toString();
  } catch (err) {
    console.error("Phantom connection error:", err);
  }
}


// utils/connectSolflare.ts
export async function connectSolflare() {
  try {
    const provider = (window as any).solflare;
    if (!provider?.isSolflare) {
      alert("Solflare wallet not found. Install it first!");
      return;
    }

    const resp = await provider.connect();
    console.log("Connected with public key:", resp.publicKey.toString());
    return resp.publicKey.toString();
  } catch (err) {
    console.error("Solflare connection error:", err);
  }
}
