import React from 'react';
import './navbar.css'


const SideBar = ({ openClass }) => {
  return (
    <nav className={openClass === true ? 'closeslidernav slidernav' : ' slidernav'}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/">
            Home
          </a>
        </li>

        <li>
          <a className="menu-item" href="/burgers">
            Burgers
          </a>
        </li>

        <li>
          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>
        </li>
        <li>
         
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;