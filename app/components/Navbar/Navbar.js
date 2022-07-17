import Link from 'next/link';

import classes from './Navbar.module.css';

import Button from '../UI/Button';

const Navbar = () => {
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
        <Button>Wallet Address</Button>
      </div>
    </div>
  );
};

export default Navbar;
