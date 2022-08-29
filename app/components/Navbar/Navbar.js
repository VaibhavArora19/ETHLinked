import Link from 'next/link';
import { useContext } from 'react';

import classes from './Navbar.module.css';

import { AppContext } from '../context/AchievementContext';
import Button from '../UI/Button';

import Icon from 'next/image';

const Navbar = () => {
  const ctx = useContext(AppContext);

  const accountAddress = ctx.sharedState.account.accountAddress;
  const isConnected = ctx.sharedState.account.isConnected;

  const connectHandler = () => {
    ctx.sharedState.connectWallet();
  }

  const errroHandler = () => {
    console.log('It is already connected! XD');
  }

  return (
    <div className = {classes.navbar}>
      <div>
        <ul className = {classes.items}>
          <li>
            <Link href = '/'><img src='/icon.svg'/></Link>
          </li>
          <li><div><Link href = '/Tags'>Tags</Link></div></li>
          <li><div><Link href = '/Users'>Users</Link></div></li>
          <li><div><Link href = '/Add'>Post</Link></div></li>
          <li><div><Link href = '/Help'>Help</Link></div></li>
        </ul>
      </div>
      <div className = {classes.wallet}>
        <Button onClick = {!isConnected ? connectHandler : errroHandler}>{!accountAddress ? 'Connect Metamask' : `${accountAddress.substring(0,4)}...${accountAddress.substring(38,42)}`}</Button>
      </div>
    </div>
  );
};

export default Navbar;
