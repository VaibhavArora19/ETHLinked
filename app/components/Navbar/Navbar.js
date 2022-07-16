import classes from './Navbar.module.css';

import Button from '../UI/Button';

const Navbar = () => {
  return (
    <div className = {classes.navbar}>
      <div>
        <ul className = {classes.items}>
          <li>
            ETHLinked
          </li>
          <li>Tags</li>
          <li>Users</li>
          <li>Add Achievement</li>
        </ul>
      </div>
      <div className = {classes.wallet}>
        <Button>Wallet Address</Button>
      </div>
    </div>
  );
};

export default Navbar;
