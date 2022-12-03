import {React, useState} from 'react';
import classNames from 'classnames';
import './Navbar.scss';
import {Link} from 'react-router-dom';

// Drop down menu for account
const Navbar = (
  {
    setUser,
    users,
    user,
    showCart,
    setCartDrawer
  }) => {

  //About dropdown
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const [showLoginForm, setShowLoginForm] = useState(false);

  //login logic
  const loginClass = classNames("login__component", {
    "login__component--open": showLoginForm,
    "login__component--close": !showLoginForm
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    setShowLoginForm(true);

    const userInfo = users.find(user => user.name === username);

    if (userInfo && userInfo.password === password) {
      setUser(userInfo.name);
      setShowLoginForm(false);

    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    setUser(null);
  };

  return (
    <nav>
      <Link to='/home'>
        <button className="title">HARVEST</button>
      </Link>
      <div className="nav_buttons">
        <div className="login__nav">
          <form className="login__nav">
            <div className={loginClass}>
              <label className="login__label">username</label>
              <input className="login__input" type="text" placeholder="username" onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div className={loginClass}>
              <label className="login__label">password</label>
              <input className="login__input" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
            </div>
          </form>
        </div>
        {!user && <button onClick={handleLogin}>Login</button>}
        <div className="dropdown">
          {user && <button onClick={handleDropdown}>Account</button>}
          {open ? (
            <ul className="account">
              <li className="account-item">
                <button><img src="../images/user.png" alt="user"></img>View your profile</button>
              </li>
              <li className="account-item">
                <button>My orders</button>
              </li>
              <li className="account-item">
                <button onClick={handleLogout}>Sign out</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <Link to='/our-mission'>
            <button>About Us</button>
          </Link>
        </div>
        <div>
          <button className="nav__cart" onClick={() => setCartDrawer(!showCart)}><img src="../images/cart.png" alt="cart"></img></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;