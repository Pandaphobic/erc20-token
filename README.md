# Testing ERC20 Token / Web3 / React

Welcome to my first ever ERC20 token! I used remix to deploy to a local Ganache instance. For now, this has only been tested with MetaMask. This project is not intended for anything other than personal research and should not be used as a boilerplate as better tools already exist.

If you're look for a starting point for Web3, definitely check out [scaffold-eth](https://github.com/austintgriffith/scaffold-eth). Lots of cool stuff over there!

This project front end was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install and Setup

1. Clone the repo and run npm install in the root.
2. Import the remixbackup.zip and deploy the contract to your local dev chain (I used ganache while developing this but did not incorporate truffle at all.)

### `npm start`

Runs the front end app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Working / Not Working

#### Faucet - Working

- Should deliver 69 coins to whatever wallet you connect with

#### Camp Fire - Not Working

- I have to change the way Web3 is implemented here but I'll need to circle back.

## General Feature List

- Single page React App
- React Router and basic hooks
- Modified Bootstrap / Bootswatch UI
- Metamask Onboarding Code
- Web3.js to work with web3
- Remix IDE for creating the contract
- Inherits from Open Zeppelin ERC20 standard

# Home

<p align="center">
<img src="https://github.com/Pandaphobic/erc20-token/blob/main/screenshots/Screenshot_1.png" 
  alt="Example View1" 
  height="310">
</p>

# Faucet

<p align="center">
<img src="https://github.com/Pandaphobic/erc20-token/blob/main/screenshots/Screenshot_2.png"  
  alt="Example View2" 
  height="310">
</p>

<p align="center">
<img src="https://github.com/Pandaphobic/erc20-token/blob/main/screenshots/Screenshot_3.png"  
  alt="Example View3" 
  height="310">
</p>

# Campfire

#### Original by RominaMartin - https://codepen.io/RominaMartin/pen/KrqMVw

<p align="center">
<img src="https://github.com/Pandaphobic/erc20-token/blob/main/screenshots/Screenshot_4.png"  
  alt="Example View4" 
  height="310">
</p>
