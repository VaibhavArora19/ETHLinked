import classes from './Help.module.css';

const Help = () => {
    return <div>
    <div className={`alert shadow-lg ${classes.notification}`}>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>This DApp is only configured to use in PC/Laptop due to some limitations of web3.</span>
  </div>
</div>
    <div className= {classes.help}>
    <h1>Install Metamask</h1>
    <p>1. First of all you have to install Metamask extension. To do that follow the given instructions:</p>
    <p>2. Go to chrome store.</p>
    <p>3. Search MetaMask.</p>
    <p>4. Install MetaMask extension.</p>
    <p>5. Once installed set up your MetaMask account such as mnemonic and your address etc.</p>
    <h1>Add Ethers</h1>
    <p>1. Add some ethers to ropsten testnet by visiting this <a href = 'https://fauceth.komputing.org/' className="link link-accent">Link.</a></p>
    <p>2. You need to provide your wallet address on the given website.</p>
    <p>3. To get your address open Metamask by clicking the MetaMask icon from the top right corner in your chrome tab.</p>
    <p>4. There you can see your address written under {`'Account 1'`} probably.</p>
    <p>5. Click on your address to copy it and then paste it on the given website.</p>
    <p>6. You will get your ropsten ethers in some time.</p>
    <h1>Connecting DApp to MetaMask</h1>
    <p>1. Your MetaMask account will automatically ask for a connection whenever you enter ETHLinked.</p>
    <p>2. Just click Next {`->`} Connect and then you are ready to post your achievements.</p>
    <p>3. If your account does not connect automatically just click the {`'Connect MetaMask'`} button to connect MetaMask.</p>
    <p>4. Change your network to {`'ropsten'`} by clicking the MetaMask icon and then selecting ropsten from the dropdown on the top.</p>
    <p>5. Congrats! You are now ready to enjoy the DApp!! <span>🥳</span></p>
    </div>
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved</p>
  </div>
</footer>
    </div>
};

export default Help;