import Link from 'next/link';
import { useContext } from 'react';

import classes from './Navbar.module.css';

import { AppContext } from '../context/Achievement-context';
import Button from '../UI/Button';

const Navbar = () => {
  const ctx = useContext(AppContext);

  const accountAddress = ctx.sharedState.account.accountAddress;


  return (
    <div className = {classes.navbar}>
      <div>
        <ul className = {classes.items}>
          <li>
            <Link href = '/'>ETHLinked</Link>
          </li>
          <li><Link href = '/Tags'>Tags</Link></li>
          <li><Link href = '/Users'>Users</Link></li>
          <li><Link href = '/Add'>Add Achievement</Link></li>
        </ul>
      </div>
      <div className = {classes.wallet}>
        <Button>{!accountAddress ? 'Connect Metamask' : `${accountAddress.substring(0,4)}...${accountAddress.substring(38,42)}`}</Button>
      </div>
    </div>
  );
};

export default Navbar;
