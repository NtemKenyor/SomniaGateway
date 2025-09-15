
# 🧪 Testing Guide – Somnia Gateway

Welcome to the testing guide for **Somnia Gateway**.
This document will help you efficiently test the **frontend**, **backend/API**, **smart contracts**, and **ramp services**.

---

## ⚡ 1. Frontend Testing

No build step required — just open the `.html` files in your browser:

* `index.html` → Homepage (entry point)
* `ramp.html` → Ramp (fiat ↔ crypto)
* `token_builder.html` → Token builder
* `wallet.html` → Wallet interactions, etc

✅ Verify: wallet connects, balances load, swaps calculate correctly, liquidity actions display properly.

---

## ⚙️ 2. Backend & API Testing

Go into the **`smart_contracts`** directory:

```bash
cd smart_contracts
npm install
```

### Start API server

```bash
node api/index.js
```

### Test API endpoints

Use **curl** or **Postman**:

```bash
curl http://localhost:4000/
```

✅ Expected: Output confirming API is running.

---

## 📜 3. Smart Contract Testing

We use **Hardhat** for contract builds and deployments.

### Compile contracts

```bash
npx hardhat compile
```

### Run tests

```bash
npx hardhat test
```

### Deploy contract

```bash
npx hardhat run scripts/deploy.js --network somnia 
```
OR

```bash
npx hardhat run scripts/deploy.js --network testnet
```

---

## 🔑 4. Environment Setup

Inside **`smart_contracts/`**, create a `.env` file with the following:

```ini
# RPC & Wallet
SOMNIA_RPC=https://dream-rpc.somnia.network/
DEPLOYER_PRIVATE_KEY=0xyourprivatekey
DEPLOYER_PUBLIC_KEY=0xyourpublickey

# Token Deployment
TOKEN_NAME=MySomniaToken
TOKEN_SYMBOL=MST
MINT_AMOUNT=1000
RECIPIENT=0xafriendspublickey
METADATA_URI=https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/info.json

# Postboard Deployment
PRIVATE_KEY=0xyourprivatekey
RPC_URL_TESTNET=https://dream-rpc.somnia.network/
CHAIN_ID_TESTNET=50312
CHAIN_ID=5031
RPC_URL_MAINNET=RPC
# TOKEN_CONTRACT=0xYourDeployedTokenAddress
POST_CONTRACT=0xYourDeployedPostBoardAddress

# Ramp Integration
FLUTTERWAVE_SECRET_KEY_MAIN=FLWSICK-something
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-something
WALLET_PRIVATE_KEY=0xyourprivatekey
```

---

## 💳 5. Ramp Services Testing

The **ramp.html** integrates with **Flutterwave/Stripe**.

Use the **Flutterwave test card**:

```
Card Number: 5531 8866 5214 2950
CVV: 564
Expiry: 09/32
PIN: 3310
OTP: 12345
```

✅ Test flows:

* Buy tokens with a test card
* Verify tokens are credited to wallet
* Simulate cash-out process

---

## 🧭 6. Checklist Before Submitting

* [ ] Open `index.html` and confirm wallet connection works
* [ ] Get some tokens already in the pairs from nkenyor@gmail.com if you can not create and deploy yours.
* [ ] Perform a token swap (`dex.html`) → output is correct
* [ ] Add/remove liquidity (`pairs.html`) → pools update
* [ ] Ramp test with Flutterwave card → transaction passes - coming soon
* [ ] API (`node api/index.js`) responds on `localhost:4000`
* [ ] Smart contracts compile, test, and deploy successfully

---

✅ If all items pass, your **Somnia Gateway environment is fully functional**.


