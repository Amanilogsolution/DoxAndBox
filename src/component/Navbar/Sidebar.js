import React from 'react';
import './navbar.css'


const SideBar = ({ openClass }) => {
  return (
    <nav className={openClass === true ? 'closeslidernav slidernav' : ' slidernav'}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/">
            <i class="material-icons">dashboard</i>
            &nbsp;Dashboard
          </a>
        </li>

        <li>
          <a className="menu-item" >
            <i class="material-icons">list</i>
            &nbsp;Physical Files
          </a>
        </li>
        <li>
          <a className="menu-item" >

            <i class="material-icons">arrow_forward_ios</i>
            Request
            <ul className="innerul">
              <li>Record Pickup</li>
              <li>Record Retrieval</li>
              <li>Scanning Request</li>
              <li>Shredding</li>
              <li>Other Shredding</li>
              <li>Other</li>
            </ul>
          </a>

        </li>

        <li>
        <a className="menu-item" >

        <i class="material-icons">arrow_forward_ios</i>
          Reports
          <ul className="innerul">
            <li>Inward Report</li>
            <li>Retrieval Report</li>
            <li>Scanning Report</li>
            <li>Stock Report</li>

          </ul>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;