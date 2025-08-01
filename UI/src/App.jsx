import React, { useState } from "react";
import { ethers } from "ethers";
import GreenTokenV2 from "./GreenToken.json"; // ABI file

const proxyAddress = "0xA986958af47CdeF0eD80aeC05F86Db3C37e9d04C"; //  deployed proxy address

function App() {
  const [account, setAccount] = useState("");
  const [mintTo, setMintTo] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [burnAmount, setBurnAmount] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [redeemAmount, setRedeemAmount] = useState("");
  const [reward, setReward] = useState("");
  const [status, setStatus] = useState("");

  // Connect wallet
  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } else {
      alert("Please install MetaMask!");
    }
  }

  // Get contract instance
  function getContract(signer) {
    return new ethers.Contract(proxyAddress, GreenTokenV2.abi, signer);

  }

  // Mint tokens (only owner)
  async function mintTokens() {
    try {
      setStatus("Minting...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);
      const tx = await contract.mint(mintTo, ethers.parseUnits(mintAmount, 18));
      await tx.wait();
      setStatus("Minted!");
    } catch (err) {
      setStatus("Mint failed: " + err.message);
    }
  }

  // Burn tokens
  async function burnTokens() {
    try {
      setStatus("Burning...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);
      const tx = await contract.burn(ethers.parseUnits(burnAmount, 18));
      await tx.wait();
      setStatus("Burned!");
    } catch (err) {
      setStatus("Burn failed: " + err.message);
    }
  }
  // Transfer tokens
  async function transferTokens() {
    try {
      setStatus("Transferring...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);
      const tx = await contract.transfer(transferTo, ethers.parseUnits(transferAmount, 18));
      await tx.wait();
      setStatus("Transferred!");
    } catch (err) {
      setStatus("Transfer failed: " + (err?.message || JSON.stringify(err)));
    }
  }
  // Redeem tokens
  async function redeemTokens() {
    try {
      setStatus("Redeeming...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);
      const tx = await contract.redeem(ethers.parseUnits(redeemAmount, 18), reward);
      await tx.wait();
      setStatus("Redeemed!");
    } catch (err) {
      setStatus("Redeem failed: " + err.message);
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>GreenToken DApp</h2>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
      </button>
      <hr />

      <h3>Mint Tokens (Owner Only)</h3>
      <input
        placeholder="Recipient address"
        value={mintTo}
        onChange={e => setMintTo(e.target.value)}
        style={{ width: "100%" }}
      />
      <input
        placeholder="Amount"
        value={mintAmount}
        onChange={e => setMintAmount(e.target.value)}
        style={{ width: "100%" }}
      />
      <button onClick={mintTokens}>Mint</button>

      <h3>Burn Tokens</h3>
      <input
        placeholder="Amount"
        value={burnAmount}
        onChange={e => setBurnAmount(e.target.value)}
        style={{ width: "100%" }}
      />
      <button onClick={burnTokens}>Burn</button>

      <h3>Transfer Tokens</h3>
<input
  placeholder="Recipient address"
  value={transferTo}
  onChange={e => setTransferTo(e.target.value)}
  style={{ width: "100%" }}
/>
<input
  placeholder="Amount"
  value={transferAmount}
  onChange={e => setTransferAmount(e.target.value)}
  style={{ width: "100%" }}
/>
<button onClick={transferTokens}>Transfer</button>
      <h3>Redeem Tokens</h3>
      <input
        placeholder="Amount"
        value={redeemAmount}
        onChange={e => setRedeemAmount(e.target.value)}
        style={{ width: "100%" }}
      />
      <input
        placeholder="Reward (e.g. Free Coffee)"
        value={reward}
        onChange={e => setReward(e.target.value)}
        style={{ width: "100%" }}
      />
      <button onClick={redeemTokens}>Redeem</button>

      <hr />
      <div>Status: {status}</div>
    </div>
  );
}

export default App;