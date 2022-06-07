import React, { useState } from 'react';
import './navbar.css'


const SideBar = ({ openClass }) => {
  const [recorddiv, setRecorddiv] = useState(false);
  const [reportdiv, setReportdiv] = useState(false);
  const [profilrdiv, setProfilrdiv] = useState(false);



  const handlerecord = () => {
    setRecorddiv(!recorddiv);
    setReportdiv(false);
    setProfilrdiv(false);

  }

  const handlereport = () => {
    setRecorddiv(false);
    setReportdiv(!reportdiv);
    setProfilrdiv(false);
  }
  const handlereprofile = () => {
    setRecorddiv(false);
    setProfilrdiv(!profilrdiv);
    setReportdiv(false);
    
  }
  
  const handleClick = () => {
    window.location.href = '/'
    localStorage.clear();
  }
  return (
    <nav className={openClass === true ? 'closeslidernav slidernav' : ' slidernav'}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/Dashboard">
            <i className="material-icons">dashboard</i>
            &nbsp;Dashboard
          </a>
        </li>

        <li>
          <a className="menu-item" href='#'>
            <i className="material-icons">list</i>
            &nbsp;Digital Files
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">

            <i className="material-icons">arrow_forward_ios</i>
            <span onClick={handlerecord}>Request</span>


          </a>

        </li>
        {recorddiv ?
          <ul className="innerul" id='reportinnerdiv'  >
            <a href='/RecordPickup'><li>Record Pickup</li></a>
            <a href='/RecordRetrival'><li>Record Retrieval</li></a>
            <a href='/ScanningRequest'> <li>Scanning Request</li></a>
            <a href='/Shredding'> <li>Shredding</li></a>
            <a href='/OtherRequest'>  <li>Other</li></a>
          </ul>
          : null}

        <li>
          <a className="menu-item" href='#' >

            <span onClick={handlereport}><i className="material-icons">arrow_forward_ios</i>
              Reports</span>

          </a>
        </li>
        {reportdiv ?
          <ul className="innerul" id='reportinnerdiv' >
            <a href="/InwardReports"> <li>Inward Report</li></a>
            <a href="/RetrivalReports"> <li>Retrieval Report</li></a>
            <a href="/ScanningReports"> <li>Scanning Report</li></a>
            <a href="/StockReports"> <li>Stock Report</li></a>
          </ul>
          : null}

          
        <li>
          <a className="menu-item" href='#' >

            <span onClick={handlereprofile} className="profiletext"><i className="material-icons">person</i>
              Account</span>
          </a>
        </li>
        {profilrdiv ?
          <ul className="innerprofileul" id='reportinnerdiv' >
            <a href="/Profile"> <li>Profile</li></a>
            <a href="/Changepassword"> <li>Change Password</li></a>
            <a href="#" onClick={handleClick}> <li>Logout</li></a>
          
          </ul>
          : null}

      </ul>
    </nav>
  );
};

export default SideBar;